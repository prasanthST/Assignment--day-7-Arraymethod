// C)Print the following details name, capital, flag, using forEach method

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET","https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
    const data =JSON.parse(this.responseText)
    // console.log(data[0]);
    
  

    data.forEach(element => {
        console.log(element.name.common); 
        console.log(element.capital);
        console.log(element.flags.png);

    });
}