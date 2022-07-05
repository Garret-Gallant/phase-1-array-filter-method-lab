const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(foo){
    console.log(foo(drivers))
}

const matchDrivers = (array) => {for (item of array){if(item === String){return(item)}}}

findMatching(matchDrivers);

// let games = [
//     {
//         title: `Dishonored`,
//         genre: `Stealth`,
//         rating: `10/10`
//     },
//     {
//         title: `Rocket League`,
//         genre: `Sports`,
//         rating: `8/10` 
//     },
//     {
//         title: `Smite`,
//         genre: `MOBA`,
//         rating: `6/10` 
//     },
//     {
//         title: `Stardew Valley`,
//         genre: `Farming`,
//         rating: `10/10` 
//     },
//     {
//         title: `Apex Legends`,
//         genre: `FPS`,
//         rating: `9/10` 
//     }
// ]

// function gameReview(foo){
//     console.log(foo(games))
// }

// function returnTitles(array){
//     let total = 0
//     for (let item of array){
//         total+= item.title
//         console.log(item.title)
//     }
// }

// const matchStardew = (array) => {for (item of array){if(item.genre === `Farming`){console.log(item)}}}

// gameReview(returnTitles)

// gameReview(matchStardew)

