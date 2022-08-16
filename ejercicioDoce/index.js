
const num = 6;
function mynumero(num) {
    let arrayNums=[0,1]
    for (let i = 2; i < num; i++) {
        arrayNums[i] = arrayNums[i-1] + arrayNums[i-2]
    }
    return arrayNums
}
const retmyNumber = mynumero
console.log(retmyNumber)
console.log(mynumero)
console.log(num)