//  __ =   ===  __  __  ` `  % %  __dirname  __filename

const brandingText = document.querySelector('#brandingText');

const brandingDefinition = document.querySelector('#brandingDefinition');

brandingText.addEventListener('keydown', function(){

	brandingDefinition.innerHTML = brandingText.value;

})


const marketingText = document.querySelector('#marketingText');

const marketingDefinition = document.querySelector('#marketingDefinition');

marketingText.addEventListener('keydown', function(){

	marketingDefinition.innerHTML = marketingText.value;

})