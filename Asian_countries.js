  // A) Get all the countries from Asia continent /region using Filter method

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET","https://restcountries.com/v3.1/all");
  req.send();

  function reqListener(){
    const asiancountry = JSON.parse(this.responseText);
    // console.table(asiancountry);

    const region = asiancountry.filter((data)=>data.region ==="Asia")
    // console.log(region);

    region.forEach(element => {
      console.table(element);
     
    });
  }

  
  
  
  