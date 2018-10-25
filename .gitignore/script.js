/*let pokemon;

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = () => {
  if (httpRequest.readyState == XMLHttpRequest.DONE){
      let response = JSON.parse(httpRequest.response);
      pokemon = response.results;
      console.log(pokemon);
  }
};

httpRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/');
httpRequest.send();*/

let deckID;
let hitID = 0;
let hitID2 = 0;

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
        let response = JSON.parse(httpRequest.response);
        if (response.success) {
            deckID = response.deck_id;
        }

        getTwoCards(deckID);
    }
};

httpRequest.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6');
httpRequest.send();

function getTwoCards(deckID) {
    let cardHttpRequest = new XMLHttpRequest();
    cardHttpRequest.onreadystatechange = () => {
        if (cardHttpRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(cardHttpRequest.response);
            if (response.success) {
                document.getElementById('card1').src = response.cards[0].image;
                document.getElementById('card2').src = response.cards[1].image;
                console.log(response);
            }
        }
    };

    cardHttpRequest.open('GET', 'https://deckofcardsapi.com/api/deck/'+ deckID +'/draw/?count=2');
    cardHttpRequest.send();
}

function drawOneCard(deckID) {
    hitID++;
    let hitHttpRequest = new XMLHttpRequest();
    hitHttpRequest.onreadystatechange = () => {
        if (hitHttpRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(hitHttpRequest.response);
            if (response.success) {
                if(hitID === 1) {
                    document.getElementById('card3').src = response.cards[0].image;
                    console.log(response);
                } else if(hitID === 2){
                    document.getElementById('card4').src = response.cards[0].image;
                    console.log(response);
                } else if (hitID === 3){
                    document.getElementById('card5').src = response.cards[0].image;
                    console.log(response);
                }
            }
        }
    };

    hitHttpRequest.open('GET', 'https://deckofcardsapi.com/api/deck/'+ deckID +'/draw/?count=1');
    hitHttpRequest.send();
}

function getTwoCards2(deckID) {
    let cardHttpRequest = new XMLHttpRequest();
    cardHttpRequest.onreadystatechange = () => {
        if (cardHttpRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(cardHttpRequest.response);
            if (response.success) {
                document.getElementById('p2card1').src = response.cards[0].image;
                document.getElementById('p2card2').src = response.cards[1].image;
                console.log(response);
            }
        }
    };

    cardHttpRequest.open('GET', 'https://deckofcardsapi.com/api/deck/'+ deckID +'/draw/?count=2');
    cardHttpRequest.send();
}

function drawOneCard2(deckID) {
    hitID2++;
    let hitHttpRequest = new XMLHttpRequest();
    hitHttpRequest.onreadystatechange = () => {
        if (hitHttpRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(hitHttpRequest.response);
            if (response.success) {
                if(hitID2 === 1) {
                    document.getElementById('p2card3').src = response.cards[0].image;
                    console.log(response);
                } else if(hitID2 === 2){
                    document.getElementById('p2card4').src = response.cards[0].image;
                    console.log(response);
                } else if (hitID2 === 3){
                    document.getElementById('p2card5').src = response.cards[0].image;
                    console.log(response);
                }
            }
        }
    };

    hitHttpRequest.open('GET', 'https://deckofcardsapi.com/api/deck/'+ deckID +'/draw/?count=1');
    hitHttpRequest.send();
}