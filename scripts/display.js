function displayCards(){
    let card="";
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];//getting current value
        
        card+=
        `
        <div class="pet ${pet.service}">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Type: ${pet.type}</p>
            <p>Dislikes: ${pet.dislikes}</p>
        </div>
        `;
        console.log(card);
        
    }
    document.getElementById("pets").innerHTML=card;// Insert the card into HTML
}



function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;

}
function displayTable(){
let row="";
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        row+= 
        `   <tr id="${i}">
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.gender}</td>
                    <td>${pet.service}</td>
                    <td>${pet.breed}</td>
                    <td>${pet.type}</td>
                    <td>${pet.dislikes}</td>
                    <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete </button></td>
            </tr>
        `
    }
       
    document.getElementById("petTable").innerHTML=row;
}

//create deletePet function and display on console "Deleting Pet..."