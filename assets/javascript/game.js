  $(document).ready(function() {
    var buttonOptions = []
    crystalArray = []
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var userTotal = 0;
    var numbertoGuess = 0
    var total = 0
    var sum = 0

//There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
var startGame = function(){
    numbertoGuess = (Math.floor(20 + Math.random() * 100)); 
    $("#crystal-Value").text(numbertoGuess);
    $("#user-Total").html(userTotal);
    

for (var i = 0; i < 4; i++) {
    buttonRan = (1 + Math.floor(Math.random() * 12));  
    buttonOptions.push(buttonRan)
 };

  
 //When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

 
 //var button1 = function(){
    $("#btn1").click(function(){
    counter = counter + buttonOptions[0] 
    crystalArray.push(counter)
    console.log(buttonOptions[0]) 
    console.log("new total: ", counter) 
    $("#user-Total").html(counter)     
    })
 //}
//var button2 = function(){
    $("#btn2").click(function(){
        console.log(buttonOptions[1])
    counter = counter + buttonOptions[1]
    crystalArray.push(counter) 
    console.log("new total: ", counter)  
    $("#user-Total").html(counter) 
    })
//}
//var button3 = function(){
    $("#btn3").click(function(){
    counter = counter +buttonOptions[2] 
    crystalArray.push(counter)
    console.log(buttonOptions[2])
    console.log("new total: ", counter)  
    $("#user-Total").html(counter)
    })
//}
//var button4 = function(){
    $("#btn4").click(function(){
    counter = counter +buttonOptions[3] 
    crystalArray.push(counter)
    console.log(buttonOptions[3])
    console.log("new total: ", counter)  
    $("#user-Total").html(counter)
    })
    };
//}
 
// button1();
// button2();
// button3();
// button4();
//startGame();

 // Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.

    
// All of the same game win-lose logic applies. So the rest remains unchanged.
     
//The player wins if their total score matches the random number from the beginning of the game.
console.log(numbertoGuess)

// function sum(){
         
//  if (crystalArray.length !== 0){ 
//     for(var i =0 ; i < crystalArray.length ; i++){  
//      var total = total + 5//(crystalArray[i]) 
//  }              
// }
// } 

// sum()


function sumArray(){
	var sum = 0;
	for(var j = 0; j < crystalArray.length ; j++){
		if (Number.isFinite(crystalArray[j])) {
			sum = sum + crystalArray[j];
		}
        
	}
	return sum;
    
}
sumArray()

if (sum === numbertoGuess) {
        console.log(numbertoGuess)
        alert("You Won")
        wins++
        $("#your-Wins").html(wins)
        startGame();
        counter = 0 
         
        }
        else if (sum >= numbertoGuess) {
        alert("You Lost")
        losses++
        $("#your-Losses").html(losses)
        startGame(); 
        counter = 0 
       }
  
    
//The player loses if their score goes above the random number.
    

//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

  });