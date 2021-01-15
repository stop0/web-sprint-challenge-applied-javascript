// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

let topicL = document.querySelector(".topics")

function topics (Obj){
    const tab = document.createElement("div");
    tab.classList.add("tab")
    tab.textContent = Obj;
    return tab
}




// URL1.map(element => {
//    console.log(element) 
// });

axios.get("https://lambda-times-api.herokuapp.com/topics")
    .then( response => {
        response.data.topics.forEach(element => {
            // console.log(element)
        topicL.append(topics(element))
        });
    // /  topicL.append(topics(response.data.topics))
    })
    .catch( err => {
      console.log(err)
    })


