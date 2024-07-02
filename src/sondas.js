
const sondasData = [];

export default function ingresarDatosSonda(id, temperatura) {
    if (id < 1 || id > 5 || temperatura < -20 || temperatura > 100) {
        throw 'Datos no válidos'
    }
    const fechaHora = new Date().toISOString();
    const datoSonda = { id, temperatura, fechaHora };
    sondasData.push(datoSonda);
    return datoSonda;
}


export  function listarDatosTodasLasSondas(sondasParam) {
  for (let index = 0; index < sondasParam.length; index++) {
    console.log(sondasParam[index])
    
  }
    return sondasParam;
}


export  function listarDatosSondaPorId(id) {
    const datosSonda = sondasData.filter(dato => dato.id === id);
    if (datosSonda.length === 0) {
        throw 'Número de sonda incorrecto';
    }
    console.log(datosSonda)
    return datosSonda;
}


export function obtenerEstadisticasMuestras() {
    const estadisticas = {
        cantidadTotalMuestras: sondasData.length,
        temperaturaSondas: {}
    };
    const sondaIds = [1, 2, 3, 4, 5];
    sondaIds.forEach(id => {
        const muestrasSonda = sondasData.filter(dato => dato.id === id);
        const cantidad = muestrasSonda.length;
        if (cantidad > 0) {
            const promedio = muestrasSonda.reduce((acc, dato) => acc + dato.temperatura, 0) / cantidad;
            estadisticas.temperaturaSondas[id] = { cantidad, promedio };
        } else {
            estadisticas.temperaturaSondas[id] = { cantidad: 0, promedio: 0 };
        }
    });

    return { estadisticas };
}
