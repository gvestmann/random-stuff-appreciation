let startUpStuff = [
    {
    id: 1,
    title: "Albatross",
    text: "Badass motherfucker riding the storm",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/albatross.jpg",
    category: "nature",
    love: false,
    },
    {
    id: 2,
    title: "Stoned dogs",
    text: "So human, I categorized them as people",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/dogs.jpg",
    category: "people",
    love: false,
    },
    {
    id: 3,
    title: "Dolores",
    text: "Do you ever question the nature of your reality?",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/dolores.jpg",
    category: "people",
    love: false,
    },
    {
    id: 4,
    title: "Uncle Bobby",
    text: "Hey there, mister nobel price winning tambourine man",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/dylan.jpg",
    category: "people",
    love: false,
    },
    {
    id: 5,
    title: "Ford Bronco 1980",
    text: "They just don't make'em the same these days",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/bronco.jpg",
    category: "things",
    love: false,
    },
    {
    id: 6,
    title: "Calvin",
    text: "... being miserable builds character",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/calvin.jpg",
    category: "things",
    love: false,
    },
    {
    id: 7,
    title: "Dyrfjöll",
    text: "No words needed",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/dyrfjoll.jpg",
    category: "nature",
    love: false,
    },
    {
    id: 8,
    title: "Eames Lounge Chair",
    text: "A seat worth 800.000 isk",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/eames.jpg",
    category: "things",
    love: false,
    },
    {
    id: 9,
    title: "Stuff of nightmare",
    text: "Still hangs on my wall",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/elias.jpg",
    category: "things",
    love: false,
    },
    {
    id: 10,
    title: "Another badass",
    text: "Doesn't start shaking until it's -60°c",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/fox.jpg",
    category: "nature",
    love: false,
    },
    {
    id: 11,
    title: "My happy place",
    text: "No jokes about Icelandic forests, please",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/hallormsstadaskogur.jpg",
    category: "nature",
    love: false,
    },
    {
    id: 12,
    title: "Heather",
    text: "She makes me feel things",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/heather.jpeg",
    category: "people",
    love: false,
    },
    {
    id: 13,
    title: "os1, featuring Samantha",
    text: "If you haven't seen 'Her', please do",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/her.png",
    category: "things",
    love: false,
    },
    {
    id: 14,
    title: "Héraðssandur",
    text: "Another happy place, but pretty cool",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/heradssandur.jpg",
    category: "nature",
    love: false,
    },
        {
    id: 15,
    title: "Dr. Hunter",
    text: "Too weird to live, too rare to die",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/hunter.jpg",
    category: "people",
    love: false,
    },
    {
    id: 16,
    title: "Bllöuurgh",
    text: "Happy friends in a happy place",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/immortal.jpg",
    category: "people",
    love: false,
    },
    {
    id: 17,
    title: "Jesus in Heaven",
    text: "Beware of skull monkeys",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/jesus.jpg",
    category: "things",
    love: false,
    },
    {
    id: 18,
    title: "Millenium Falcon",
    text: "I don't care if I'm a grownup",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/lego.png",
    category: "things",
    love: false,
    },
    {
    id: 19,
    title: "Merlin",
    text: "Just something magical about it",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/merlin.jpg",
    category: "nature",
    love: false,
    },
    {
    id: 20,
    title: "Around midnight",
    text: "My kind of party",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/party.jpg",
    category: "people",
    love: false,
    },
    {
    id: 21,
    title: "70's racer",
    text: "When people travelled with style",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/racer.jpg",
    category: "things",
    love: false,
    },
    {
    id: 22,
    title: "This guy",
    text: "When I grow old",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/ragnar.jpg",
    category: "people",
    love: false,
    },
    {
    id: 23,
    title: "Fucking tigers",
    text: "Yeah, sure, I'd fight you guys",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/tigers.jpg",
    category: "nature",
    love: false,
    },
    {
    id: 24,
    title: "Howl",
    text: "Like Allen Ginsberg",
    image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/wolf.jpg",
    category: "nature",
    love: false,
    }, 
]

