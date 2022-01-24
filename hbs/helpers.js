const hbs = require("hbs");
hbs.registerHelper('getAnio',()=>{
    return new Data().getFullYear()
});

//Categoria 

const Tipos = [
	{
		id: "1",
		name: "Copa Duo",
		price: "5.50",
		description: "Copa con 2 sabores de helado",
	},
	{
		id: "2",
		name: "Cono Max",
		price: "2.50",
		description: "Cono con 2 sabores de helado",
	},
	{
		id: "3",
		name: "Copa Gelaxia",
		price: "4.00",
		description: "Copa con 5 sabores + crema + queso",
	},
	{
		id: "4",
		name: "Durazno",
		price: "3.50",
		description: "Durazno + 1 sabor + crema + queso",
	},
	{
		id: "5",
		name: "Banana",
		price: "5.39",
		description: "banana + 3 sabores + crema + queso",
	},
	{
		id: "6",
		name: "Copa Magica",
		price: "6.49",
		description:"Duraznos + fresas",
	},
];

module.exports = Tipos;



