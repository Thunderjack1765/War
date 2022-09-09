

const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
    `A`, 
    `2`, 
    `3`, 
    `4`, 
    `5`, 
    `6`, 
    `7`, 
    `8`, 
    `9`, 
    `10`, 
    `J`, 
    `Q`, 
    `K`
]
const cardValueMap = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}







class Deck {
    constructor (cards = freshDeck()) {
        this.cards = cards
        
    }

    get numberOfCards() {
        return this.cards.length
    }
    
     

    shuffle() {
        for(let i = this.numberOfCards-1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const oldValue = this.cards[newIndex];
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldValue;
    }
    }

}


class Card {
    constructor (suit, value,) {
        this.suit = suit;
        this.value = value;
        

} } 





class Player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
       this.totalPoints = 0;
        
    }
    

}


const deck = new Deck();
deck.shuffle()


const deckMidpoint = Math.ceil(deck.numberOfCards / 2)

const player1 = new Player('Player 1', []);
player1.deck = deck.cards.slice(0, deckMidpoint);
console.log('Player 1: ' + player1.deck);

const player2 = new Player('Player 2', []);
player2.deck = deck.cards.slice(deckMidpoint, deck.numberOfCards);
console.log('Player 2: ' + player2.deck);







// startGame()
// function startGame() {
//     const deck = new Deck()
//     deck.shuffle()

//     const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
//     player1deck = deck.cards.slice(0, deckMidpoint)
//     player2deck = deck.cards.slice(deckMidpoint, deck.numberOfCards)
 
// }



player1Card = 0;
player2Card = 0;
player1.score = 0;
player2.score = 0;

for(let i = 0; i < player1.deck.length; i++){
 player1Card = player1.deck[i];
 console.log('1: ' + player1Card);

 player2Card = player2.deck[i];
 console.log('2: ' + player2Card);





 if(cardValueMap[player1Card] > cardValueMap[player2Card]){
player1.score++;
 } else if (cardValueMap[player1Card] < cardValueMap[player2Card]){
player2.score++;
 } else {}
 console.log('Player 1 Points: ' + player1.score);
console.log('Player 2 Points: ' + player2.score);
}

console.log('Total for Player One: ' + player1.score);
console.log('Total for Player Two: ' + player2.score);





if (player1.score > player2.score) {
    alert (
    "Player 1 WINS! "
    );} else if (player2.score > player1.score) {
        alert (
        `Player 2 WINS! `
        );}



function freshDeck() {
    return SUITS.flatMap( suit => {
        return VALUES.map(value => {
                return new Card(suit, value);
            
            
        })
    })
}












// console.log(player1.deck, player2.deck)





