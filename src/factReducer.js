const initialFactState = {
  facts: [{id: 1, description: "otters have a special pouch on their body where they keep their favorite rock.", category: "science", source: "https://en.wikipedia.org/wiki/Sea_otter#Foraging", disputes:[], verified: true}, {id: 2, description: "the most expensive book ever bought was the Codex Leicester, one of Leonardo da Vinci's notebooks, purchased by Bill Gates for over $30 million.", category: "literature", source: "http://englishbookgeorgia.com/blogebg/ten-amazing-literary-facts-you-should-know/", disputes:[], verified: true}, {id: 3, description: "George Washington did not have wooden teeth. He had several sets of dentures made of ivory, silver alloy, and human teeth.", category: "history", source: "https://www.mountvernon.org/george-washington/the-man-the-myth/the-trouble-with-teeth/", disputes:[], verified: true}, {id: 4, description:"Steven Spielberg was originally supposed to direct the Harry Potter movies", category: "culture", source:"http://mentalfloss.com/article/66781/35-things-you-might-not-know-about-harry-potter", disputes: [], verified: true} ]
}

export default function factReducer(state= initialFactState, action) {
  switch(action.type){
    case 'ADD_FACT':
    return {...state, facts:[...state.facts, action.payload]}
    default:
    return state
  }
}
