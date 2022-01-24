const hbs = require("hbs");
hbs.registerHelper('getAnio',()=>{
    return new Data().getFullYear()
});

//Categoria 

const Platos = [
	{
		id: "1",
		name: "Pizza Meat Lovers",
		price: "$22.00",
		description: "Una deliciosa combinación de carne, jamón, pepperoni y salchicha italiana.",
	},
	{
		id: "2",
		name: "Pizza Hawaiana Lovers",
		price: "$19.50",
		description: "La hawaina más hawaina de todas: doble jamón y doble piña",
	},
	{
		id: "3",
		name: "Pizza Jamón Lovers",
		price: "$21.50",
		description: "Hamburguesa con chorizo.",
	},
	{
		id: "4",
		name: "Pizza Veggie Lovers",
		price: "$17.50",
		description: "Para los amantes de los vegetales: aceitunas, champiñones y sweet corn.",
	},
	{
		id: "5",
		name: "BK Staker doble con queso",
		price: "$5.39",
		description: "Dos carnes 100% a la parrilla, queso americano y tocino.",
	},
	{
		id: "6",
		name: "BBQ Bacon King",
		price: "$6.49",
		description:"Doble 1/4 de libra de carne de res a la parrilla con extra salsa BBQ.",
	},
];

module.exports = Platos;



