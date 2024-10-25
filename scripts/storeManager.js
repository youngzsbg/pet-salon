//how to save to local storage

function save(service){
    let list = read();
    list.push(service)
    let val = JSON.stringify(list);
    localStorage.setItem("services",val);
}

function read(){
    let data = localStorage.getItem("services");
    if(!data){ //NOT data
        return[];// Returns empty array

    }else{
        return JSON.parse(data)
    }
}