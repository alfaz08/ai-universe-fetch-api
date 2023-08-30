const loadAi = async ()=>{
  toggleLoadingSpinner(true);
  //take the data with json format 
  const res =await fetch('https://openapi.programming-hero.com/api/ai/tools');
   const data = await res.json();
   //for find specific data that i need
   const ai = data.data.tools;
  displayAi(ai);
}

const displayAi = (ai) =>{
  
   console.log(ai);
  const aiContainer = document.getElementById('ai-container');
  //display only first 15
  ai = ai.slice(0,12)
  //jethue object vetore array ache oi jonno loop ghuriye data lagbe
  let count =0;
   for(const aiPost of ai)
   {
    let stop=0;
    // console.log(aiPost);
    if(count===1){
      handleShowDetail(ai);
    }
    else{
      count++;
      console.log(count);
      ai.forEach(aiPost => {
        
       
        const aiCard =document.createElement('div');
        aiCard.classList =`card bg-gray-100 shadow-xl`;
        aiCard.innerHTML =`
        <figure><img class="w-96 h-52" src="${aiPost.image}" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Features
              
            </h2>
           
            <p>${stop+1}.<span> ${aiPost.features[0]}</span></p>
            <p>${stop+2}.<span> ${aiPost.features[1]}</span></p>
            <p>${stop+3}.<span> ${aiPost.features[2]}</span></p>
            <hr>
            <div class="card-actions grid-col-1 justify-between">
              <div class="">
              <h1 class="text-3xl">${aiPost.name}</h1>
              <h3 class="">${aiPost.published_in}</h3>
              </div>
              <div class="">
              <i class="fa-solid fa-arrow-right"></i>
              </div>
             
            </div>
          </div>
          `;
          aiContainer.appendChild(aiCard)
      });

    }
    //hide loading spinner
   
    toggleLoadingSpinner(false)
   }
   

}

// 
const handleShowDetail = async (id) => {
  console.log('askdgasd');

}
const toggleLoadingSpinner  = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  //loadingSpinner.classList.remove('hidden')
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
}


loadAi();