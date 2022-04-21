//  author: Denis Brisson 

//This function is called when the home page is load to disable the button that starts the quiz.
function submitOff() {
 document.getElementById("submit").disabled = true;
}

//This function is a simple if else statement that enables the "Start Quiz" button wether th
 function submitOn(element) {
		 if(element.checked) {
			 document.getElementById("submit").disabled = false;
			}
			else  {
			 document.getElementById("submit").disabled = true;
		 }

 }
