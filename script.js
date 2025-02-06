function sayHello(firstName, hour){
    let message = "Bonjour";
    message = `Bonjour ${firstName} !`;
    if (hour >= 18 ) {
     message = `Bonsoir ${firstName} !`
     }
     document.querySelector('h1').innerText = message;
 
 }
 
 sayHello("Beyonce", 12);
 sayHello("Marine", 19);