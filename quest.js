alert("Olá, obrigado pelo acesso! Mando um salve especial para o pessoal do Kilomba Imbariê")

function first(x){
    var deodoro = window.document.getElementsByClassName("alternativa")[0]
    var floriano = window.document.getElementsByClassName("alternativa")[1]
    var getulio = window.document.getElementsByClassName("alternativa")[2]
    var cana = window.document.getElementsByClassName("alternativa")[3]
    var bovino = window.document.getElementsByClassName("alternativa")[4]
    var cafe = window.document.getElementsByClassName("alternativa")[5]
    var privada = window.document.getElementsByClassName("alternativa")[6]
    var vir = window.document.getElementsByClassName("alternativa")[7]
    var transporte = window.document.getElementsByClassName("alternativa")[8]
    var criar = window.document.getElementsByClassName("alternativa")[9]
    var execultar = window.document.getElementsByClassName("alternativa")[10]
    var julgar = window.document.getElementsByClassName("alternativa")[11]
    var Revolucao = window.document.getElementsByClassName("alternativa")[12]
    var segunda = window.document.getElementsByClassName("alternativa")[13]
    var fria = window.document.getElementsByClassName("alternativa")[14]
    var ditadura = window.document.getElementsByClassName("alternativa")[15]
    var acumulo = window.document.getElementsByClassName("alternativa")[16]
    var poderes = window.document.getElementsByClassName("alternativa")[17]
    var franca = window.document.getElementsByClassName("alternativa")[18]
    var eua = window.document.getElementsByClassName("alternativa")[19]
    var inglaterra = window.document.getElementsByClassName("alternativa")[20]
    var russia = window.document.getElementsByClassName("alternativa")[21]
    var sovietica = window.document.getElementsByClassName("alternativa")[22]
    var EstadosUnidos = window.document.getElementsByClassName("alternativa")[23]

    if(x == 1){
        mudarCores(deodoro, floriano, getulio, 1)
    }
    else if (x == 2){
        mudarCores(deodoro, floriano, getulio, 2)
    }
    else if (x == 3){
        mudarCores(deodoro, floriano, getulio, 3)
    }
    else if (x == 4){
        mudarCores(cafe, bovino, cana, 3)
    }
    else if (x == 5){
        mudarCores(cafe, bovino, cana, 2)
    }
    else if (x == 6){
        mudarCores(cafe, bovino, cana, 1)
    }
    else if (x == 7){
        mudarCores(vir, privada, transporte, 2)
    }
    else if (x == 8){
        mudarCores(vir, privada, transporte, 1)
    }
    else if (x == 9){
        mudarCores(vir, privada, transporte, 3)
    }
    else if (x == 10){
        mudarCores(criar, execultar, julgar, 1)
    }
    else if (x == 11){
        mudarCores(criar, execultar, julgar, 2)
    }
    else if (x == 12){
        mudarCores(criar, execultar, julgar, 3)
    }
    else if(x == 13){
        mudarCores(fria, Revolucao, segunda, 2)
    }
    else if(x == 14){
        mudarCores(fria, Revolucao, segunda, 3)
    }
    else if(x == 15){
        mudarCores(fria, Revolucao, segunda, 1)
    }
    else if(x == 16){
        mudarCores(poderes, ditadura, acumulo, 2)
    }
    else if(x == 17){
        mudarCores(poderes, ditadura, acumulo, 3)
    }
    else if(x == 18){
        mudarCores(poderes, ditadura, acumulo, 1)
    }
    else if(x == 19){
        mudarCores(inglaterra, franca, eua, 2)
    }
    else if(x == 20){
        mudarCores(inglaterra, franca, eua, 3)
    }
    else if(x == 21){
        mudarCores(inglaterra, franca, eua, 1)
    }
    else if(x == 22){
        mudarCores(sovietica, russia, EstadosUnidos, 2)
    }
    else if(x == 23){
        mudarCores(sovietica, russia, EstadosUnidos, 1)
    }
    else if(x == 24){
        mudarCores(sovietica, russia, EstadosUnidos, 3)
    }
}

function mudarCores(a, b, c, x){
    if (x == 1){
        if (b.style.padding != '5px' && c.style.padding != '5px'){
            a.style.padding = '5px'
        }
        a.style.backgroundColor = '#47b4ee'
        a.style.color = 'white'
        b.style.color = 'white'
        c.style.color = 'white'
        b.style.backgroundColor = '#f70000' 
        c.style.backgroundColor = '#f70000'

    }
    else if (x == 2){
        if (a.style.padding != '5px' && c.style.padding  != '5px'){
            b.style.padding = '5px'
        }
        a.style.backgroundColor = '#47b4ee'
        a.style.color = 'white'
        b.style.color = 'white'
        c.style.color = 'white'
        b.style.backgroundColor = '#f70000' 
        c.style.backgroundColor = '#f70000'
        
    }
    else if (x == 3){
        if (a.style.padding != '5px' && b.style.padding != '5px'){
            c.style.padding = '5px'
        }
        a.style.backgroundColor = '#47b4ee'
        a.style.color = 'white'
        b.style.color = 'white'
        c.style.color = 'white'
        b.style.backgroundColor = '#f70000' 
        c.style.backgroundColor = '#f70000' 

    }
}
function nota(y){

}