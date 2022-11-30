const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//An array of pokemon objects where the id is evenly divisible by 3

const pkmnByThree = pokémon.filter(p => p.id % 3 === 0);
console.log(pkmnByThree);

//An array of pokemon objects that are "fire" type

const pkmnFire = pokémon.filter(p => p.types.includes("fire"));
console.log(pkmnFire);

//An array of pokemon objects that have more than one type
const pkmnMoreType = pokémon.filter(p => p.types.length >= 2);
console.log(pkmnMoreType);

//An array with just the names of the pokemon
const pkmnNames = pokémon.map(p => p.name);
console.log(pkmnNames);

//An array with just the names of pakemon with an id greater than 99
const pkmnNamesID = pokémon.filter( p => p.id > 99).map(p => p.name);
console.log(pkmnNamesID);

//An array with just the names of the pokemon whose only type is poison
const pkmnPoisonOnly = pokémon.filter(p => p.types.length === 1 && p.types.includes("poison")).map(p => p.name);
console.log(pkmnPoisonOnly);

//An array containing just he first type of all the pokemon whose second type is "flying"
const pkmnFirstTypeByFlying = pokémon.filter(p => p.types.length >= 2 && p.types[1].includes("flying")).map(p=> p.types[0]);
console.log(pkmnFirstTypeByFlying)

//A count of the number of pokemon that are "normal" type
let count = 0;
const pkmnNormalCounter = pokémon.filter(p => p.types)
for (const i of pkmnNormalCounter) {
    if (i.types.includes("normal")) {
        count ++;
    }
}
console.log(`Number of Normal Types: ${count}`)