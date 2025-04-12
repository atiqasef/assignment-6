const wordDetailsId = (wordId) =>{
console.log(wordId);
const url = `https://openapi.programming-hero.com/api/word/${wordId}`;
fetch(url)
.then( (res)=> res.json() )
.then((data) => displayWordDetails(data.data));
};

const displayWordDetails = (word) =>{
  console.log(word);
  document.getElementById('word_explain').showModal();
  const wordDetails= document.getElementById('word-details');
  wordDetails.innerHTML=`

        <h3 class="text-3xl text-start font-bold poppins-bold ">${word.word} (<i class="fa-solid fa-microphone-lines"></i> ${word.pronunciation})</h3>
              <h4 class="text-xl text-start font-bold mt-8 mb-2 poppins-bold ">Meaning</h4>
              <p class="text-xl text-start mb-8 hind-siliguri-semibold">${word.meaning || "অর্থ পাওয়া যায়নি"} </p>

              <h4 class="text-xl text-start font-bold mt-8 poppins-bold">Example</h4>
              <p class="text-xl text-start mt-2 poppins-regular">${word.sentence}</p>
              <p class="mt-10 text-xl text-start hind-siliguri-regular">সমার্থক শব্দ গুলো</p>
              <div class="flex gap-2 flex-wrap">
               ${(word.synonyms && word.synonyms.length > 0) ? word.synonyms.map(syn => `
               <p class="py-3 px-8 bg-[#D7E4EF] text-base poppins-regular rounded-md">${syn}</p>`)
              .join(''): `<p class=" text-base poppins-regular rounded-md"></p>`
                  }
              </div>





              <div class="flex gap-2">
                ${(word.synonyms || []).map(syn => `
                  <p class="py-3 px-8 bg-[#D7E4EF] text-base poppins-regular rounded-md">${syn}</p>
                `).join('')}
              </div>
              <div class="text-start ">
  <button onclick="document.getElementById('word_explain').close();" class="bg-[#422AD5]  px-8 py-2 mt-12 text-white rounded-lg hind-siliguri-regular">
    Close
  </button>
</div>

  
  `
}