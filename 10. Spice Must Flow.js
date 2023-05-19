function spice(startYield) {

    let daysCounter = 0;
    let yieldLeft = 0;
    let stock = 0;
    while (startYield >= 100) {
        daysCounter++;
        
        yieldLeft = startYield - 26;
        stock += yieldLeft
        startYield -= 10
        if (startYield < 100) {
            stock -= 26
        }
    }
    
    console.log(daysCounter);
    console.log(stock);
}

spice(111)