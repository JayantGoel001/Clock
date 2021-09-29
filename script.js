const body = document.querySelector("body");
let i = 0;
const toggleClass = ()=>{
	if(i === 0) {
		body.classList.replace('light','dark');
	}else if( i=== 1){
		body.classList.replace('dark','glass');
	}else{
		body.classList.replace('glass','light');
	}
	i = (i+1)%3;
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
