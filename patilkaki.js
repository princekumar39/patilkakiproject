const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Set countdown time to 10 minutes in seconds
let countdownTime = 10 * 60;

function updateCountdown() {
  const remainingTime = countdownTime--;

  const d = Math.floor(remainingTime / 60 / 60 / 24);
  const h = Math.floor(remainingTime / 60 / 60) % 24;
  const m = Math.floor(remainingTime / 60) % 60;
  const s = remainingTime % 60;

    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

}

// Initial display:  days and hours to 00, minutes to 10, seconds to 00
setInterval(updateCountdown, 1000);


// form
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("form-container").classList.remove("hidden");
    }, 15000); // Show the form after 15 seconds
});

