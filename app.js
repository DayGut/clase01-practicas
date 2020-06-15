let fs = require('fs');

//console.log(fs)

let listaDeTareas = fs.readFileSync('./tareas.json','utf-8');

let process = require('process');

//console.log(process.argv)

//console.log(typeof listaDeTareas);

let tareas = JSON.parse(listaDeTareas);

//console.log(tareas);

let comando = process.argv[2];

//console.log(comando)

switch (comando){
    case 'listar' :
    for(let i = 0 ; i < tareas.length ; i++){
        console.log("Titulo: " + tareas[i].titulo)
    }
    break;
    case 'agregar':
    let nuevoTitulo = process.argv[3];
    
//console.log(nuevoTitulo)
    let nuevaTarea = {
        titulo  :   nuevoTitulo,
        estado  :   "pendiente"
    }
    tareas.push(nuevaTarea);
    //console.log(tareas)
    let nuevaListaDeTareas = JSON.stringify(tareas)
    //console.log(nuevaListaDeTareas)
    fs.writeFileSync('./tareas.json',nuevaListaDeTareas,'utf-8')
    break
    case undefined:
        //console.log("Escrbime un comando porfa");
        break
    default:
        //console.log("Escribime un comando válido")
}

let fs = require('fs');
let listaDeTareas = fs.readFileSync('./tareas.json','utf-8');
let tareas = JSON.parse(listaDeTareas);
​
let process = require('process');
let comando = process.argv[2];
​
switch (comando){
    case 'listar' :
    for(let i = 0 ; i < tareas.length ; i++){
        console.log("Titulo: " + tareas[i].titulo)
    }
    break;
    case 'agregar':
    let nuevoTitulo = process.argv[3];
​
    let nuevaTarea = {
        titulo  :   nuevoTitulo,
        estado  :   "pendiente"
    }
​
    tareas.push(nuevaTarea);
​
    let nuevaListaDeTareas = JSON.stringify(tareas)
    fs.writeFileSync('./tareas.json',nuevaListaDeTareas,'utf-8')
​
    break
    case undefined:
        console.log("Escribime un comando porfa");
        break
    default:
        console.log("Escribime un comando válido")
}
