// Function to update the global time
function updateGlobalTime() {
  // Global-scoped variable
  let utcTime = document.getElementById("utc-time");

  function calculateGlobalTime() {
    const utcDate = new Date();
    const utcHours = utcDate.getUTCHours();
    const utcMinutes = utcDate.getUTCMinutes();
    const utcSeconds = utcDate.getUTCSeconds();

    const utcAmPm = utcHours >= 12 ? 'PM' : 'AM';
    const utc12Hour = utcHours % 12 || 12;
    const utcTimeStr = `${utc12Hour}:${utcMinutes}:${utcSeconds} ${utcAmPm}`;

    utcTime.textContent = `UTC Time: ${utcTimeStr}`;
  }

  // Call the initial calculation function
  calculateGlobalTime();

  // Update the global time every second
  setInterval(calculateGlobalTime, 1000);
}

function startGlobalTimer() {
  // Call the updateGlobalTime function immediately to display the initial global time
  updateGlobalTime();

  // Update the time every second
  setInterval(updateGlobalTime, 1000);
}

let globalTimerButton = document.getElementById("globalTimerButton");

globalTimerButton.addEventListener('click', startGlobalTimer);

// Function to update the local time
function updateLocalTime() {
  let localTime = document.getElementById("local-time");

  function calculateLocalTime() {
    const localDate = new Date();
    const localHours = localDate.getHours();
    const localMinutes = localDate.getMinutes();
    const localSeconds = localDate.getSeconds();

    const localTimeStr = `${localHours}:${localMinutes}:${localSeconds}`;
    localTime.textContent = `Local Time: ${localTimeStr}`;
  }

  calculateLocalTime();
  setInterval(calculateLocalTime, 1000);
}

function startLocalTimer() {
  updateLocalTime();
}

let localTimerButton = document.getElementById("localTimerButton");

localTimerButton.addEventListener('click', startLocalTimer);
