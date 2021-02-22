let myTeam = document.getElementById('my-team');

fighters = [{
        id: 0,
        name: 'Smart and ripped monkey',
        speciality: 'rip your face off',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            myTeam.innerHTML += `<li id="spook${this.id}"> ${this.name}</li>`
        }
    },
    {
        id: 1,
        name: 'Zombie snake',
        speciality: 'bite',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            myTeam.innerHTML += `<li id="spook${this.id}"> ${this.name}</li>`
        }
    },
    {
        id: 2,
        name: 'Sociopathic ghost',
        speciality: 'manipulate',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            myTeam.innerHTML += `<li id="spook${this.id}"> ${this.name}</li>`
        }
    },
    {
        id: 3,
        name: 'A fast Frankenstein',
        speciality: 'like regular Frankenstein, but fast',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            myTeam.innerHTML += `<li id="spook${this.id}"> ${this.name}</li>`
        }
    },
    {
        id: 4,
        name: 'Count Dracula',
        speciality: 'sleep, spook, drink blood, repeat',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            myTeam.innerHTML += `<li id="spook${this.id}"> ${this.name}</li>`
        }
    },
    {
        id: 5,
        name: 'Your crazy nazi aunt',
        speciality: 'make people uncomfortable',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            myTeam.innerHTML += `<li id="spook${this.id}"> ${this.name}</li>`
        }
    },
    {
        id: 6,
        name: 'A kid high on candy',
        speciality: 'give headaches',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            myTeam.innerHTML += `<li id="spook${this.id}"> ${this.name}</li>`
        }
    },
    {
        id: 7,
        name: 'That girl from Grudge',
        speciality: 'spook',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            myTeam.innerHTML += `<li id="spook${this.id}"> ${this.name}</li>`
        }
    },
]

let yourFighters = [];

//Part 1

//Call the fighters object-model
let spookList = document.getElementById('spook-list');
let listItem = document.getElementsByTagName('li');


let addEvent = function() {
    for (let i = 0; i < listItem.length; i++) {
        //Create an eventlistener to fighter buttons
        console.log(i);
        document.getElementById(`spook${i}`).addEventListener('click', () => {
            //Call the fighters object-model
            fighters[i].addFighter();
            let element = document.getElementById(`spook${i}`);
            element.remove();
        })
    }
};

addEvent();

//Part 2
//Write object methods

// Add selected fighter to the list 'yourFighters'
// Enter the name in a <li> in the HTML under 'Your Fighters'




//Some next level shit
// After clicking on a selection from the left list,
// then that object should disappear from that list and from the HTML