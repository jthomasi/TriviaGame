window.onload = function () {

	var interval;
	var realAnswers = ["sleep","none","dachshund"];

    $("#startButton").on('click',function(){
    	$("#startButton").remove();
    	$('span').html("01:00");
    	displayQuestions();
        interval = setInterval(runTimer,1000);
    });

    function runTimer(){

    	var timer = $('span').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) {
        	return;
        }
        if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) {
            seconds = '0' + seconds;
        }
        if ((minutes < 10) && ((minutes+'').length < 2)) {
            minutes = '0' + minutes;
        }
        if ((minutes==00) && (seconds==00)){
            alert("Time's up!");
            answerOne = document.querySelector('input[name="q1"]:checked').value;
			answerTwo = document.querySelector('input[name="q2"]:checked').value;
			answerThree = document.querySelector('input[name="q3"]:checked').value;

			$('#questionsBox').remove();
			$('span').remove();
			clearInterval(interval);
			displayAnswers();   
        }
        $('span').html(minutes + ':' + seconds); 
    }

	function displayQuestions(){
		
		var questionOne = $('<p>');
		questionOne.attr("id","questionOne");
		questionOne.html("Question 1: What is the best thing in the world?");
		$("#questions").append(questionOne);

			var optionsOne = $('<input> Food </input>');
			optionsOne.attr("type","radio");
			optionsOne.attr("name","q1");
			optionsOne.attr("value","food");
			$("#questions").append(optionsOne);

			var optionsTwo = $('<input> Sleep </input>');
			optionsTwo.attr("type","radio");
			optionsTwo.attr("name","q1");
			optionsTwo.attr("value","sleep");
			$("#questions").append(optionsTwo);

			var optionsThree = $('<input> Tearing down the establishment </input>');
			optionsThree.attr("type","radio");
			optionsThree.attr("name","q1");
			optionsThree.attr("value","tearing down the establishment");
			$("#questions").append(optionsThree);

		var questionTwo = $('<p>');
		questionTwo.attr("id","questionTwo");
		questionTwo.html("Question 2: How many cubic feet of dirt is there in a hole 3 feet deep, 6 ft long, and 4 ft wide?");
		$("#questions").append(questionTwo);

			var optionsOneOne = $('<input> 72 </input>');
			optionsOneOne.attr("type","radio");
			optionsOneOne.attr("name","q2");
			optionsOneOne.attr("value","dogs");
			$("#questions").append(optionsOneOne);

			var optionsTwoTwo = $('<input> None </input>');
			optionsTwoTwo.attr("type","radio");
			optionsTwoTwo.attr("name","q2");
			optionsTwoTwo.attr("value","none");
			$("#questions").append(optionsTwoTwo);

		var questionThree = $('<p>');
		questionThree.attr("id","questionThree");
		questionThree.html("Question 3: Which bred of dog is the cutest?");
		$("#questions").append(questionThree);

			var optionsOneOneOne = $('<input> Labs </input>');
			optionsOneOneOne.attr("type","radio");
			optionsOneOneOne.attr("name","q3");
			optionsOneOneOne.attr("value","labs");
			$("#questions").append(optionsOneOneOne);

			var optionsTwoTwoTwo = $('<input> Poodles </input>');
			optionsTwoTwoTwo.attr("type","radio");
			optionsTwoTwoTwo.attr("name","q3");
			optionsTwoTwoTwo.attr("value","poodles");
			$("#questions").append(optionsTwoTwoTwo);

			var optionsThreeThreeThree = $('<input> Dachshunds </input>');
			optionsThreeThreeThree.attr("type","radio");
			optionsThreeThreeThree.attr("name","q3");
			optionsThreeThreeThree.attr("value","dachshund");
			$("#questions").append(optionsThreeThreeThree);

		var submit = $('<button>Submit</button>');
		submit.attr("id","submit");
		submit.attr("class","btn btn-primary");
		$('#submitBtn').append(submit);

		$("#submit").on('click',function(){

			answerOne = document.querySelector('input[name="q1"]:checked').value;
			answerTwo = document.querySelector('input[name="q2"]:checked').value;
			answerThree = document.querySelector('input[name="q3"]:checked').value;

			$('#questionsBox').remove();
			$('span').remove();
			clearInterval(interval);
			displayAnswers();

		});
	}

	function displayAnswers(){

		var correct = 0;
		var incorrect = 0;

		var displayCorrect = $('<div>');

		 if (answerOne == realAnswers[0]) {
		 	correct += 1;
		 }	
		 else if (answerOne != realAnswers[0]) {
		 	incorrect += 1;
		 }
		 if (answerTwo == realAnswers[1]) {
		 	correct += 1;
		 }	
		 else if (answerTwo != realAnswers[1]) {
		 	incorrect += 1;
		 }
		 if (answerThree == realAnswers[2]) {
		 	correct += 1;
		 }	
		 else if (answerThree != realAnswers[2]) {
		 	incorrect += 1;
		 }

		 $('#answers').append("All Done!");

		 displayCorrect.append("Correct: "+correct+"<br>");
		 displayCorrect.append("Incorrect: "+incorrect);
		 $('#answers').append(displayCorrect);
	}
};