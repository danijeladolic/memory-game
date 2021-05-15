document.addEventListener('DOMContentLoaded', ()=>{
    console.log('alert')
    //card opctions
    const cardArray= [
        {
            name:'flowers',
            img:'/src/images/download.jpg',
        },
        {
            name:'hamburger',
            img:'/src/images/hamb.jpg',
        },
        {
            name:'bike',
            img:'/src/images/bike.png',
        },
        {
            name:'car',
            img:'/src/images/car.png',
        },
        {
            name:'cat',
            img:'/src/images/cat.jpg',
        },
        {
            name:'tost',
            img:'/src/images/tost.jpg',
        },
        {
            name:'flowers',
            img:'/src/images/download.jpg',
        },
        {
            name:'hamburger',
            img:'/src/images/hamb.jpg',
        },
        {
            name:'bike',
            img:'/src/images/bike.png',
        },
        {
            name:'car',
            img:'/src/images/car.png',
        },
        {
            name:'cat',
            img:'/src/images/cat.jpg',
        },
        {
            name:'tost',
            img:'/src/images/tost.jpg',
        }
    
    ]

    console.log(cardArray);
    cardArray.sort(()=> 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay= document.querySelector('#result');

    let cardsChosen =[];
    let cardsWon =[];
    let cardsChosenIds=[];

    function createBoard(){
        for(let i=0; i< cardArray.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', '/src/images/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
           
        }

    }


  

    function flipCard(){

        let cardId=this.getAttribute('data-id');
        
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);

        this.setAttribute('src',cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
        

    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];

        if(optionOneId===optionTwoId)
        
        {
        alert('You have clicked the same image!');
        cards[optionOneId].setAttribute('src','src/images/blank.jpg');
        cards[optionTwoId].setAttribute('src','src/images/blank.jpg');
        
        
        }
        else if(cardsChosen[0] === cardsChosen[1]){
            alert('You have found a match!');
            cards[optionOneId].setAttribute('src','src/images/white.png');
            cards[optionTwoId].setAttribute('src','src/images/white.png');
            cards[optionOneId].removeEventListener('click',flipCard);
            cards[optionTwoId].removeEventListener('click',flipCard);
            cardsWon.push(cardsChosen);

        }
        

        else {
            cards[optionOneId].setAttribute('src','src/images/blank.jpg');
            cards[optionTwoId].setAttribute('src','src/images/blank.jpg');
           // alert('Try again!');
            
        }
        cardsChosen =[];
        cardsChosenIds =[];
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congrats! You have won!'
        }
    }
    

    createBoard();
})