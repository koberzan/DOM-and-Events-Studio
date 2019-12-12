window.addEventListener("load", function() {
    console.log('window loaded');

    let takeOff = document.getElementById("takeoff");
          takeOff.addEventListener("click", function (event) {
          let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (confirmTakeoff === true) {
                let flightStatus = document.getElementById("flightStatus");
                flightStatus.innerHTML = "Shuttle in flight";
                let shuttleBackground = document.getElementById("shuttleBackground");
                shuttleBackground.style.backgroundColor = "blue";
                let shuttleHeight = document.getElementById("spaceShuttleHeight");
                shuttleHeight.innerHTML = "10,000";
            }
          });

    let landing = document.getElementById("landing");
          landing.addEventListener("click", function(event) {
          let landingAlert = window.alert("The shuttle is landing. Landing gear engaged.");
            let flightStatus = document.getElementById("flightStatus");
                flightStatus.innerHTML = "The shuttle has landed.";
            let shuttleBackground = document.getElementById("shuttleBackground");
                shuttleBackground.style.backgroundColor = "green";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
                shuttleHeight.innerHTML = "0";
          });

    let abortMission = document.getElementById("missionAbort");
          abortMission.addEventListener("click", function (event) {
          let abortMission = window.confirm("Confirm that you want to abort the mission.");
            if (abortMission === true) {
                let flightStatus = document.getElementById("flightStatus");
                flightStatus.innerHTML = "Mission aborted.";
                let shuttleBackground = document.getElementById("shuttleBackground");
                shuttleBackground.style.backgroundColor = "green";
                let shuttleHeight = document.getElementById("spaceShuttleHeight");
                shuttleHeight.innerHTML = "0";
            }
          });

    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.top = '0';
    rocket.style.left = '0';

    let downButton = document.getElementById("down");
          downButton.addEventListener("click", function() {
              let temp = parseInt(rocket.style.top) + 10 + 'px';
              rocket.style.top = temp;
          });

    let rightButton = document.getElementById("right");
        rightButton.addEventListener("click", function() {
            let temp = parseInt(rocket.style.left) + 10 + 'px';
              rocket.style.left = temp;
        });

    let upButton = document.getElementById("up");
        upButton.addEventListener("click", function() {
            let temp = parseInt(rocket.style.top) - 10 + 'px';
              rocket.style.top = temp;
        });

    let leftButton = document.getElementById("left");
        leftButton.addEventListener("click", function() {
            let temp = parseInt(rocket.style.left) - 10 + 'px';
              rocket.style.left = temp;
        });
});