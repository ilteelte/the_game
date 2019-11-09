// Write your JS here

const hero = {
    name:"",
    heroic: false,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
}


function rest(person) {
    if (hero.health === 10) {
        alert('the health property already has the value 10')      //' + ${person} + ' 
    }
    return person
}

rest(hero).health = 10

function pickUpItem(person, weapon) {
    
}

function equipWeapon(person) {
    
}

function checkLeaks(params) {
    rest(hero).health = 10
}