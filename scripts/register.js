console.log("register.js")
let pets = [];//empty array

let inputName= document.getElementById("txtName");
    let inputAge= document.getElementById("txtAge");
    let inputGender= document.getElementById("txtGender");
    let inputService= document.getElementById("txtService");
    let inputBreed= document.getElementById("txtBreed");
    let inputType= document.getElementById("txtType")
    let inputDislikes= document.getElementById("txtDislikes");
       


function pet(name,age,gender,service,breed,type,dislikes){
    //properties = parameter aka value
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
    this.type=type;
    this.dislikes=dislikes;

}

function isValid(pet){
    let validation= true;
    if(pet.name==""){
        validation = false;
        inputName.classList.add("error")
    }
    if (pet.service==""){
        validation= false;
        inputService.classList.add("error")
    }
    return validation
}

function register(){
    
    //create new obj
    let newPet =new pet(inputName.value,inputAge.value,inputGender.value,inputService.value,inputBreed.value,inputType.value,inputDislikes.value);
    console.log(newPet);
    if(isValid(newPet)==true){
    pets.push(newPet);
    displayTotals();
    //displayCards();
    displayTable()
    }
}
//create deletePet function and display on console "Deleting Pet...
function deletePet(petId){
    console.log("Deleting pet ... "+ petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayTable();
    displayTotals();

}

function init(){
    console.log("init");
    let pet1= new pet("Scooby",99,"male","grooming")
    let pet2= new pet("Scrappy",44,"Male","vaccines")
    let pet3= new pet("Tweety",12,"Female","nails")
    //push the pets to put them in the array
    pets.push(pet1,pet2,pet3);
    //display the 3 pets on the console
    console.log(pets);
    displayTotals();
    //displayCards();
    displayTable()



}
window.onload=init;// waits on html then renders