function love(obj) {
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    var obj = obj.id
    for(let i = 0; i < localStuff.length; i++) {
    if(localStuff[i].id == obj) {
        var newStuff = {
            id: localStuff[i].id,
            title: localStuff[i].title,
            text: localStuff[i].text,
            image: localStuff[i].image,
            category: localStuff[i].category,
            love: true,
            };
        localStuff.splice(i, 1);
        localStuff.push(newStuff);
        localStorage.setItem('localStuff', JSON.stringify(localStuff));
        };
    }
    document.getElementById(`${obj}`).className = "love-this";
    document.getElementById(`${obj}`).setAttribute("onClick", "hate(this);")
    document.getElementById(`icon-${obj}`).className = "fa fa-heart heart-icon-right";
}

function build(obj) {
    sortStuff();
    const cardsContainer = document.getElementById('cards-container');
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    clearDom();
    history.pushState(null, obj.id, obj.id)
    var obj = obj.id
    for(let i = 0; i < localStuff.length; i++) {
        if(localStuff[i].category === obj) {
            var card = document.createElement('div')
            card.setAttribute("class", "card animated fadeInUp delay-1s")
            // Create image container
            var imgContainer = document.createElement('div');
            imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
            // Create image
            var img = document.createElement('img')
            img.setAttribute("class", "card-img-top embed-responsive-item")
            img.setAttribute("src", localStuff[i].image)
            // Create card body
            var cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");
            // Create title
            var title = document.createElement('h4');
            title.setAttribute("class", "card-title");
            title.innerHTML = localStuff[i].title;
            // Create icon + button
            var button = document.createElement('button');
            button.setAttribute("id", localStuff[i].id);
    
            if(localStuff[i].love === true) {
            button.setAttribute("onClick", "hate(this)")
            button.setAttribute("class", "love-this")
            button.innerHTML = `<i id="icon-${localStuff[i].id}" class="fa fa-heart heart-icon-right"></i>`            
            } else if(localStuff[i].love === false) {
            button.setAttribute("onClick", "love(this)")
            button.innerHTML = `<i id="icon-${localStuff[i].id}" class="far fa-heart heart-icon-right"></i>`
            }
    
            // Create card's text
            var cardText = document.createElement('p')
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = localStuff[i].text;
            
            // ... and put it all together!
            imgContainer.appendChild(img)
            card.appendChild(imgContainer)
            card.appendChild(cardBody)
            cardBody.appendChild(title);;
            cardBody.appendChild(button);
            cardBody.appendChild(cardText);
            cardsContainer.appendChild(card);
        }
    }
}

function hate(obj) {
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    var obj = obj.id
    for(let i = 0; i < localStuff.length; i++) {
    if(localStuff[i].id == obj) {
        var newStuff = {
            id: localStuff[i].id,
            title: localStuff[i].title,
            text: localStuff[i].text,
            image: localStuff[i].image,
            category: localStuff[i].category,
            love: false,
            };
        localStuff.splice(i, 1);
        localStuff.push(newStuff);
        localStorage.setItem('localStuff', JSON.stringify(localStuff));
        };
    }
    document.getElementById(`${obj}`).className = "";
    document.getElementById(`${obj}`).setAttribute("onClick", "love(this);")
    document.getElementById(`icon-${obj}`).className = "far fa-heart heart-icon-right";   
}



function firstBuild() {
    if(Object.keys(localStorage).length === 0) {
        localStorage.setItem("localStuff", JSON.stringify(startUpStuff))
        let localStuff = JSON.parse(localStorage.getItem('localStuff'));
        const cardsContainer = document.getElementById('cards-container');
        for(let i = 0; i < localStuff.length; i++) {
            // Create the cards
            var card = document.createElement('div')
            card.setAttribute("class", "card animated fadeInUp delay-1s")
            // Create image container
            var imgContainer = document.createElement('div');
            imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
            // Create image
            var img = document.createElement('img')
            img.setAttribute("class", "card-img-top embed-responsive-item")
            img.setAttribute("src", localStuff[i].image)
            // Create card body
            var cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");
            // Create title
            var title = document.createElement('h4');
            title.setAttribute("class", "card-title");
            title.innerHTML = localStuff[i].title;
            // Create icon + button
            var button = document.createElement('button');
            button.setAttribute("id", localStuff[i].id);
            button.setAttribute("onClick", "love(this);")
            button.innerHTML = `<i id="icon-${localStuff[i].id}" class="far fa-heart heart-icon-right"></i>`
            // Create card's text
            var cardText = document.createElement('p')
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = localStuff[i].text;
            
            // ... and put it all together!
            imgContainer.appendChild(img)
            card.appendChild(imgContainer)
            card.appendChild(cardBody)
            cardBody.appendChild(title);;
            cardBody.appendChild(button);
            cardBody.appendChild(cardText);
            cardsContainer.appendChild(card);
        }

    }
}

