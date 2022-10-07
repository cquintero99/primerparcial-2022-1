

$("#carta").click(function (event) {
    $("#contenedor").load('carrito.html');
    
});

var array=[];
$(".comprar").click(function(event){
    let nombre=document.querySelector(".nombre").innerHTML;
    console.log(nombre);
  let nuevo =array.push(nombre);
});

$("#carrito").click(function(event){
    ejecutarApi();
});

function getData(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
};

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
                   
                    
                    ` <div >
                     <img class="imgCoctel"  height="150" width="150" src="${drinks[i].strDrinkThumb}"" > <h2 class="nombreCoctel" >${drinks[i].strDrink}</h2> </li>' `;
                }
            }
            document.querySelector("#contenedor").innerHTML = rta;
        }
} 