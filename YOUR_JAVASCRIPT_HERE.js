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
    } else {
        hero.health = 10
    }
    return person
}

function resetTheHealthProperty() {
    hero.health = 10
}

// adding the weapon obj as a last element in the inventory array {`type`: `dagger`, `damage`: 2}
function clickOnDagger(params) {
        hero.inventory.push(hero.weapon)
        hero.inventory[0].type = 'dagger'
        hero.inventory[0].damage = 2    
}

function pickUpItem(person, weapon) {
    hero.inventory.push(hero.weapon)

}

function clickOnBag(person) {
    hero.inventory[0].type = 'dagger'
    hero.inventory[0].damage = 2

}

function equipWeapon(person) {
    hero.inventory[0] = hero.inventory.push(hero.weapon)
}

function checkLeaks(params) {
    rest(hero).health = 10
}

// getting the thml elements...
var headingElement = document.getElementById("userName");
var healthStat = document.getElementById("health")
var inventoryStat = document.getElementById("inventory")
console.log(headingElement.innerHTML);
var newHeadingText = prompt("What is your name?");

// some checking...
if (newHeadingText[0] !== newHeadingText[0].toUpperCase()) {
    var nameCapitalized = newHeadingText.charAt(0).toUpperCase() + newHeadingText.slice(1)   
} else {
    var nameCapitalized = newHeadingText
}
headingElement.innerHTML = "User: " + nameCapitalized;
healthStat.innerHTML = "current health: " + hero.health;
inventoryStat.innerHTML = "current inventory: " + hero.inventory[0];

