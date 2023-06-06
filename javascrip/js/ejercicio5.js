const materias = {
    inf_111: [7, 60, 3, "inf_111"],
    lab_111: [4, 45, 1, "lab_111"],
    inf_112: [8, 67, 2, "inf_112"],
    inf_113: [10, 78, 2, "inf_113"],
    mat_114: [10, 51, 3, "mat_114"],
    mat_115: [1, 90, 2, "mat_115"],
    lin_116: [8, 34, 1, "lin_116"],
  };

  function verificarAprobacion() {
    const asistenciasInput = document.getElementById("asistenciasInput");
    const promedioInput = document.getElementById("promedioInput");
    const practicasInput = document.getElementById("practicasInput");

    const asistencias = Number(asistenciasInput.value);
    const promedio = Number(promedioInput.value);
    const practicasEntregadas = Number(practicasInput.value);

    const materia = prompt("Ingrese el nombre de la materia (ejemplo: inf_111):");

    if (materia in materias) {
      const datosMateria = materias[materia];
      const asistenciasRequeridas = datosMateria[0];
      const promedioRequerido = datosMateria[1];
      const practicasRequeridas = datosMateria[2];

      const porcentajeAsistencia = (asistencias / asistenciasRequeridas) * 100;
      const porcentajePracticas = (practicasEntregadas / practicasRequeridas) * 100;

      let resultado = "";
      if (porcentajeAsistencia >= 90 && promedio > promedioRequerido && porcentajePracticas >= 70) {
        resultado = "Aprobado";
      } else {
        resultado = "Reprobado";
      }

      alert(`El estudiante está ${resultado} en la materia ${materia}`);
    } else {
      alert("La materia ingresada no existe");
    }
  }