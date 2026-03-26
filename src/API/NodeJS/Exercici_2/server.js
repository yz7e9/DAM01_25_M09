// Importamos Express usando ES Modules
import express from "express";

// Creamos la instancia de la aplicación Express
const app = express();

// Definimos el puerto en una constante para facilitar su configuración
const PORT = 3001;

// Datos simulados --> como si fuera lo que nos devuelve la BDD
let students = [
    { id: "A001", nombre: "Abril", curso: "1º DAW" },
    { id: "A002", nombre: "Marc", curso: "1º DAM" }
];

// Helper: valida campos mínimos
function validateStudent(obj) {
    if (!obj || typeof obj !== "object") return "Body inválido";
    if (!obj.id || !obj.nombre || !obj.curso) return "Faltan campos: id, nombre, curso";
    return null;
}

// Helper: comprueba id único
function existsId(id) {
    return students.some(s => s.id === id);
}

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})
    .use(express.json());

// GET /students
app.get("/students", (req, res) => {
    res.json(students);
});

// TODO 1: GET /students/:id
//Buscamos la info de un alumno completo.
app.get("/students/:id", (req, res) => {
    // 1. Extraer id de la URL. Buscar alumno en el array
    const student = students.find(s => s.id === req.params.id);

    // 3. Si no existe → 404
    if (!student) return res.status(404).json({ message: "Not Found" });

    // 4. Si existe → devolver 200 + alumno
    res.json(student);
});


// TODO 2: DELETE /students/:id
app.delete("/students/:id", (req, res) => {
    // 2. Comprobar si existe
    const before = students.length;

    // 3. Extraer id. Eliminarlo del array
    students = students.filter(s => s.id !== req.params.id);

    if (students.length === before) {
        return res.status(404).json({ message: "Not Found" });
    }

    res.status(204).header('Access-Control-Allow-Origin', '*').end();
});

// TODO 3: POST /students
app.post("/students", (req, res) => {
    try {
        const alumnoNew = req.body;

        // 2. Validar que tenga id, nombre y curso
        const validationMsg = validateStudent(alumnoNew);
        if (validationMsg) return res.status(400).json({ message: validationMsg });

        // 3. Comprobar que el id no esté repetido
        if (existsId(alumnoNew.id)) return res.status(409).json({ message: "id ya existe" });

        // 4. Añadir al array students
        students.push({ id: alumnoNew.id, nombre: alumnoNew.nombre, curso: alumnoNew.curso });
        res.status(201).json({ message: "Created", student: alumnoNew });
    } catch {
        //Si hay algún error.
        res.status(400).json({ message: "JSON inválido" });
    }
});

// TODO 4: PUT /students/:id
app.put("/students/:id", (req, res) => {
    // 2. Extraer id. Buscar alumno
    const idx = students.findIndex(s => s.id === req.params.id);

    // 3. Si no existe → 404
    if (idx === -1) {
        return res.status(404).json({ message: "Not Found" });
    }

    // 4. Leer body con req.body q es ASINCRONO
    const payload = req.body;
    
    //Si hay algún error
    if (!payload || typeof payload !== "object" || Object.keys(payload).length === 0) {
        return res.status(400).json({ message: "JSON inválido" });
    }

    // 5. Actualizar campos enviados
    // (Actualización parcial: si viene nombre/curso, lo actualizamos)
    if (payload.nombre !== undefined) students[idx].nombre = payload.nombre;
    if (payload.curso !== undefined) students[idx].curso = payload.curso;

    // 6. Devolver 200 + alumno actualizado
    res.json(students[idx]);
});

// Si no coincide ningún endpoint
app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});