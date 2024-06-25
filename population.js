//  D)Print the total population of countries using reduce method

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET","https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const countries =JSON.parse(this.responseText)
    // console.log(countries[0].population);
    
    let totalPopulation = countries.reduce(function(sum , population){

        return sum + population.population
        
    }, 0 );
    console.log(totalPopulation);
  
}