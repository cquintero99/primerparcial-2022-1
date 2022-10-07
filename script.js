
var array=[];
$("#carrito").click(function (event) {
    $("#contenedor").load('carrito.html');
    fulltable();
    
});


$(".comprar").click(function(event){
    let nombre=document.querySelector(".nombre").innerHTML;
    console.log(nombre);
  let nuevo =array.push(nombre);
});

$("#lista").click(function(event){
    ejecutarApi();
});
function agregar(nombre){
    //let nombre=document.querySelector(".nombreCoctel").innerHTML;
    console.log(nombre);
  let number =array.push(nombre);
}

function fulltable(){
    //var table=document.querySelector("#tabla");
    for(let i=0;i<array.length;i++){

        var fila = '<tr> <td> ' + i+ '</td><td>' + array[i] + '</td><td>' + 20000+ '</td></tr>'

    $("#tabla").append(fila);
       /*
        let nomb=array[i];
        let row = table.insertRow();

        let cell_index =row.insertCell();
        cell_index.innerHTML=(i+1);

        let cell_nombre=row.insertCell();
        cell_nombre.innerHTML=nomb;

        let cell_precio=row.insertCell();
        cell_precio.innerHTML=20000;*/
    }
    

               
}




function ejecutarApi(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

        const mostrarData = (data) => {
            var drinks=data.drinks;
            var rta="";
            
            for(let i=0;i<drinks.length;i++){
                if (drinks[i] != undefined){
                    rta += 
                   
                    
                    ` <div class="col" >
                     <img class="imgCoctel"  height="150" width="150" src="${drinks[i].strDrinkThumb}" > <h1 class="nombreCoctel" >${drinks[i].strDrink}</h1><button type="button" class="btn btn-success"  onclick="agregar('${drinks[i].strDrink}')" >COMPRAR</button> <br></div>  `;
                }
            }
            document.querySelector("#contenedor").innerHTML = rta;
        }
} 
