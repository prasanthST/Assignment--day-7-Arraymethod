// D)Print the total population of countries using reduce method

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET","https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const countries =JSON.parse(this.responseText)
    const currency = []
    for(i=0;i<countries.length;i++){
        if(countries[i].currencies[0].code==="USD")
        {
         console.log("name:",countries[i].name,"==>",countries[i].currencies[0].code)
        }
    }
    
}
