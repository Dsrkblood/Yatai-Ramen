const menuContainer = document.querySelectorAll(".menu-container");
const yearFooter = document.querySelector(".year");

const imgFood = [
	"kimchi",
	"wołowina_tataki",
	"smażone_krewetki",
	"edamame",
	"ramen_yakitori",
	"ramen_tantamen",
	"ramen_yakiniku",
	"ramen_kotteri",
	"żeberka_teryaki",
	"smażony_stek",
	"udon_wołowina",
	"udon_wege",
	"lody_yuzu",
	"krem_matcha",
];
let imgNumber = 0;
const bgcImgAdd = () => {
	menuContainer.forEach(container => {
		container.style.backgroundImage = `url(./img/Food/${imgFood[imgNumber]}.jpg)`;
		imgNumber++;
	});
};

const data = params => {
	let addData = new Date();
	yearFooter.textContent = addData.getFullYear();
};

data();
bgcImgAdd();
