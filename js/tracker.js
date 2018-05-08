//__ =   ===  __  __  ` `  % %  __dirname  __filename


var d = new Date();
var n = d.getDate();
var m = d.getMonth();
var y = d.getFullYear();

var date = `${m}/${n}/${y} `
console.log(date);

var scoreboard =0;

let progress = document.querySelector('#progress');
console.log(progress)
//progress.style.color='white';

let dateComplete = document.querySelectorAll('.dateComplete');

const mainProgress = document.querySelector('#mainProgress');

console.log(mainProgress);

let valueNow = mainProgress.getAttribute('value');

console.log(valueNow);





const checkedInput = document.querySelectorAll('.container2 input[type="checkbox"]');

const complete = document.querySelectorAll('.complete');

for (i=0; i<complete.length; i++){
	complete[i].style.display='none';
}

for (i=0; i<dateComplete.length; i++){
	dateComplete[i].style.display='none';
}



for (i=0; i<checkedInput.length; i++){
	checkedInput[i].addEventListener('change', function(e){
		let sibling =e.target.previousElementSibling;
		let previousBrother = sibling.previousElementSibling;
		
		//sibling.style.display='none';
		console.log(sibling);
		if(e.target.checked){
		sibling.style.display ='inline-block'
		scoreboard++
		previousBrother.style.display ='inline-block'
		previousBrother.innerHTML =date;
		console.log(previousBrother)
		}else if(!e.target.checked){
			sibling.style.display ='none';
			previousBrother.style.display ='none'
		scoreboard--
		previousBrother.innerHTML ='';	
		}
		
		valueNow= scoreboard;
		mainProgress.value =valueNow;
		progress.innerHTML = scoreboard;
		mainProgress.style.width = mainProgress.value+'%';
		mainProgress.innerHTML=mainProgress.value+'%';
		console.log(mainProgress.value);



})
}



//function myFunction() {document.getElementById("myProgress").value = "75";}