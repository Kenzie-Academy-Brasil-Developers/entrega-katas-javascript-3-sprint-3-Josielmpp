const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui
    // 1.  Exibir os números de 1 a 25:
    let result = []
    for(let i = 1; i <= 25; i++){
    
            result.push(i)
        
    }
    showResults(result);
}
kata1();

function kata2() {
    // implemente o código do kata 2 aqui
    // Exibir os números de 25 a 1
    let result = []
    for(let i = 25; i > 0; i--){
        
            result.push(i)
        
    }
    return showResults(result);
}
kata2();

function kata3() {
    // implemente o código do kata 3 aqui
    // Exibir os números de -1 a -25:
    let result = []
    for(let i = -1; i >= -25; i--){
    
            result.push(i)
        
    }
    showResults(result);
}
kata3();

function kata4() {
    // implemente o código do kata 4 aqui
    // Exibir os números de -25 a -1
    let result = []
    for(let i = -25; i <= -1; i++){
    
        result.push(i)
                   
    }
    showResults(result);
}
kata4();

function kata5() {
    // implemente o código do kata 5 aqui
    // Exibir os números ímpares de 25 a -25:
    let result = []
    for(let i = 25; i >= -25; i--){
    
        if(i % 2 !== 0){
            result.push(i)
        }
            
        
    }
    return showResults(result);
}
kata5();



function kata6() {
    // implemente o código do kata 6 aqui
    // Exibir os números divisíveis por 3 até o 100:
    let result = []
    for(let i = 3; i <= 100; i++){
    
        if(i % 3 === 0){
            result.push(i)
        }
            
        
    }
    showResults(result);
}
kata6();

function kata7() {
    // implemente o código do kata 7 aqui
    // Exibir os números divisíveis por 7 até o 100:
    let result = []
    for(let i = 7; i <= 100; i++){
    
        if(i % 7 === 0){
            result.push(i)
        }
            
        
    }
    showResults(result);
}
kata7();

function kata8() {
    // implemente o código do kata 8 aqui
    // Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100
    let result = []
    for(let i = 100; i >= 3; i--){
    
        if(i % 7 === 0 || i % 3 === 0){
            result.push(i)
        }
            
        
    }
    showResults(result);
}
kata8();

function kata9() {
    // implemente o código do kata 9 aqui
    // Exibir os números ímpares divisíveis por 5 até o 100:
    let result = []
    for(let i = 5; i <= 100; i++){
    
        if(i % 5 === 0 && i % 2 !== 0){
            result.push(i)
        }
            
        
    }
    showResults(result);
}
kata9();

function kata10() {
    // implemente o código do kata 10 aqui
    // Exibir os 20 elementos de sampleArray
    let result = []
    let temporaria = 0
    for(let i = 0; i < sampleArray.length; i++ ){
        temporaria = sampleArray[i]
        result.push(temporaria)
    }
    showResults(result);
}
kata10();

function kata11() {
    // implemente o código do kata 11 aqui
    // Exibir todos os números pares contidos em sampleArray.
    let result = []
    let temporaria = 0
    for(let i = 0; i < sampleArray.length; i++ ){
        if(sampleArray[i] % 2 === 0){
            temporaria = sampleArray[i]
            result.push(temporaria)
        }

    }
    showResults(result);
}
kata11();

function kata12() {
    // implemente o código do kata 12 aqui
    // Exibir todos os números ímpares contidos em sampleArray.
    let result = []
    let temporaria = 0
    for(let i = 0; i < sampleArray.length; i++ ){
        if(sampleArray[i] % 2 !== 0){
            temporaria = sampleArray[i]
            result.push(temporaria)
        }

    }
    showResults(result);
}
kata12();

function kata13() {
    // implemente o código do kata 13 aqui
    // Exibir os números divisíveis por 8 em sampleArray:
    let result = []
    let temporaria = 0
    for(let i = 0; i < sampleArray.length; i++ ){
        if(sampleArray[i] % 8 === 0){
            temporaria = sampleArray[i]
            result.push(temporaria)
        }

    }
    
    showResults(result);
}
kata13();

function kata14() {
    // implemente o código do kata 14 aqui
    // Exibir o quadrado de cada elemento de sampleArray.
    let result = []
    let temporaria = 0
    for(let i = 0; i < sampleArray.length; i++ ){

            temporaria = sampleArray[i] * sampleArray[i]
            result.push(temporaria)
        }

    showResults(result);
}
kata14();

function kata15() {
    // implemente o código do kata 15 aqui
    // Exibir a soma de todos os números de 1 a 20
    let result = 0
    for(let i = 1; i <= 20; i++){
        result = result + i;
    }
    showResults(result);
}
kata15();

function kata16() {
    // implemente o código do kata 16 aqui
    // Exibir a soma de todos os elementos de sampleArray.
    let result = 0
    let temporaria = 0
    for(let i = 0; i < sampleArray.length; i++){
        temporaria = sampleArray[i]
        result = result + temporaria;
    }
    showResults(result);
}
kata16();

function kata17() {
    // implemente o código do kata 17 aqui
    // Exibir o menor elemento de sampleArray.
    let menor = 0
    for(let i = 0; i < sampleArray.length; i++){
        if(i===0){
            menor = sampleArray[i] 
        }else if(menor > sampleArray[i]){
            menor = sampleArray[i]
        }
    }

    showResults(menor);
}
kata17();

function kata18() {
    // implemente o código do kata 18 aqui
    // Exibir o maior elemento de sampleArray.
    let maior = 0
    for(let i = 0; i < sampleArray.length; i++){
        if(i===0){
            maior = sampleArray[i] 
        }else if(maior < sampleArray[i]){
            maior = sampleArray[i]
        }
    }

    showResults(maior);
}
kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    showResults(result);
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    showResults(result);
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    showResults(result);
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    showResults(result);
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    showResults(result);
}

// Antes de começar a desenvolver suas funções de resolução dos Katas, crie a função **"showResults"** seguindo os seguintes passos:

// 1. Essa função deve receber um valor como parâmetro.  
// 2. Essa função deve mostrar no DOM o valor recebido.  
// 3. Essa função deve ser chamada dentro de todas as outras funções.  


// const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// function kata1() {
//     // implemente o código do kata 1 aqui
//     // 1.  Exibir os números de 1 a 25:
//     let result = []
//     for(let i = 0; i<sampleArray.length; i++){
//         if(sampleArray[i] <= 25){
//             result.push(sampleArray[i])
//         }
//     }
//     showResults(result);
// }

function showResults(valor){
    console.log(valor)
    const divToAppend = document.getElementById('ul')
    const result = document.createElement('li')
    
    result.innerText = valor
    divToAppend.appendChild(result) 
}

function kata8() {
    // implemente o código do kata 8 aqui
    // Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100
    let result = []
    for(let i = 100; i >= 3; i--){
    
        if(i % 7 === 0 || i % 3 === 0){
            result.push(i)
        }
            
        
    }
    showResults(result);
}


