// Write your JavaScript code here.

function init() {

    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const roketPosition = document.getElementById("rocket");
    
      //First and second Task flight status should change to “Shuttle in flight.”

    takeoff.addEventListener("click", function () {
        const confirmTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            spaceShuttleHeight.innerHTML = 10000;
            shuttleBackground.style.backgroundColor = "blue";
        }   
    });
       
    //Third Task  flight status should change to “The shuttle has landed.””

    landing.addEventListener("click", function () {
        const alertLanding = confirm("The shuttle is landing. Landing gear engaged.")
        if (alertLanding){
            flightStatus.innerHTML = "The shuttle has landed.";
            spaceShuttleHeight.innerHTML = 0;
            shuttleBackground.style.backgroundColor = "green";
        
        }
           
    });

    //Fourth Task Abort Mission

    missionAbort.addEventListener("click", function () {
        const  projectAborted = confirm("Confirm that you want to abort the mission.")
        if (projectAborted){
            flightStatus.innerHTML = "Mission aborted.";
            spaceShuttleHeight.innerHTML = 0;
            shuttleBackground.style.backgroundColor = "green";
                                          
        }

    });

    //Fifth Task Abort Mission
    upButton.addEventListener("click", function () {
        
        roketPosition.style.position = "-10px";
        
    });
}

window.addEventListener("load", init);
// Remember to pay attention to page loading!