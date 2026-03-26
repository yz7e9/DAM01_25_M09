import { notas, nextId } from '../data/notas.js';
import { getById as getByIdStudents } from './students.service.js';

// Valida campos mínimos
function validateNotas(obj) {
    if (!obj || typeof obj !== "object") return "Body inválido";
    if (!obj.studentId || !obj.modulo || !obj.nota) return "Faltan campos: studentId, modulo, nota";
    return null;
}

function notasBetween(x, min, max) {
    return x >= min && x <= max;
}

// Comprueba si el id ya existe

export function getAll() {
    return notas;
}

export function getById(id) {
    if (!id.startsWith('A')) {
        return notas.find(s => s.id == id);
    } else {
        const notasFilter = notas.filter(s => s.studentId == id);
        if (notasFilter.length != 0) {
            return notasFilter
        } else return undefined
    }
}

export function create(notasNew) {
    const validationMsg = validateNotas(notasNew);
    if (validationMsg) return { error: validationMsg };

    if (!getByIdStudents(notasNew.studentId)) return { error: "ID del estudiente no existe", status: 409 };
    if (!notasBetween(notasNew.nota, 0, 10)) return { error: "Nota invàlida", status: 409 };

    notas.push({ id: nextId(), studentId: notasNew.studentId, modulo: notasNew.modulo, nota: notasNew.nota });
    return { data: notasNew };
}

export function update(id, payload) {
    const idx = notas.findIndex(s => s.id == id);
    if (idx === -1) return null;

    if (payload && typeof payload === "object") {
        if (payload.nota !== undefined) notas[idx].nota = payload.nota;
    }

    return notas[idx];
}

export function remove(id) {
    const before = notas.length;
    const filtered = notas.filter(s => s.id != id);

    if (filtered.length === before) return false;

    notas.length = 0;
    notas.push(...filtered);
    return true;
}
