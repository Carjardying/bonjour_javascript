function sayHello(firstName, hour){``
    let message = "Bonjour";
    message = `Bonjour ${firstName} !`;
    if (hour >= 18 ) {
     message = `Bonsoir ${firstName} !`
     }
     console.log(message);
 
 }
 
 sayHello("Beyonce", 18);
 sayHello("Marine", 12);