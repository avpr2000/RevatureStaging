function getVowelSubstrings(paramStr) {
    let pos = [];
    let auxString = paramStr.toString().toLowerCase();

    for (let i = 0; i<auxString.length; i++){
        if (isVowel(auxString[i])) pos.push(i);
    }

    let arrayAnswer = findStrings(pos, auxString);
    let mySet = new Set(arrayAnswer)
    return mySet;
}

function getConsonantSubstrings(paramStr) {
    let pos = [];
    let auxString = paramStr.toString().toLowerCase();

    for (let i = 0; i<auxString.length; i++){
        if (!(isVowel(auxString[i]))) pos.push(i);
    }

    let arrayAnswer = findStrings(pos, auxString);
    let mySet = new Set(arrayAnswer)
    return mySet;
}

function isVowel(s){
    if (s == 'a' || s == 'e' || s == 'i' || s=='o' || s=='u') return true;
    else return false;
}

function findStrings(pos, auxString){
    let arrayAnswer = [];
    // pos has the positions required to create the Strings
    if (pos.length > 0){
        for (let i = 0; i<pos.length; i++){
            arrayAnswer.push(auxString.substr(pos[i],1));
            for (let j = i+1; j<pos.length; j++){
                let l = pos[j] - pos[i] + 1;
                arrayAnswer.push(auxString.substr(pos[i],l));
            }    
        }
        // Order the Array
        arrayAnswer = arrayAnswer.sort();
    }
    return arrayAnswer;
}