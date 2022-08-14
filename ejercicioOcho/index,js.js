function myFunctio(){
    return true
}
console.log(myFunctio())

setTimeout(()=> console.log("Soy una promesa"), 500)

var m1
function * generarID (){
    let id =0
    
    while(id <= n1){
        id++ 
        if(id % 2 == 0 ){
            return id 
        }
        yield id + id
    }
    
}
const gen = generarID ();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)