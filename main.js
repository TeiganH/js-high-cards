const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const deck = []
let player1Card;
let player2Card;

  const buildDeck = function() {
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++){
          deck.push({value: values[i], suit: suits[j]})
        }
      }
    }
// console.log(deck)
    
    //fix this
  const dealCardsToPlayers = function() {
    let randNumber1 = (Math.floor(Math.random() * deck.length))
    let randNumber2 = (Math.floor(Math.random() * deck.length))
    player1Card = deck[randNumber1]
    player2Card = deck[randNumber2]
    deck.splice(randNumber1, 1)
    deck.splice(randNumber2, 1)
    }


const announceCards = function() {
    console.log(`Player 1 has a ${player1Card.value} of ${player1Card.suit}`)
    console.log(`Player 2 has a ${player2Card.value} of ${player2Card.suit}`)
    }

const cardToRank = function(card) {

  switch (card.value) {
    case 'Jack' : return 11;
    case 'Queen' : return 12;
    case 'King' : return 13;
    case 'Ace' : return 14;
    default : return card.value;
  }
}


const announceWinner = function() {
  if (cardToRank(player1Card) > cardToRank(player2Card)) {
    console.log("Player 1 wins!")
  } else if (cardToRank(player2Card) > cardToRank(player1Card)) {
    console.log("Player 2 wins!")
  } else {
    console.log("You tied!")
  }
}

const returnCardsToDeck = function() {
  deck.push(player1Card)
  deck.push(player2Card)
}

buildDeck()



const playRound = function(round) {
while(round > 0){
  dealCardsToPlayers()
  announceCards()
  announceWinner()
  returnCardsToDeck()
  round--
  } 
}
playRound(53)

