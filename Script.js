/* 
function teste(){

    var validação_teste = document.getElementById('input_e_6').value.length

    var teste_testo = document.getElementById('input_e_6')

    var cor_input = document.getElementById('input_e_6').value

    if(cor_input !== 'e' & validação_teste > 0){
      teste_testo.style.backgroundColor = 'red'  
      document.getElementById('input_p_6').focus()
    }
    else{
        teste_testo.style.backgroundColor = 'green'      
    }

}     */

function iniciar(){
    aparecer = document.getElementById("modal")

    if (aparecer.style.display == "none"){
        aparecer.style.display = "flex"
    }else{
        aparecer.style.display = "none"
    }
}
function array_p_m() {

    var array = document.getElementsByClassName('input_m')

    for (contador = 0; contador <=array.length; contador++) {

        if (array.item(contador).value !== 'm' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'm' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_e() {

    var array = document.getElementsByClassName('input_e')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'e' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'e' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_p() {

    var array = document.getElementsByClassName('input_p')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'p' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'p' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_r() {

    var array = document.getElementsByClassName('input_r')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'r' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'r' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_o() {

    var array = document.getElementsByClassName('input_o')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'o' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'o' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_c() {

    var array = document.getElementsByClassName('input_c')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'c' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'c' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_a() {

    var array = document.getElementsByClassName('input_a')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'a' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'a' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_h() {

    var array = document.getElementsByClassName('input_h')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'h' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'h' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_i() {

    var array = document.getElementsByClassName('input_i')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'i' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'i' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_s() {

    var array = document.getElementsByClassName('input_s')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 's' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 's' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_t() {

    var array = document.getElementsByClassName('input_t')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 't' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 't' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_u() {

    var array = document.getElementsByClassName('input_u')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'u' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'u' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_b() {

    var array = document.getElementsByClassName('input_b')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'b' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'b' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_d() {

    var array = document.getElementsByClassName('input_d')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'd' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'd' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_l() {

    var array = document.getElementsByClassName('input_l')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'l' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'l' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function array_p_l() {

    var array = document.getElementsByClassName('input_l')

    for (contador = 0; contador <= array.length; contador++) {

        if (array.item(contador).value !== 'l' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#c23e3e'
        }
        else if (array.item(contador).value == 'l' & array.item(contador).value.length > 0) {
            array.item(contador).style.backgroundColor = '#42c23e'
        }
    }
}

function if_p_id_f(){

    var id_f = document.getElementById('input_f')

    if(id_f.value == 'f'){
       id_f.style.backgroundColor = '#42c23e' 
    }
    else{
        id_f.style.backgroundColor = '#c23e3e'   
    }

}

function if_p_id_7(){

    var id_7 = document.getElementById('input_7')

    if(id_7.value == '7'){
       id_7.style.backgroundColor = '#42c23e' 
    }
    else{
        id_7.style.backgroundColor = '#c23e3e'   
    }

}

function if_p_id_5(){

    var id_5 = document.getElementById('input_5')

    if(id_5.value == '5'){
       id_5.style.backgroundColor = '#42c23e' 
    }
    else{
        id_5.style.backgroundColor = '#c23e3e'   
    }

}


function if_p_id_g(){

    var id_g = document.getElementById('input_g')

    if(id_g.value == 'g'){
       id_g.style.backgroundColor = '#42c23e' 
    }
    else{
        id_g.style.backgroundColor = '#c23e3e'   
    }

}