<script type="text/javascript">

function showWrongAnswer(){
    document.id('error').set('html', 'Wrong answer, Please try again');
}

function showScore() {
	var score = quizMaker.getScore();

	var el = new Element('h3');
	el.set('html', 'Thank you!');
    document.id('result').adopt(el);

	el = new Element('h4');
	el.set('html', 'Score: ' + score.numCorrectAnswers + ' of ' + score.numQuestions);
    document.id('result').adopt(el);

	if(score.incorrectAnswers.length > 0) {
		el = new Element('h4');
		el.set('html', 'Incorrect answers:');
        document.id('result').adopt(el);

		for(var i=0;i<score.incorrectAnswers.length;i++) {
			var incorrectAnswer = score.incorrectAnswers[i];
			el = new Element('div');
			el.set('html', '<b>' +  incorrectAnswer.questionNumber + ': ' + incorrectAnswer.label + '</b>');
			document.id('result').adopt(el);

			el = new Element('div');
			el.set('html', 'Correct answer : ' + incorrectAnswer.correctAnswer);
            document.id('result').adopt(el);
			el = new Element('div');
			el.set('html', 'Your answer : ' + incorrectAnswer.userAnswer);
            document.id('result').adopt(el);

		}
	}

}

var questions = [
	{
		label : 'What is the capital of Norway ?',
		options : ['Stockholm', 'Oslo', 'Copenhagen'],
		answer : ['Oslo'],
		forceAnswer : true
    },
	{
		label : 'Who was the champion of this years soccer world cup in South Africa ?',
		options : ['Brazil', 'Netherlands', 'Spain'],
		answer : ['Spain']
    },
	{
		label : 'Who was the prime minister(s) of England during World War II ?',
		options : ['Clement Attlee', 'Sir Winston Churchill', 'Neville Chamberlain', 'Sir Anthony Eden'],
		answer : [1,2] // refers to the second and third option
    }
    ,
	{
		label : 'United States has how many states',
		options : ['49','50','51'],
		answer : ['50']
    },
	{
		label : 'A crocodile is a member of which family ?',
		options : ['amphibian','reptile', 'vermin'],
		answer : ['reptile']
    },
    {
        label: 'In which year did Atlanta(US) arrange the summer olympics ?',
        options : ['1992','1996','2000'],
        answer :['1996']
    }

]

function showAnswerAlert() {
	document.id('error').set('html', 'You have to answer before you continue to the next question');
}
function clearErrorBox() {
    document.id('error').set('html','');
}
var quizMaker = new DG.QuizMaker({
	questions : questions,
	el : 'questions',
    forceCorrectAnswer:false,
	listeners : {
		'finish' : showScore,
		'missinganswer' : showAnswerAlert,
		'sendanswer' : clearErrorBox,
        'wrongAnswer' : showWrongAnswer
	}
});
quizMaker.start();



</script>
