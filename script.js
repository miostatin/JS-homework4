// --1--
// 	1) написати об * єкт студента який буде виводити ім * я, 			спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
// 	name: null,
// 	proffesion: null,
// 	gpa: null,
// 	missedClasses: null,
// 	info: function () {
// 		console.group('Info:');
// 		console.log(`Привіт, мене звати: ${this.name}`);
// 		console.log(`Я по спеціальності: ${this.proffesion}`);
// 		console.log(`Мій середній бал: ${this.gpa}`);
// 		console.log(`Я маю ${this.missedClasses} пропущених занятть`);
// 		console.groupEnd;
// 	},
// };

// let andrii = {
// 	name: 'Андрій',
// 	proffesion: 'js developer',
// 	gpa: 200,
// 	missedClasses: 0,
// };

// student.info.call(andrii);
// student.info.bind(andrii)();
// student.info.apply(andrii);

// let anastasia = {
// 	name: 'Анастасія',
// 	proffesion: 'project manager',
// 	gpa: 180,
// 	missedClasses: 0,
// };

// student.info.call(anastasia);
// student.info.bind(anastasia)();
// student.info.apply(anastasia);


// let katya = {
// 	name: 'Катерина',
// 	proffesion: 'ui/ux designer',
// 	gpa: 198,
// 	missedClasses: 0,
// };

// student.info.call(katya);
// student.info.bind(katya)();
// student.info.apply(katya);


// --2--
// 	Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке при натисканні на кнопку css - має видати коротке визначення що це таке

const htmlBtn = document.querySelector('.html');
const cssBtn = document.querySelector('.css');

htmlBtn.onclick = function () {
	console.log(this.value);
	console.log('HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.');
};

cssBtn.addEventListener('click', function () {
	console.log(this.value);
	console.log('Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language');
});



// --3--
// 	Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару функція має повертати назву товару і вартість
// перевірити на варіантах: 
// 1) banana 30, 4, 5
// 2) cherry 58, 1, 3
// 3) jrange 89. 3, 4

// const market = function (name, priceKg, amount) {
// 	let price = amount * priceKg;
// 	return `For ${amount} kg ${name} price is ${price} UAH`;
// }

// console.log(market('banana', 30.4, 5));
// console.log(market('cherry', 58.1, 5));
// console.log(market('jrange', 89.3, 5));