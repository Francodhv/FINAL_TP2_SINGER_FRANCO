import { assert } from 'console';
import ingresarDatosSonda, { listarDatosSondaPorId, listarDatosTodasLasSondas, obtenerEstadisticasMuestras } from '../src/sondas.js';


const sondas = []


try {
    const resultadoIngreso = ingresarDatosSonda(1, 25);
    assert(Date.parse(resultadoIngreso.fechaHora));
    sondas.push(resultadoIngreso)
} catch (error) {
    console.error(error);
}

try {
    const resultadoIngreso = ingresarDatosSonda(1, -100);
    assert(Date.parse(resultadoIngreso.fechaHora));
    sondas.push(resultadoIngreso)
} catch (error) {
    console.error(error);
}


try {
    const todasLasSondas = listarDatosTodasLasSondas(sondas);
    assert(todasLasSondas.length === 1);
} catch (error) {
    console.error(error);
}


try {
    const datosSonda1 = listarDatosSondaPorId(1);
    assert(datosSonda1.length === 1);
    assert(datosSonda1[0].id === 1);
} catch (error) {
    console.error(error);
}


try {
    const estadisticas = obtenerEstadisticasMuestras();
    console.log("Estadísticas de muestras:", estadisticas);
} catch (error) {
    console.error(error);
}
