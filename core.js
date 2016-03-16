$(function() { 
	var stuff1 = ["bear","diaper","child"];
	var stuff2 = ["bears","diapers","children"];
	var i = 0;

	$('#addNewInput').hide()
	$('textArea').hide();
	
	$("#generateQuote").click(function() {
		i = (i+1)%stuff1.length;

		console.log('this is i in generate quote:' + i);
		
		var sing = stuff1[i];
		var plur = stuff2[i];

		$('.singular').each(function(){
			$(this).text();
			$(this).text(sing);
		});

		$('.plural').each(function(){
			$(this).text();
			$(this).text(plur);
		});
	
	});

	$('#textArea').hide();

	var i2 = 0;
	var addToQuoteClicks = 0;

	$("#addToQuote").click(function(e) { 
   		e.preventDefault();

		var singularInput = $('#singularInput').val();
		var pluralInput = $('#pluralInput').val();

		stuff1.unshift(singularInput);
		stuff2.unshift(pluralInput);	

		console.log(stuff1);
		console.log(stuff2);	

		var sing = stuff1[i];
		var plur = stuff2[i];

		$('.singular').each(function(){
			if (i2 == 0) {
				$(this).text(sing)
			}
		});

		$('.plural').each(function(){
			if (i2 == 0) {
				$(this).text(plur)
			}
		});	


		$('#userInputs').hide();
		$('#addNewInput').show();
		$('#textArea').show();

	});

	$("#newInputButton").click(function(e) { 
   		e.preventDefault();
		$('#textArea').hide();
		$('#addNewInput').hide();
		$('#userInputs').show();

		$('#singularInput').val('');
		$('#pluralInput').val('');
   	});

});
