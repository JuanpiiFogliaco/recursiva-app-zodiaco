export const formatMes = (stringMes) => {
  switch (stringMes) {
    case "enero":
      return 0;
    case "febrero":
      return 1;
    case "marzo":
      return 2;
    case "abril":
      return 3;
    case "mayo":
      return 4;
    case "junio":
      return 5;
    case "julio":
      return 6;
    case "agosto":
      return 7;
    case "septiembre":
      return 8;
    case "octubre":
      return 9;
    case "noviembre":
      return 10;
    case "diciembre":
      return 11;
    default:
      return null;
  }
};

export const fechaUsuarioParseDate = (fecha) => {
  const arrFecha = fecha.split("-");
  return new Date(
    2020,
    Number.parseInt(arrFecha[1]) - 1,
    Number.parseInt(arrFecha[2])
  );
};

export const obtenerSignoUsuario = (fechas, fechaUsuario) => {
  let signo;
  for (let i = 0; i < fechas.length; i++) {
    if (
      fechaUsuario >= fechas[i].fechaInicial &&
      fechaUsuario <= fechas[i].fechaFinal
    ) {
      signo = fechas[i].signo;
    }
  }
  return signo;
};

export const calcularCumpleaño = (fechaNacimiento) => {
  let arrFecha = fechaNacimiento.split("-");
  let hoy = new Date();

  let fechaCumpleaños = new Date(
    calcularAño(hoy, fechaNacimiento),
    Number.parseInt(arrFecha[1]) - 1,
    Number.parseInt(arrFecha[2])
  );

  let milisegundosDia = 1000 * 60 * 60 * 24;

  let cantidadDias = Math.ceil(
    (fechaCumpleaños.getTime() - hoy.getTime()) / milisegundosDia
  );

  return cantidadDias;
};

export const calcularAño = (hoy, fechaNacimiento) => {
  let fechaNacimientoDate = new Date(fechaNacimiento);

  if (fechaNacimientoDate < hoy) {
    return 2020;
  }
};

export const calcularCumpleaños = (fechaUsuario) => {
  var one_day = 1000 * 60 * 60 * 24;
  let today = new Date();

  var fechaCumple = new Date(
    today.getFullYear(),
    fechaUsuario.getMonth(),
    fechaUsuario.getDate()
  );
  if (
    today.getMonth() > fechaCumple.getMonth() ||
    (today.getMonth() == fechaCumple.getMonth() &&
      today.getDate() > fechaCumple.getDate())
  ) {
    fechaCumple.setFullYear(fechaCumple.getFullYear() + 1);
    return Math.ceil((fechaCumple.getTime() - today.getTime()) / one_day);
  }

  return Math.ceil((fechaCumple.getTime() - today.getTime()) / one_day);
};

export const parseNumToGenero = (numero) => {
    switch(numero){
        case '1': return 'Masculino';
        case '2': return 'No Binaries';
        case '3': return 'Femenino'
    }
}
