// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput) {
        return "Empty";
      }
      if (isNaN(testInput)) {
        return "Not a Number";
      }
      return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");
    const faultyItems = document.getElementById("faultyItems");
  
    // Validate input fields
    const pilotIsValid = validateInput(pilotName) === "Is a Number";
    const copilotIsValid = validateInput(copilotName) === "Is a Number";
    const fuelIsValid = validateInput(fuelLevel) === "Is a Number";
    const cargoIsValid = validateInput(cargoMass) === "Is a Number";
  
    // Update shuttle requirements
    pilotStatus.innerHTML = `Pilot ${pilotName} is ${pilotIsValid ? "ready" : "not ready"}.`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ${copilotIsValid ? "ready" : "not ready"}.`;
    fuelStatus.innerHTML = `Fuel level of ${fuelLevel} liters is ${fuelIsValid ? "sufficient" : "insufficient"} for launch.`;
    cargoStatus.innerHTML = `Cargo mass of ${cargoMass} kg is ${cargoIsValid ? "low enough" : "too high"} for launch.`;
  
    // Check shuttle requirements
    let hasFaultyItems = false;
    if (fuelIsValid && fuelLevel < 10000) {
      fuelStatus.innerHTML = `Fuel level of ${fuelLevel} liters is insufficient for launch.`;
      hasFaultyItems = true;
    }
    if (cargoIsValid && cargoMass > 10000) {
      cargoStatus.innerHTML = `Cargo mass of ${cargoMass} kg is too high for launch.`;
      hasFaultyItems = true;
    }
    if (hasFaultyItems) {
      faultyItems.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
    } else {
      faultyItems.style.visibility = "hidden";
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green";
    }
  
    // Prevent default form submission
    event.preventDefault();
  }
//stop the submission//
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
