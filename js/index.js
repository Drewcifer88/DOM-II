// Your code goes here

// Your code goes here

// document.querySelector('a').addEventListener('click', clickEventHandler)
// function clickEventHandler(event) {
//   console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//   console.log(event.target);
// }
  
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)
//Declarations




// Events

const head = document.querySelector(".main-navigation");
head.addEventListener('mouseover', (event) => {
	event.target.style.backgroundColor = 'yellow';	
});
head.addEventListener('mouseleave', (event) => {
	event.target.style.backgroundColor = 'white';
});
const header =  document.querySelector('nav');
header.addEventListener('mouseleave', (event) => {
	event.target.style.backgroundColor = 'white';
});
const headers =  document.querySelector('a');
headers.addEventListener('mouseleave', (event) => {
	event.target.style.backgroundColor = 'white';
});


const pageImg = document.querySelector('.intro img');
pageImg.addEventListener("mouseover", (event) => {
		event.target.style.filter = "blur(8px)";
});
pageImg.addEventListener("mouseleave", (event) => {
	event.target.style.filter = "";
});


const h2Color = document.querySelectorAll('h2');
Array.from(h2Color).forEach((apple) => {
apple.addEventListener('click',(event) => {
	console.log(event.target.style.color = 'red');
	});
});

const buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((banana) => {
banana.addEventListener('click', (event) => {
	event.target.style.color = 'orange';
	});
});

const imgs = document.querySelectorAll('img')
Array.from(imgs).forEach((pear) => {
pear.addEventListener('click', (event) => {
	event.target.style.filter = "blur(8px)";
	});
});

const foot = document.querySelector('footer p');
foot.addEventListener('click', (event) => {
	event.target.style.color = 'pink';
});