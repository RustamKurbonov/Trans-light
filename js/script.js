window.onload = function(){
	menuBurger();
	sliderProjects();
	sliderArenta();
	tabsProducts();
}

function menuBurger(){
	let burger = document.getElementById('burger');
	let menu = document.getElementById('menu');
	let body = document.getElementById('body');
	burger.onclick = classActive;

	function classActive(e){
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle("lock");
	}
}

function sliderProjects(){
	let leftBtn = document.getElementById('projects-left');
	let rightBtn = document.getElementById('projects-right');
	let line = document.getElementById('line');
	let lineWidth = 0;
	let step = 0;
	let arr = [0];
	let offsetWidth = 0;
	let slides = document.getElementsByClassName('projects__slider');

	for(let i = 1; i < slides.length; i++){
		arr.push(slides[i].offsetWidth);
		lineWidth += slides[i].offsetWidth;
	}

	line.style.width = lineWidth + 'px';	
	
	leftBtn.onclick = moveLeft;
	rightBtn.onclick = moveRight;
	
	function moveRight() {
		if(step >= arr.length - 1){
			step = 0;
			line.style.left = -arr[step] + 'px';
		} else {
			step++;
			line.style.left = -arr[step] + 'px';
		}
	}

	function moveLeft (){
		if(step == 0){
			step = arr.length - 1;
			line.style.left = -arr[step] + 'px';
		} else {
			step--;
			line.style.left = -arr[step] + 'px';
		}
	}
}

function sliderArenta(){
	let sliderArenta = document.getElementsByClassName('arenta__item');
	let leftBtnArenta = document.getElementById('leftBtnArenta');
	let rightBtnArenta = document.getElementById('rightBtnArenta');
	let indexSlid = 0;

	for(let i = 1; i < sliderArenta.length; i++){
		sliderArenta[i].style.opacity = '0';
	}

	leftBtnArenta.onclick = sliderArentaLeft;
	rightBtnArenta.onclick = sliderArentaRight;

	function sliderArentaLeft(){
		if(indexSlid == 0){
			sliderArenta[indexSlid].style.opacity = '0';
			indexSlid = sliderArenta.length - 1;
			sliderArenta[indexSlid].style.opacity = '1';
		} else {
			sliderArenta[indexSlid].style.opacity = '0';
			indexSlid--;
			sliderArenta[indexSlid].style.opacity = '1';
		}
	}
	function sliderArentaRight(){
		if(indexSlid == sliderArenta.length - 1){
			sliderArenta[indexSlid].style.opacity = '0';
			indexSlid = 0;
			sliderArenta[indexSlid].style.opacity = '1';
		} else {
			sliderArenta[indexSlid].style.opacity = '0';
			indexSlid++;
			sliderArenta[indexSlid].style.opacity = '1';
		}
	}
}

function tabsProducts(){
	let tabs = document.getElementsByClassName('products__link');
	let section = document.getElementsByClassName('products__slide');

	for(let i = 0; i < tabs.length; i++){
		tabs[i].addEventListener("click", changeСlass);
	}

	function changeСlass(e){
		let tabId = e.target.id;

		for(let q = 0; q < tabs.length; q++){
			tabs[q].classList.remove('active');
			tabs[tabId - 1].classList.add('active');
			section[q].classList.remove('active');
			section[tabId - 1].classList.add('active');
		}
	}
}