function calcularEdad(fechaDeNacimiento: string): number {

    const formatoDeFecha = /^\d{4}-\d{2}-\d{2}$/;
    if (!formatoDeFecha.test(fechaDeNacimiento)) {
        throw new Error("Formato de fecha invalido. Use 'YYYY-MM-DD'");
    }

    const fechaNacimiento = new Date(fechaDeNacimiento);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    return edad;
}

const fechaNacimiento = "2001-09-14";
console.log(`La edad es: ${calcularEdad(fechaNacimiento)}`);
