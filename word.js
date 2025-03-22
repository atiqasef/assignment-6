function loadWords(){
    fetch('https://openapi.programming-hero.com/api/level/5')
    .then(res=> res.json())
    .then(data=> displayWords(data.data))
}

