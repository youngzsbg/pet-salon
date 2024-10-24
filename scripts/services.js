let Services=[]//services array attempt

function displayTotals(){                                        //attempt
    document.getElementById("total").innerHTML=Services.length;   //attempt
}

function displayCards(){
    let card="";
    for (let i = 0; i < Services.length; i++) {
        let Service = Services[i];//getting current value
        
        card+=
        `
        <div class="Service">
            <p>Title: ${Service.title}</p>
            <p>Price: ${Service.price}</p>
            
        </div>
        `;
        console.log(card);
        
    }
    document.getElementById("services").innerHTML=card;// Insert the card into HTML
}


//create constructor

function Service(title,price){
    this.title=title;
    this.price=price;
}

function isValid(service){
    let isValidTitle=true;
    let isValidPrice=true;
    
    if(service.title==""){
        isValidTitle=false;
        $("#txtTitle").addClass("error");
        $(".titleValidationMsg").css("color","red").show();
    }else{
        $("#txtTitle").removeClass("error");
        $(".titleValidationMsg").hide();
        isValidTitle=true;
    }
    
    if(service.price==""){
        isValidPrice=false;
        $("#txtPrice").addClass("error");
        $(".priceValidationMsg").css("color","red").show();
    }else{
        $("#txtPrice").removeClass("error");
        $(".priceValidationMsg").hide();
        isValidPrice=true;
    }
    
    return isValidTitle && isValidPrice;
}

function register(){
    //getting title and price from inputs
    let inputTitle=$("#txtTitle").val();
    let inputPrice=$("#txtPrice").val();

    //console.log("Title: "+ inputTitle);
    //console.log("Price: "+ inputPrice);
    let newService= new Service(inputTitle,inputPrice);
    console.log("Is valid? ", isValid(newService));
    

    if(isValid(newService)){
        console.log(newService);
        Services.push(newService)// services array attempt just added
        displayTotals();//display on html
        displayCards();// display services in card form on html

        save(newService)
        $("#txtTitle").val("")
        $("#txtPrice").val("")
        
     }
}

function init(){
    $(".titleValidationMsg").hide();
    $(".priceValidationMsg").hide();
    //hook events
    $("#btnRegister").click(register);
    $("#txtPrice").on("keypress", function(event){
        if( event.which == 13 ){
            register();
        }
    })
    displayCards()
    displayTotals()
    
}
window.onload=init 