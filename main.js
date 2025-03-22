function loadCategories(){
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=> res.json())
    .then(data=>displayCategories(data.data))
}
function displayCategories(categories){
    const categoryContainer = document.getElementById('category-container');
    for(let cat of categories){
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML=`
        
            <button onclick="loadWords(); loadCategoryWords(${cat.level_no})" class="mr-2 btn btn-sm px-3 py-2 text-[#422AD5] border border-[#422AD5] rounded-sm hover:bg-[#422AD5] hover:text-white"> <i class="fa-solid fa-book-open"></i> Lesson -${cat.level_no}</button>
        
        `
        categoryContainer.append(categoryDiv);
    }
}
const loadCategoryWords = (level) =>{

    const url = `https://openapi.programming-hero.com/api/level/${level}`;

console.log(url);
fetch(url).then(res=> res.json()).then(data=> displayWords(data.data))
}





function displayWords(words){
    const categoryWords = document.getElementById('category-words');
    categoryWords.innerHTML = "";
    for(let word of words){
        const categoryAllWords = document.createElement('div');
        categoryAllWords.innerHTML=`
        
             <div class="bg-white w-full rounded-md shadow-md p-2">
            <h1 class="poppins-bold pt-6 pb-4 text-3xl">${word.word}</h1>
            <p class="poppins-regular pb-4 inter text-lg">Meaning /Pronounciation</p>
            <p class="hind-siliguri-regular pb-15 hind-siliguri-semibold text-3xl">"${word.meaning}/${word.pronunciation}"</p>
            <div class="flex justify-between px-6 pb-14">
                <div class="h-14 w-14 bg-[#1a90ff5d] flex justify-center items-center">
                    <i class="fa-solid fa-circle-info  text-[#374957]"></i>
                </div>
                <div class="h-14 w-14 bg-[#1a90ff5d] flex justify-center items-center">
                    <i class="fa-solid fa-volume-high text-[#374957]"></i>
                </div>
               
            </div>
        </div>
        
        `
        categoryAllWords.classList.add("w-full");

        categoryWords.appendChild(categoryAllWords);
    }
}




loadCategories()