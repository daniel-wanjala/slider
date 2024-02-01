const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let sliderNUmber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
	const div = document.createElement("div");
	div.className = "button";
	bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
	buttons.forEach((button) => {
		button.style.backgroundColor = "transparent";
	});
};

buttons.forEach((button, i) => {
	button.addEventListener("click", () => {
		resetBg();
		slider.style.transform = `translateX(-${i * 800}px)`;
		sliderNUmber = i + 1;
		button.style.backgroundColor = "white";
	});
});

const prevSlide = () => {
	slider.style.transform = `translateX(-${(sliderNUmber - 2) * 800}px)`;
	sliderNUmber--;
};
const nextSlide = () => {
	slider.style.transform = `translateX(-${sliderNUmber * 800}px)`;
	sliderNUmber++;
};
const getFirstSlide = () => {
	slider.style.transform = `translateX(0px)`;
	sliderNUmber = length;
};
const getLastSlide = () => {
	slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
	sliderNUmber = 1;
};

const changeColor = () => {
     resetBg();
			buttons[sliderNUmber - 1].style.backgroundColor = "white";
}

right.addEventListener("click", () => {
    sliderNUmber < length ? nextSlide() : getFirstSlide();
   changeColor();
});

left.addEventListener("click", () => {
    sliderNUmber > 1 ? prevSlide() : getLastSlide();
   changeColor();
});


