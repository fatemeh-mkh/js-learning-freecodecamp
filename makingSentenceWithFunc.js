

function makingSentence(Noun , verb , adj , adverb){

    var res = "";
    res += Noun + verb + adj + " skills in computer engineering " + adverb;
    return res; 
}

console.log(makingSentence("Fatemeh" , " is learning " , "hard" , "quickly"));
console.log(makingSentence("Ali" , " is learning " , "soft" , "slowly"));