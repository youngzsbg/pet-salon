//object literal
//let student1 ={
    //name:"John Smith",
  //  age: 99,
    //isAdmin:false,
  //  grade1:3.7
//}
//console.log(student1);
//Add . then property to display specific element 
//console.log(student1.name)




//Class Challenge using JQuery in practice html

let op1 =["apple","banana","orange"];
let op2 = ["carrot","broccoli","spinach"];

$("#category").on("change",function(){
    let selection = $("#category").val();
    console.log(selection); 
    let items = $("#items");

    items.empty();

    let htmlOp="";
    
    if(selection=="fruits"){
        for(let i=0;i<op1.length;i++){
            htmlOp += `<option value="${op1[i]}">${op1[i]}</option>`
        }
        items.append(htmlOp);
    }
    if(selection=="vegetables"){
        for(let i=0;i<op2.length;i++){
            htmlOp += `<option value="${op2[i]}">${op2[i]}</option>`
        }
        items.append(htmlOp);
    }
});