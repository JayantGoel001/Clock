const toggleClass = ()=>{
	const body = document.querySelector("body");
	body.classList.toggle('light');
}

const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(()=> {
	let date = new Date();
	let hh = date.getHours() * 5 * deg;
	let mm = date.getMinutes() * deg;
	let ss = date.getSeconds() * deg;

	hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
});
