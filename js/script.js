const menuContainer = document.querySelectorAll(".menu-container");

const imgFood = [
	"ramen_yakitori",
	"ramen_tantamen",
	"ramen_yakiniku",
	"ramen_kotteri",
	"",
];
let imgNumber = 0;
const bgcImgAdd = () => {
	menuContainer.forEach(container => {
		container.style.backgroundImage = `url(../img/Food/${imgFood[imgNumber]}.jpg)`;
		imgNumber++;
	});
};

bgcImgAdd();
