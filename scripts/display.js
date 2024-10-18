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
        `<tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.breed}</td>
                <td>${pet.type}</td>
        </tr>

        `
    }
    // .. 

    //..

    //..

 

    // instead of card use row

    //row +=`<tr></tr>`

    // read about HTML tables

    
    document.getElementById("petTable").innerHTML=row;
}

