function lowUpperCase(char) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) < 90) {// charcodeat proveriava izkarva ot text kum chislo
        // stringFromCharCode prevrushta kum simvol, vrushta simvola
        console.log('upper-case');
    } else{
        console.log('lower-case');
    }
}

lowUpperCase('s')