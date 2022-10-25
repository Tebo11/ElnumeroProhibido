
function cantjug(){
    let jugadores=document.getElementById("Jugadores").value
    console.log(jugadores)
    
    for (var i = 0; i < jugadores; i++) {

      document.getElementById("oculto").innerHTML=`${i}`
        
      }

}





//JUEGO
var dado=0
var sumatoriaact=0
var vectordedados= [0]
var copyvector= [0]
var copy2vector= [0]
var a=0
var sumajugador=0

function game(){
  dado=getRandomInt()  
  // console.log(`dado: ${dado}`)
  sumatoriaact+=dado
  // console.log(`sumatoria ${sumatoriaact}`)
  vectordedados[a]=dado
  
  // console.log(`AAA: ${vectordedados[a]}`)

  
  // console.log(`indice: ${a}`)
  // console.log(`Dados tirados: ${vectordedados}`)

  buscarprohibido();
  a++
  // console.log(`copy: ${copyvector}`)
  if (copyvector[0]==0) {
    ultimodado=dado
    ultimosdados=vectordedados
    sumatoriaperdida=sumatoriaact
    dado=0
    sumatoriaact=0
    vectordedados= [0]
    copyvector= [0]
    copy2vector= [0]
    a=0
    return document.getElementById("dadostirados").innerHTML=`PERDISTE! - DADO TIRADO: ${ultimodado} - Dados Anteriores: ${ultimosdados} - Sumatoria Perdida: ${sumatoriaperdida}`
  } else {
    
    return document.getElementById("dadostirados").innerHTML=`DADO TIRADO: ${dado} - Dados Anteriores: ${vectordedados} - Sumatoria: ${sumatoriaact}`
  }
  
  
}

function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min);
  }

function buscarprohibido(){
  // console.log(`fbpro: ${vectordedados[a]}`)
  
  if (copyvector[dado]!=vectordedados[a]) {
    
    copyvector[dado]=vectordedados[a]
    copyvector[0]=7
    // console.log(`copy2: ${copyvector}`)
    
  } else {
    if (copy2vector[dado]!=vectordedados[a]) {
     
      copy2vector[dado]=vectordedados[a]
      copyvector[0]=8
      // console.log(`copy3: ${copyvector}`)
      
    } else {
      // console.log(`copy4: ${copyvector}`)
      copyvector[0]=0
      
  }
}
  // console.log(`Dados copy: ${copyvector}`)
  // console.log(`Dados copy2: ${copy2vector}`) 
}


function planta(){
  sumajugador+=sumatoriaact
  dado=0
  sumatoriaact=0
  vectordedados= [0]
  copyvector= [0]
  copy2vector= [0]
  a=0
  if (sumajugador>=75) {
    return document.getElementById("tiradas").innerHTML=`Puntos del Juego: ${sumajugador} - GANADOR`
  } else {
    return document.getElementById("tiradas").innerHTML=`Puntos del Juego: ${sumajugador}`  
  }
  
}

