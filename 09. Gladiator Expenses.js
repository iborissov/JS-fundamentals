function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    shieldCounter = 0;
    for (let i = 1; i <= lostFights; i++) {
         if (i % 2 == 0) {
            sum += helmetPrice
         }
         if (i % 3 == 0) {
            sum += swordPrice
         }
         if (i % 2 == 0 && i % 3 == 0) {
            sum += shieldPrice;
            shieldCounter++;
            if (shieldCounter % 2 == 0) {
                sum += armorPrice
             }
         }
          
        
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);


}

gladiator(7,

    2,
    
    3,
    
    4,
    
    5)