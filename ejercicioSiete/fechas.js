const fechaHoy =new Date()
console.log(fechaHoy)

const fechaNac = new Date(2001, 9, 11,0,0,0)
console.log(fechaNac)

const compFNyFH=  fechaHoy > fechaNac
console.log(compFNyFH)

const dia_Nac= fechaNac.getDate()
console.log(dia_Nac)

const mes_Nac = fechaNac.getMonth()+1
console.log(mes_Nac)

const fech_Nac= fechaNac.getFullYear()
console.log(fech_Nac)