function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => displayCategories(data.data))
}

const loadCategoryWords = (level) => {

    const url = `https://openapi.programming-hero.com/api/level/${level}`;



    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const clickButton = document.getElementById(`btn-${level}`);
            clickButton.classList.add("active");


            displayWords(data.data);
        })
}



document.getElementById("category-container").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn")) {
        document.querySelectorAll(".btn").forEach(btn => btn.classList.remove("active-btn"));
        event.target.classList.add("active-btn");
    }
});









function displayCategories(categories) {
    const categoryContainer = document.getElementById("category-container");
    for (let cat of categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        
            <button id="btn-${cat.level_no}" onclick="loadWords(); loadCategoryWords(${cat.level_no})" class="mr-2 btn btn-sm px-3 py-2 text-[#422AD5] border border-[#422AD5] rounded-sm hover:bg-[#422AD5] hover:text-white"> <i class="fa-solid fa-book-open"></i> Lesson -${cat.level_no}</button>
        
        `
        categoryContainer.append(categoryDiv);
    }
}


function loadWords() {
    fetch('https://openapi.programming-hero.com/api/level/5')
        .then(res => res.json())
        .then(data => displayWords(data.data))
}




function displayWords(words) {
    const categoryWords = document.getElementById('category-words');
    categoryWords.innerHTML = "";
    if (words.length == 0) {
        categoryWords.innerHTML = `
        

        <div id="category-words" class="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
                    <div class="flex flex-col items-center justify-center col-span-3 h-60">
                        <img src="./assets/alert-error.png" alt="">
                        <p class="hind-siliguri-regular mb-3 text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                        <h1 class="hind-siliguri-semibold text-4xl">নেক্সট Lesson এ যান</h1>
                    </div>
                </div>
        
        
        `;
        return
    }
    for (let word of words) {
        const categoryAllWords = document.createElement('div');
        categoryAllWords.innerHTML = `
        
             <div class="bg-white w-full rounded-md shadow-md p-2">
            <h1 class="poppins-bold pt-6 pb-4 text-3xl">${word.word}</h1>
            <p class="poppins-regular pb-4 inter text-lg">Meaning /Pronounciation</p>
            <p class="hind-siliguri-regular pb-15 hind-siliguri-semibold text-3xl">"${word.meaning || "অর্থ নেই"}/${word.pronunciation}"</p>
            <div  class="flex justify-between px-6 pb-14">
                <div  class="h-14 w-14 rounded-lg bg-[#1a90ff5d] flex justify-center items-center">
                   
             <button class="" onclick="wordDetailsId('${word.id}')"; "word_explain.showModal()"><i   class="fa-solid fa-circle-info  text-[#374957]"></i>
             
             </button>

                   <div>
            


        </div>



                </div>
                <div  class="h-14 w-14 rounded-lg bg-[#1a90ff5d] flex justify-center items-center">
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

// Smooth Scroll

document.getElementById("faq-btn").addEventListener("click", function () {
    document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("learn-btn").addEventListener("click", function () {
    document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
});


