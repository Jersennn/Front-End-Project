//create global variables for all main classes
const main = document.querySelector(".main");
const body = document.querySelector("body")
const $results = document.querySelector(".results");
const submit = document.querySelector(".submit");
const input = document.querySelector("input[name = search]");
const results = document.createElement("div");

//create a function that will create the template for each search
function makeResults(city, currTemp, highTemp, lowestTemp, description) {
    
    results.setAttribute("class", "results");
    
    const cityName = document.createElement("h1");
    cityName.setAttribute("class", "cityName");

    const cityTemp = document.createElement("h2");
    cityTemp.setAttribute("class", "cityTemp");

    const maxTemp = document.createElement("p1");
    maxTemp.setAttribute("class", "maxTemp");

    const lowTemp = document.createElement("p2");
    lowTemp.setAttribute("class", "lowTemp");

    const cityDescription = document.createElement("p3");
    cityDescription.setAttribute("class", "city-description");


    cityName.innerText = city;
    results.append(cityName);

    cityTemp.innerText = `Current weather is ${currTemp}F`;
    results.append(cityTemp);

    maxTemp.innerHTML = `The maximum temperature for today is ${highTemp} F <br> <br>`;
    results.append(maxTemp);

    lowTemp.innerHTML = `The lowest temperature for today is ${lowestTemp} F <br> <br>`;
    results.append(lowTemp);

    cityDescription.innerText = `The skys todays are: ${description} `;
    results.append(cityDescription);

    body.append(results);
    }

// add event listener to submit button
submit.addEventListener("click", () => {
    const searchText = input.value;
    results.innerHTML = ""
    //get info from weather API
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=0ecc67f8820a5e0b51f50e7788e68ec7&units=imperial`, (data) => {
        // find city name
        const nameCity = data.name
        // find current temp
        const tempCurr = data.main.temp;
        // find max temp
        const maxTemp = data.main.temp_max
        // find low temp
        const lowTemp = data.main.temp_min
        // find description of weather
        const cityDes = data.weather[0].description;
        //call function and insert arguements
        makeResults(nameCity, tempCurr, maxTemp, lowTemp, cityDes);

        // show results in the console
        console.log("city name", nameCity);
        console.log("current temp", tempCurr);
        console.log("max temp", maxTemp);
        console.log("low temp", lowTemp);
        console.log("description", cityDes);
    })
})



