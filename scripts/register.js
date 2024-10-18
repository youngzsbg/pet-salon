console.log("register.js")
let pets = [];//empty array


function pet(name,age,gender,service,breed,type){
    //properties = parameter aka value
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
    this.type=type;

}

function register(){
    let inputName= document.getElementById("txtName").value;
    let inputAge= document.getElementById("txtAge").value;
    let inputGender= document.getElementById("txtGender").value;
    let inputService= document.getElementById("txtService").value;
    let inputBreed= document.getElementById("txtBreed").value;
    let inputType= document.getElementById("txtType").value

    console.log(inputName,inputAge,inputGender,inputService,inputBreed,inputType);
    //create new obj
    let newPet =new pet(inputName,inputAge,inputGender,inputService,inputBreed,inputType);
    console.log(newPet);
    pets.push(newPet);
    displayTotals();
    //displayCards();
    displayTable()
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