let localStuff = JSON.parse(localStorage.getItem('localStuff'));


function rebuildAll() {
    history.pushState(null, "", "/random-stuff-appreciation");
    sortStuff();
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    clearDom();
    const cardsContainer = document.getElementById('cards-container');
    for(let i = 0; i < localStuff.length; i++) {
        // Create the cards
        var card = document.createElement('div')
        card.setAttribute("class", "card animated fadeInUp delay-1s")
        // Create image container
        var imgContainer = document.createElement('div');
        imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
        // Create image
        var img = document.createElement('img')
        img.setAttribute("class", "card-img-top embed-responsive-item")
        img.setAttribute("src", localStuff[i].image)
        // Create card body
        var cardBody = document.createElement('div');
        cardBody.setAttribute("class", "card-body");
        // Create title
        var title = document.createElement('h4');
        title.setAttribute("class", "card-title");
        title.innerHTML = localStuff[i].title;
        // Create icon + button
        var button = document.createElement('button');
        button.setAttribute("id", localStuff[i].id);

        if(localStuff[i].love === true) {
        button.setAttribute("onClick", "hate(this)")
        button.setAttribute("class", "love-this")
        button.innerHTML = `<i id="icon-${localStuff[i].id}" class="fa fa-heart heart-icon-right"></i>`            
        } else if(localStuff[i].love === false) {
        button.setAttribute("onClick", "love(this)")
        button.innerHTML = `<i id="icon-${localStuff[i].id}" class="far fa-heart heart-icon-right"></i>`
        }

        // Create card's text
        var cardText = document.createElement('p')
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = localStuff[i].text;
        
        // ... and put it all together!
        imgContainer.appendChild(img)
        card.appendChild(imgContainer)
        card.appendChild(cardBody)
        cardBody.appendChild(title);;
        cardBody.appendChild(button);
        cardBody.appendChild(cardText);
        cardsContainer.appendChild(card);
    } 
}

function clearDom() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
}

function sortStuff() {
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    var ascending = localStuff.sort((a, b) => Number(a.id) - Number(b.id));
    localStorage.setItem('localStuff', JSON.stringify(ascending));
} 

firstBuild();
sortStuff();
rebuildAll();

function loveList() {
    history.pushState(null, "Love", "love")
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    const cardsContainer = document.getElementById('cards-container');
    clearDom();
    for(let i = 0; i < localStuff.length; i++) {
        if(localStuff[i].love === true) {
        // Create the cards
        var card = document.createElement('div')
        card.setAttribute("class", "card animated fadeInUp delay-1s")
        // Create image container
        var imgContainer = document.createElement('div');
        imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
        // Create image
        var img = document.createElement('img')
        img.setAttribute("class", "card-img-top embed-responsive-item")
        img.setAttribute("src", localStuff[i].image)
        // Create card body
        var cardBody = document.createElement('div');
        cardBody.setAttribute("class", "card-body");
        // Create title
        var title = document.createElement('h4');
        title.setAttribute("class", "card-title");
        title.innerHTML = localStuff[i].title;
        // Create icon + button
        var button = document.createElement('button');
        button.setAttribute("id", localStuff[i].id);

        if(localStuff[i].love === true) {
        button.setAttribute("onClick", "hate(this)")
        button.setAttribute("class", "love-this")
        button.innerHTML = `<i id="icon-${localStuff[i].id}" class="fa fa-heart heart-icon-right"></i>`            
        } else if(localStuff[i].love === false) {
        button.setAttribute("onClick", "love(this)")
        button.innerHTML = `<i id="icon-${localStuff[i].id}" class="far fa-heart heart-icon-right"></i>`
        }

        // Create card's text
        var cardText = document.createElement('p')
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = localStuff[i].text;
        
        // ... and put it all together!
        imgContainer.appendChild(img)
        card.appendChild(imgContainer)
        card.appendChild(cardBody)
        cardBody.appendChild(title);;
        cardBody.appendChild(button);
        cardBody.appendChild(cardText);
        cardsContainer.appendChild(card);
    } 
    }
};