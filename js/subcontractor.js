//__ =   ===  __  __  ` `  % %  __dirname  __filename


//New Home Agents
const agent1 = document.querySelector('#agent1');
const agent2 = document.querySelector('#agent2');
const agent3 = document.querySelector('#agent3');
//


//Land Agents
const agent4 = document.querySelector('#agent4');
const agent5 = document.querySelector('#agent5');
const agent6 = document.querySelector('#agent6');

//Loan Officer

const agent7 = document.querySelector('#agent7');
const agent8 = document.querySelector('#agent8');
const agent9 = document.querySelector('#agent9');


//Labels for each one

//Real Estate Agent

const labelAgent1 = document.querySelector('#labelAgent1');
const labelAgent2 = document.querySelector('#labelAgent2');
const labelAgent3 = document.querySelector('#labelAgent3');

//Land Agent

const labelAgent4 = document.querySelector('#labelAgent4');
const labelAgent5 = document.querySelector('#labelAgent5');
const labelAgent6 = document.querySelector('#labelAgent6');

//Loan Officer

const labelAgent7 = document.querySelector('#labelAgent7');
const labelAgent8 = document.querySelector('#labelAgent8');
const labelAgent9 = document.querySelector('#labelAgent9');



const agentName = document.querySelector('#agentName');
const agentEmail = document.querySelector('#agentEmail');
const agentPhone = document.querySelector('#agentPhone');

const landagentName = document.querySelector('#landagentName');
const landagentEmail = document.querySelector('#landagentEmail');
const landagentPhone = document.querySelector('#landagentPhone');

// Loan Company

const loancompanyName = document.querySelector('#loancompanyName');
const loanagentName = document.querySelector('#loanagentName');
const loanagentEmail = document.querySelector('#loanagentEmail');
const loanagentPhone = document.querySelector('#loanagentPhone');




const starholder = document.querySelector('.starHolder');

const starholder1 = document.querySelector('.starHolder1');

const starholder2 = document.querySelector('.starHolder2');

//Change the Agent Photo

const agentPhoto =document.querySelector('#agentPhoto');




agent1.addEventListener('change', function(){

	agentName.innerHTML = labelAgent1.innerHTML;
	agentPhone.innerHTML ='5555555555';
	agentEmail.innerHTML= 'kimAgent@gmail.com'
	starholder.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star-half-full blue-text fa-4x"> </i>
							`
	agentPhoto.src="thumbnail/agent.jpg";
})


agent2.addEventListener('change', function(){

	agentName.innerHTML = labelAgent2.innerHTML;
	agentPhone.innerHTML ='8015555555';
	agentEmail.innerHTML= 'bobagent@gmail.com'
	starholder.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							`
    agentPhoto.src="thumbnail/interview.jpg";                        
});

agent3.addEventListener('change', function(){

	agentName.innerHTML = labelAgent3.innerHTML;
	agentPhone.innerHTML ='9095555555';
	agentEmail.innerHTML= 'tedagent@gmail.com'
	starholder.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star-half-full blue-text fa-4x"> </i>
	
							`
	agentPhoto.src="thumbnail/leadGen.jpg";
});


agent4.addEventListener('change', function(){

	landagentName.innerHTML = labelAgent4.innerHTML;
	landagentPhone.innerHTML ='9095555555';
	landagentEmail.innerHTML= 'maryagent@gmail.com'
	starholder1.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star-half-full blue-text fa-4x"> </i>
	
							`
	landagentPhoto.src="thumbnail/mary.jpg";
});

agent5.addEventListener('change', function(){

	landagentName.innerHTML = labelAgent5.innerHTML;
	landagentPhone.innerHTML ='015555555';
	landagentEmail.innerHTML= 'larryagent@gmail.com'
	starholder1.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							
							<i class="fa fa-star-half-full blue-text fa-4x"> </i>
	
							`
	landagentPhoto.src="thumbnail/larry.jpg";
});

agent6.addEventListener('change', function(){

	landagentName.innerHTML = labelAgent6.innerHTML;
	landagentPhone.innerHTML ='8015555555';
	landagentEmail.innerHTML= 'sallyagent@gmail.com'
	starholder1.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							
							
							<i class="fa fa-star-half-full blue-text fa-4x"> </i>
	
							`
	landagentPhoto.src="thumbnail/sally.jpg";
});

agent7.addEventListener('change', function(){

	loanagentName.innerHTML = labelAgent7.innerHTML;
	loanagentPhone.innerHTML ='9015555555';
	loanagentEmail.innerHTML= 'loanajames@gmail.com'
	starholder2.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							
							
							<i class="fa fa-star-half-full blue-text fa-4x"> </i>
	
							`
	loanagentPhoto.src="thumbnail/james.jpg";
});

agent8.addEventListener('change', function(){

	loanagentName.innerHTML = labelAgent8.innerHTML;
	loanagentPhone.innerHTML ='9015555555';
	loanagentEmail.innerHTML= 'loansusan@gmail.com'
	starholder2.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star-half-full blue-text fa-4x"> </i>
	
							`
	loanagentPhoto.src="thumbnail/susan.jpg";
});



agent9.addEventListener('change', function(){

	loanagentName.innerHTML = labelAgent9.innerHTML;
	loanagentPhone.innerHTML ='9015555555';
	loanagentEmail.innerHTML= 'loankate@gmail.com'
	starholder2.innerHTML=  `<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							<i class="fa fa-star blue-text fa-4x"> </i>
							
	
							`
	loanagentPhoto.src="thumbnail/kate.jpg";
});

