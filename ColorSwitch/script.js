const buttons = document.querySelectorAll('.button');
const body =document.querySelector("body");

const edit = document.getElementById('edit');



edit.addEventListener("click", function() {



    buttons.forEach(function (button) {
        button.addEventListener('click', function(e){
            if(e.target.id === 'grey')
            {
                body.style.backgroundColor = e.target.id;
    
            }
    
        });
    
    
    
    
        button.addEventListener('click', function(e){
            if(e.target.id === 'red')
            {
                body.style.backgroundColor = e.target.id;
    
            }
    
        });
    
        button.addEventListener('click', function(e){
            if(e.target.id === 'white')
            {
                body.style.backgroundColor = e.target.id;
    
            }
    
        });
    
        button.addEventListener('click', function(e){
            if(e.target.id === 'blue')
            {
                body.style.backgroundColor = e.target.id;
    
            }
    
        });



});


















});