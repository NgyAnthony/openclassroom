var nombre = prompt("Entrez un nombre entre 1 et 100")
while(nombre <= 100){
    nombre++
    console.log(nombre)
    if (nombre % 3 === 0){
        console.log ("Fizz")
    }
        else if (nombre % 5 === 0){
            console.log("Buzz")
        }
        if((nombre % 5 === 0) & (nombre % 3 === 0) ){
                console.log("FizzBuzz")
            }
} 
