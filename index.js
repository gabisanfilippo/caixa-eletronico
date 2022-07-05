let estoqueNotas = {
    dois: 10,
    cinco: 10,
    dez: 10,
    vinte: 10,
    cinquenta: 10,
    cem: 10
}

let notaDois = 0
let notaCinco = 0
let notaDez = 0
let notaVinte = 0
let notaCinquenta = 0
let notaCem = 0

function saque(valorSaque){
    for(notaCem; valorSaque>=100; notaCem++){
        if(estoqueNotas.cem > 0){
            valorSaque = valorSaque - 100
            estoqueNotas.cem = estoqueNotas.cem - 1
        } else {
            break
        }
    }
    for(notaCinquenta; valorSaque>=50; notaCinquenta++){
        if(estoqueNotas.cinquenta > 0){
            valorSaque = valorSaque - 50
            estoqueNotas.cinquenta = estoqueNotas.cinquenta - 1
        } else {
            break
        }
    }
    for(notaVinte; valorSaque>=20; notaVinte++){
        if(estoqueNotas.vinte > 0){
            valorSaque = valorSaque - 20
            estoqueNotas.vinte = estoqueNotas.vinte - 1
        } else {
            break
        }
    }
    for(notaDez; valorSaque>=10; notaDez++){
        if(estoqueNotas.dez > 0){
            valorSaque = valorSaque - 10
            estoqueNotas.dez = estoqueNotas.dez - 1
        } else {
            break
        }
    }
    for(notaCinco; valorSaque>=5; notaCinco++){
        if(estoqueNotas.cinco > 0){
            valorSaque = valorSaque - 5
            estoqueNotas.cinco = estoqueNotas.cinco - 1
        } else {
            break
        }
    }
    for(notaDois; valorSaque>=2; notaDois++){
        if(estoqueNotas.dois > 0){
            valorSaque = valorSaque - 2
            estoqueNotas.dois = estoqueNotas.dois - 1
        } else {
            break
        }
    }
    
    console.log("faltou: "+valorSaque+", notas de cem: "+notaCem+", notas de cinquenta: "+notaCinquenta+", notas de vinte: "+notaVinte+", notas de dez: "+notaDez+", notas de cinco: "+notaCinco+", notas de dois: "+notaDois)
}

saque(1698)