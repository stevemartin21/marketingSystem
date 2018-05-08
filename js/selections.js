//__ =   ===  __  __  ` `  % %  __dirname  __filename




const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');

const thumb = document.querySelectorAll('.thumb');
console.log(thumb);

for (i=0; i<thumb.length; i++){
	thumb[i].style.display='none';
}

console.log(one);
console.log(two);
console.log(three);

const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const radio3 = document.querySelector('#radio3');

// Options Selection

const radio4 = document.querySelector('#radio4');
const radio5 = document.querySelector('#radio5');
const radio6 = document.querySelector('#radio6');


const label1= document.querySelector('#label1');
const label2= document.querySelector('#label2');
const label3= document.querySelector('#label3');

//Option Selection

const label4= document.querySelector('#label4');
const label5= document.querySelector('#label5');
const label6= document.querySelector('#label6');


//  Input for City & Subdivision to dynamically show up on key up in demo id 

const cityInput= document.getElementById('cityInput');
const demo5 = document.getElementById('demo5');

console.log(cityInput);
console.log(demo5)

cityInput.addEventListener('keyup', function(){
	demo5.innerHTML = cityInput.value;

})

const subInput= document.getElementById('subInput');
const demo6 = document.getElementById('demo6');

subInput.addEventListener('keyup', function(){
	demo6.innerHTML = subInput.value;
})

console.log(subInput)

// urban, rural, suburbs

var demo7InputA ='';
var demo7InputB ='';
var demo7InputC ='';

const urban= document.getElementById('urban');
console.log(urban);

const rural= document.getElementById('rural');

const suburbs= document.getElementById('suburbs');

urban.addEventListener('change', function(){

	if(urban.checked){
		demo7InputA=' Urban ';
	}else{
		demo7inputA.replace('Urban', '');
		
	}
	
	demo7.innerHTML += demo7InputA;

})


rural.addEventListener('change', function(){

	if(rural.checked){
		demo7InputB =' Rural ';
	}else{
		demo7InputB = '';
	}
	demo7.innerHTML += demo7InputB;

})

suburbs.addEventListener('change', function(){

	if(suburbs.checked){
		demo7InputC = ' Suburbs'
	}else{
		demo7Input = '';	
	}
	
	demo7.innerHTML += demo7InputC;

})


const demo8 = document.getElementById('demo8');
console.log(demo8)

const importance = document.querySelectorAll("input[name='import']")

for (i=0; i< importance.length; i++){
	importance[i].addEventListener('change', function(e){
		if(e.target.checked){
			demo8.innerHTML = `On a scale of 1-10 it is a ${e.target.previousElementSibling.innerHTML} important that you build a home`;
			console.log('It worked')
		}else{
			console.log('it not work')
		}
	})
}


// Loop over form 

const demo9 = document.getElementById('demo9');
console.log(demo9)

const likely = document.querySelectorAll("input[name='likely']")

for (i=0; i< likely.length; i++){
	likely[i].addEventListener('change', function(e){
		if(e.target.checked){
			demo9.innerHTML = `On a scale of 1-10 it is a ${e.target.previousElementSibling.innerHTML} likely that you build a home`;
			console.log('It worked')
		}else{
			console.log('it not work')
		}
	})
}

const demo10 = document.getElementById('demo10');
console.log(demo10)

const timing = document.querySelectorAll("input[name='timing']")

for (i=0; i< timing.length; i++){
	timing[i].addEventListener('change', function(e){
		if(e.target.checked){
			demo10.innerHTML =  `You plan to build a home ${e.target.previousElementSibling.innerHTML} `;
			console.log('It worked')
		}else{
			console.log('it not work')
		}
	})
}



//for (i=0; i<form)




radio1.addEventListener('change', function(){

	if(radio1.checked){
		one.style.backgroundColor='#e3f2fd';
		label1.textContent='Selected';
		two.style.backgroundColor='';
		label2.textContent='Select Here';
		three.style.backgroundColor='';
		label3.textContent='Select Here';
	
	}
})

radio2.addEventListener('change', function(){

	if(radio2.checked){
		two.style.backgroundColor='#e3f2fd';
		label2.textContent='Selected'
		one.style.backgroundColor='';
		label1.textContent='Select Here';
		three.style.backgroundColor='';
		label3.textContent='Select Here';
	
	}
})

radio3.addEventListener('change', function(){

	if(radio3.checked){
		three.style.backgroundColor='#e3f2fd';
		label3.textContent='Selected'
		one.style.backgroundColor='';
		label1.textContent='Select Here';
		two.style.backgroundColor='';
		label2.textContent='Select Here';
	
	}
})



radio4.addEventListener('change', function(){

	if(radio4.checked){
		four.style.backgroundColor='#e3f2fd';
		label4.textContent='Selected'
		five.style.backgroundColor='';
		label5.textContent='Select Here';
		six.style.backgroundColor='';
		label6.textContent='Select Here';
	
	}
})


radio5.addEventListener('change', function(){

	if(radio5.checked){
		five.style.backgroundColor='#e3f2fd';
		label5.textContent='Selected'
		six.style.backgroundColor='';
		label6.textContent='Select Here';
		four.style.backgroundColor='';
		label4.textContent='Select Here';
	
	}
})

radio6.addEventListener('change', function(){

	if(radio6.checked){
		six.style.backgroundColor='#e3f2fd';
		label6.textContent='Selected'
		five.style.backgroundColor='';
		label5.textContent='Select Here';
		four.style.backgroundColor='';
		label4.textContent='Select Here';
	
	}
})







// Slider 

var slider = document.getElementById("myRange");

console.log(slider);

var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = '$ ' + this.value;
}

var slider2 = document.getElementById("myRange2");

console.log(slider);

var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
    output2.innerHTML =  this.value;
}

var slider3 = document.getElementById("myRange3");

console.log(slider);

var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider3.oninput = function() {
    output3.innerHTML =  this.value;
}

var slider4= document.getElementById("myRange4");

console.log(slider);

var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider4.oninput = function() {
    output4.innerHTML =  this.value;


}

var slider5= document.getElementById("myRange5");

console.log(slider);

var output11 = document.getElementById("demo11");
output11.innerHTML = 'Square Feet: ' +slider5.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider5.oninput = function() {
    output11.innerHTML = 'Square Feet: ' + this.value;
}