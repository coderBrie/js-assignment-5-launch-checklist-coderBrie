// W const pilotStatus = document.getElementById("pilotStatus");
const copilotStatus = document.getElementById("copilotStatus");
 const fuelStatus = document.getElementById("fuelStatus");
 const cargoStatus = document.getElementById("cargoStatus");
 const launchStatus = document.getElementById("launchStatus");
 const faultyItems = document.getElementById("faultyItems");

window.addEventListener("load", function() {
    // const copilotStatus = document.getElementById("copilotStatus");
    // const fuelStatus = document.getElementById("fuelStatus");
    // const cargoStatus = document.getElementById("cargoStatus");
    // const launchStatus = document.getElementById("launchStatus");
    // const faultyItems = document.getElementById("faultyItems");
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
    })
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
 
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
 
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
 
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);
 
        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);
 
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    }); 
   
});











 VBArray






























































