// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const entryPoint = document.querySelector('div.topics')

function get() {
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then( response => {
            console.log('Success!')
            const topics = response.data.topics
            console.log(topics)

            topics.forEach( topic => {
                const tab = document.createElement('div')
                tab.classList.add('tab')
                tab.textContent = topic
                entryPoint.appendChild(tab)
            })
        })
        .catch( err => {
            console.log(`There was an error: ${err}`)
        })
}

get()
