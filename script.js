const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = "1 Jan 2022";

function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) /	 1000;

	const days = Math.floor(totalSeconds / 3600 / 24 );

	const hours = Math.floor(totalSeconds / 3600) % 24;

	const mins = Math.floor(totalSeconds / 60) % 60;

	const seconds = Math.floor(totalSeconds) % 60;

	daysEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(mins);
	secondsEl.innerHTML = formatTime(seconds);

}

//función que agrega un 0 a los numeros menos que 10
function formatTime(time){
	return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Registro de sw exitoso", reg))
    .then((err) => console.warn("error al tratar de registrar el sw", err));
}
