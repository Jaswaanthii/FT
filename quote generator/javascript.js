var quotes = ['Drink coffee to have a better nap.' ,
			  'Skip energy drinks when you are tired.' , 
			  'Treat heartburn and stomachaches with chocolate' ,
			  'Take vitamin D3 if you do not get much sun exposure' ,
			  'Bananas can help improve your mood' ,
			  'Cholesterol-free can be bad for your cholesterol.' , 
			  'Exercise will give you more energy, even when you are tired.']

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}