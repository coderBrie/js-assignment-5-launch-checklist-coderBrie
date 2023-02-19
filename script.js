// W const pilotStatus = document.getElementById("pilotStatus");


window.addEventListener("load", function() {
    // const copilotStatus = document.getElementById("copilotStatus");
    // const fuelStatus = document.getElementById("fuelStatus");
    // const cargoStatus = document.getElementById("cargoStatus");
    // const launchStatus = document.getElementById("launchStatus");
    // const faultyItems = document.getElementById("faultyItems");
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    formSubmission(document, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
   })

   








   
});











 VBArray






























































