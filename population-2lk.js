// B) Get all the countries with a population of less than 2 lakhs using Filter method


const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET","https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const popullation =JSON.parse(this.responseText)
    // console.log(popullation);

    const lessthen = popullation.filter((data)=>data.population < 200000)
    // console.log(lessthen)

    lessthen.forEach(element => {
        console.log(element);  
    });
    
 }