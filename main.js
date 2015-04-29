$( document ).ready(function(){
 
    $( "button.alert" ).on( "click", function() {



        console.log( "A button with  alert class was clicked!" );
    });


//created an alert button
 
    $( "<button class='alert'>Alert!</button>" ).appendTo( document.body );
});


