// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsEntryPoint = document.querySelector('.cards-container')

function get() {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then( response => {
            console.log(`Cards Success!`)
            console.log(response.data.articles) // Array of Javascript articles

            const jsCard = createArticle(response.data.articles.javascript)
            const bootstrapCard = createArticle(response.data.articles.bootstrap)
            const technologyCard = createArticle(response.data.articles.technology)
            const jQueryCard = createArticle(response.data.articles.jquery)
            const nodeCard = createArticle(response.data.articles.node)

            console.log(bootstrapCard)

            for (let i = 0; i < jsCard.length; i++) {
                cardsEntryPoint.appendChild(jsCard[i])
            }
            for (let i = 0; i < bootstrapCard.length; i++) {
                cardsEntryPoint.appendChild(bootstrapCard[i])
            }
            for (let i = 0; i < technologyCard.length; i++) {
                cardsEntryPoint.appendChild(technologyCard[i])
            }
            for (let i = 0; i < jQueryCard.length; i++) {
                cardsEntryPoint.appendChild(jQueryCard[i])
            }
            for (let i = 0; i < nodeCard.length; i++) {
                cardsEntryPoint.appendChild(nodeCard[i])
            }
            
            // cardsEntryPoint.appendChild(bootstrapCard)
            // cardsEntryPoint.appendChild(technologyCard)
            // cardsEntryPoint.appendChild(jQueryCard)
            // cardsEntryPoint.appendChild(nodeCard)

        })
        .catch( err => {
            console.log(err)
        })
}

function createArticle(articleInfo) { // articleInfo = response.data.articles.{article_section} - ARRAY with 4 articles
    const cards = []
    articleInfo.forEach( article => {
        cards.push(createCard(article))
    })
    return cards // Array of article cards for a particular subject
}

function createCard(cardInfo) { // cardInfo = each element of articleInfo array

    // instantiate elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const authorName = document.createElement('span')

    // structure elements
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(authorImage)
    author.appendChild(authorName)
    
    // add class names to elements
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    // set src using argument
    authorImage.src = cardInfo.authorPhoto

    // add text content to elements
    headline.textContent = cardInfo.headline
    authorName.textContent = `By ${cardInfo.authorName}`

    return card
}

get()
