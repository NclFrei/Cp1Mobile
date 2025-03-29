// Constants for validation
const MAX_FALTAS = 5 
const NOTA_MINIMA = 6.0 

export const validateGrades = (nota1, nota2, nota3, faltas) => {
  // Convert inputs to numbers, defaulting to 0 if empty
  const grade1 = nota1 === "" ? 0 : Number.parseFloat(nota1)
  const grade2 = nota2 === "" ? 0 : Number.parseFloat(nota2)
  const grade3 = nota3 === "" ? 0 : Number.parseFloat(nota3)
  const absences = faltas === "" ? 0 : Number.parseInt(faltas)

  // Check for attendance first
  if (absences > MAX_FALTAS) {
    return "Reprovado por falta"
  }


  const grades = [grade1, grade2, grade3].sort((a, b) => b - a)
  const average = (grades[0] + grades[1]) / 2
  const formattedAverage = average.toFixed(2)


  if (average < NOTA_MINIMA) {
    return "Reprovado por nota"
  } else {
    return `Aprovado com média de ${formattedAverage}`
  }
}

