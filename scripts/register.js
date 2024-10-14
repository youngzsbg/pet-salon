console.log("register.js")
let pets = [];//empty array
//create pets
let pet1 = {
    name:"Scooby",
    age:99,
    gender:"Male",
    breed:"Doverman",
    service:"Shampoo"
}
let pet2 = {
    name:"Carl",
    age:12,
    gender:"Male",
    breed:"Pitbull",
    service:"Grooming"
}
let pet3 = {
    name:"Vanessa",
    age:53,
    gender:"Female",
    breed:"Poodle",
    service:"Pedicure"
}

pets.push(pet1,pet2,pet3);//Adding into the array

function displayNames(){
    //display pet  names
    for (let i = 0; i<pets.length; i++) {
        document.getElementById("petNames").innerHTML+=`<p> Name: ${pets[i].name}</p>`;  
    }
    console.log(pets.length);
}