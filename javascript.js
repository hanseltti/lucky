
function resultadoLoto(){
    
    var number, randomlist1, randomlist2, randomlist3, randomlist4, randomlist5, randomlist6, randomlist7, randomlist8, randomlist9;

    randomlist1 = [];

    for (var i = 0; i < 5; i++) {
        number = Math.round(Math.random() * 69);
        randomlist1.push(number);
        console.log(randomlist1);
    }
    
    randomlist2 = [];
    
    for (var i = 0; i < 1; i++) {
        number = Math.round(Math.random() * 25) + 1;
        randomlist2.push(number);
        console.log(randomlist2)
    }
    
    randomlist3 = [];
    
    for (var i = 1; i <= 3; i++) {
        number = Math.round(Math.random() * 8) + 1;
        randomlist3.push(number);
        console.log(randomlist3)
    }
    
    randomlist4 = [];
    
    for (var i = 1; i <= 2; i++) {
        number = Math.round(Math.random() * 8) + 1;
        randomlist4.push(number);
    }

    randomlist5 = [];
    
    for (var i = 0; i < 5; i++) {
        number = Math.round(Math.random() * 36);
        randomlist5.push(number);
    }

    // megamillions
    randomlist6 = [];
    
    for (var i = 0; i < 5; i++) {
        number = Math.round(Math.random() * 70);
        randomlist6.push(number);
    }

    randomlist7 = [];
    for (var i = 0; i < 1; i++) {
        number = Math.round(Math.random() * 24) + 1;
        randomlist7.push(number);
    }
    // end megamillions

    // cash 4 life

    randomlist8 = [];
    for (var i = 0; i < 5; i++) {
        number = Math.round(Math.random() * 60);
        randomlist8.push(number);
    }

    randomlist9 = [];
    for (var i = 0; i < 1; i++) {
        number = Math.round(Math.random() * 3) + 1;
        randomlist9.push(number);
    }
    // end cash 4 life


    let numeroDeLoteria = document.getElementById("numeroDeLoto");
    numeroDeLoteria = numeroDeLoteria.innerHTML = randomlist1;
    
    let numeroPower = document.getElementById("numeroDePower");
    numeroPower = numeroPower.innerHTML = randomlist2;

    let numeroFantasy = document.getElementById("numeroDeFantasy");
    numeroFantasy = numeroFantasy.innerHTML = randomlist5;
    
    let Cash3 = document.getElementById("Cash-3");
    Cash3 = Cash3.innerHTML = randomlist3;
    
    let Cash2 = document.getElementById("Cash-2");
    Cash2 = Cash2.innerHTML = randomlist4;

    let megaM = document.getElementById("megaMillionsNumb");
    megaM = megaM.innerHTML = randomlist6;

    let megaPower = document.getElementById("megaPower");
    megaPower = megaPower.innerHTML = randomlist7;

    let cashForLife = document.getElementById("cashLife");
    cashForLife = cashForLife.innerHTML = randomlist8;

    let cashForLifePower = document.getElementById("cashLifePower");
    cashForLifePower = cashForLifePower.innerHTML = randomlist9;
}

resultadoLoto();





