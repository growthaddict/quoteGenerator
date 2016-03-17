//on ready
$(function() { 
	var stuff1 = ["bear","diaper","child"];
	var stuff2 = ["bears","diapers","children"];
	var i = 0;

	$('#addNewInput').hide()
	$('textArea').hide();
	
	//if generate quote button is clicked
	$("#generateQuote").click(function() {

		i = (i+1)%stuff1.length;
		
		var sing = stuff1[i];
		var plur = stuff2[i];

		//loop through each singular word to be replaced
		$('.singular').each(function(){
			//replace it with singular word from array
			$(this).text(sing);
		});

		//loop through each plural word to be replaced
		$('.plural').each(function(){
			//replace it with plural word from array
			$(this).text(plur);
		});
	
	});

	//hide textarea by default
	$('#textArea').hide();

	//when addToQuote button is clicked
	$("#addToQuote").click(function(e) {
		
   		e.preventDefault();

   		//Get the value from singularInput form field
		var singularInput = $('#singularInput').val();
		
   		//Get the value from pluralInput form field
		var pluralInput = $('#pluralInput').val();
		
		//Add singular input to front of array
		stuff1.unshift(singularInput);

		//Add plural input to front of array
		stuff2.unshift(pluralInput);	

		var sing = stuff1[i];
		var plur = stuff2[i];
		
		//Find each singular class element
		$('.singular').each(function(){
			//Replace singular element with singular word from array
			$(this).text(sing);
		});

		//Find each plural class element
		$('.plural').each(function(){
			//Replace singular element with singular word from array
			$(this).text(plur);
		});	

		var errors = '';

		//if singular input is emptu
		if (!$.trim(singularInput).length) {

			//get singularError element
			var singularError = $('#singularError');

			//Make error message visible
			singularError.show();

			//Check to see if singluar error message is visible
			var singularVisible = singularError.is(':visible');

		}

		if (!$.trim(pluralInput).length) {
			//get pluralError element
			var pluralError = $('#pluralError');

			//Make error message visible
			pluralError.show();	

			//Check to see if plural error message is visible
			var pluralVisible = pluralError.is(':visible')	
		}

		//if error messages are not visible
		if (singularVisible === false && pluralVisible === false) {
			
			//Hide userInputs on click
			$('#userInputs').hide();

			//Show ability to add another input
			$('#addNewInput').show();

			//Show quote text area
			$('#textArea').show();

		}

	});

	//When newInputButton is clicked
	$("#newInputButton").click(function(e) { 
   		e.preventDefault();

   		//Hide textArea
		$('#textArea').hide();

		//Hide "add new input" button
		$('#addNewInput').hide();

		//Show user input options
		$('#userInputs').show();

		//Set singular input back to empty
		$('#singularInput').val('');

		//Set plural input back to empty
		$('#pluralInput').val('');
   	});

   	console.log(singularInput);

});
