var jugadores=0
var nomjug= [jugadores]

function agregarjugador(){
    
    let divjug=document.createElement("div")
    divjug.setAttribute("class","divjugadores")
    
    nomjug[jugadores]=document.createElement("input")
    nomjug[jugadores].setAttribute("class","inputjugador")
    nomjug[jugadores].value= `Jugador ${jugadores+1}`
    nomjug[jugadores].id= `Jugador ${jugadores+1}`
    let players=document.getElementById("players")
    
    divjug.appendChild(nomjug[jugadores])    
    players.appendChild(divjug)
    
    jugadores++
    // console.log(nomjug)

    document.getElementById("oculto").className=""
    document.getElementById("oculto").innerHTML=""

    if (jugadores===4) {
      console.log(jugadores)
      console.log(divjug)
      console.log(nomjug)
      document.getElementById("botonadd").setAttribute("class","disabled")
      return document.getElementById("botonadd").setAttribute("disabled","disabled")
    } else {
      
    }

}


function botonjugar(){
  
  if (nomjug==0) {
    document.getElementById("oculto").className="oculto"
    document.getElementById("oculto").innerHTML="POR FAVOR AGREGAR AL MENOS 1 JUGADOR"
  } else {
    paraselector=nomjug.length
    console.log(paraselector)
    let interfase=document.createElement("div")

    let texto1=document.createElement("div")

    let texto2=document.createElement("div")
    texto2.setAttribute("class","hazclick")
    texto2.innerHTML="Haz click sobre el dado o el boton:"

    let player = [0]

      for (let i = 0; i < paraselector; i++) {
        
        player[i]=document.getElementById(`Jugador ${i+1}`).value
                
        texto1.innerHTML=player[i]
        interfase=texto1+texto2
        
      }
      
      document.getElementById("titulojugador").innerHTML=texto1.innerHTML
      
      
    }

    // let player1=document.getElementById("Jugador 1")
    // console.log(player1.value)

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
  
  let dadoimagen = `../Images/${dado}.png`
  // console.log(`dado: ${dado}`)
  sumatoriaact+=dado
  // console.log(`sumatoria ${sumatoriaact}`)
  vectordedados[a]=dado
  document.getElementById("imagendado").src=dadoimagen
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

