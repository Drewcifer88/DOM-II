// Your code goes here

// Your code goes here

 
  
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


document.querySelector('a').addEventListener('click', clickEventHandler)
function clickEventHandler(event) {
  console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  console.log(event.target);
}
const h2Color = document.querySelector('h2');
h2Color.addEventListener('click',(event) => {
	event.target.style.color = 'red';
	
})