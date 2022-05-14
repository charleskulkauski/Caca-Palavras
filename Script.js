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
function array_p_m(){

    var array_m = document.getElementsByClassName('input_m')

        for(contador = 0 ; contador <= 9; contador ++){

         if(array_m.item(contador).value !== 'm' & array_m.item(contador).value.length > 0){
            array_m.item(contador).style.backgroundColor = 'red'
         }
         else if(array_m.item(contador).value == 'm' & array_m.item(contador).value.length > 0){
            array_m.item(contador).style.backgroundColor = 'green'   
        }

        }
    }

    function array_p_e(){

        var array_e = document.getElementsByClassName('input_e')
    
            for(contador = 0 ; contador <= 8; contador ++){
    
             if(array_e.item(contador).value !== 'e' & array_e.item(contador).value.length > 0){
                array_e.item(contador).style.backgroundColor = 'red'
             }
             else if(array_e.item(contador).value == 'e' & array_e.item(contador).value.length > 0){
                array_e.item(contador).style.backgroundColor = 'green'   
            }
    
            }
        }

        function array_p_p(){

            var array_p = document.getElementsByClassName('input_p')
        
                for(contador = 0 ; contador <= 8; contador ++){
        
                 if(array_p.item(contador).value !== 'e' & array_p.item(contador).value.length > 0){
                    array_p.item(contador).style.backgroundColor = 'red'
                 }
                 else if(array_p.item(contador).value == 'e' & array_p.item(contador).value.length > 0){
                    array_p.item(contador).style.backgroundColor = 'green'   
                }
        
                }
            }
   
            function array_p_r(){

                var array_r = document.getElementsByClassName('input_r')
            
                    for(contador = 0 ; contador <= 8; contador ++){
            
                     if(array_r.item(contador).value !== 'e' & array_r.item(contador).value.length > 0){
                        array_r.item(contador).style.backgroundColor = 'red'
                     }
                     else if(array_r.item(contador).value == 'e' & array_r.item(contador).value.length > 0){
                        array_r.item(contador).style.backgroundColor = 'green'   
                    }
            
                    }
                }