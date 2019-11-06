// First Part

function playTheGame(){

}
var play= "";
var myNumber="";
var computerNumber="";

function confirm(){
	play = prompt("Do you want to play the game? YES//NO").toUpperCase();
	// alert(play);

}

confirm();

if (play=="NO"){
	alert("Don't worry be happy");
}
else if(play=="YES"){
	myNumber=prompt("Put a number between 0 and 10");
	if(isNaN(myNumber)){
		alert("Sorry not a number!");
		myNumber=("Put another number: ")
	}
}

if(myNumber<=0 && myNumber>=10){
	alert("Sorry, Not a good number, Goodbye");

}else{

	computerNumber = Math.floor(Math.random() *11)
	console.log(computerNumber);
}



function playGame(){
	alert("hehehejeeje");


}

// Second Part

function test(myNumber, computerNumber){

	for(i=0; i<2; i++){	
		if(myNumber===computerNumber){
			break;	
		}
		else if(myNumber>computerNumber){
			alert("Your number is bigger than the random number");
			myNumber= parseInt(prompt("Write a new number"));

		}
		else if(myNumber<computerNumber){
			alert("Your number is smaller than the random number");
			myNumber= parseInt(prompt("Write a new number"));

		}
	}
	if(myNumber==computerNumber){
		alert("You won the game motherfucker!!!")
	}
		else{
			alert("You idiot you lost the game, the number was: "+computerNumber);
			}	
}




test(myNumber,computerNumber);

