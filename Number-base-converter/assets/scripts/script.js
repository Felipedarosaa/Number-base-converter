const entrada = document.querySelector('#entrada');
const resultado = document.querySelector('#resultado');
const conversao = document.querySelector('#conversao');
const result = document.querySelector('#result');



document.addEventListener('click', e => {
    const el = e.target;
    let txtDec;

    //0x, 0b e 0 interpretam a string como base != de 10
    if(conversao.value === 'decimal'){
        txtDec = entrada.value;
    }else if(conversao.value === 'binario'){
        txtDec = '0b' + entrada.value;
    }else if(conversao.value === 'hexa'){
        txtDec = '0x' + entrada.value;
    }else if(conversao.value === 'octal'){
        txtDec = Number.parseInt(entrada.value, 8);
    }

    //parseInt analisa a string e devolve o result do jeitinho que
    //a gente gosta. Do jeito que funciona :)

    //Converte essa poh@

    if(el.classList.contains('converte')){
        if(resultado.value === 'decimal'){
            result.value = Number(txtDec).toString(10);
        }else if(resultado.value === 'binario'){
            result.value = Number(txtDec).toString(2);
        }else if(resultado.value === 'octal'){
            result.value = Number(txtDec).toString(8);
        }else if(resultado.value === 'hexa'){
            result.value = Number(txtDec).toString(16);
        }
    }

    if(el.classList.contains('limpando')){
        entrada.value = '';
        result.value = '';
    }
});