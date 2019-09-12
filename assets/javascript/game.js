   
//var targetNumber = 0
var userNumber = 0
var wins = 0
var losses = 0
var imgCrystal = ["assets/images/crystal-1.jpeg", "assets/images/crystal-2.jpeg", "assets/images/crystal-3.jpeg","assets/images/crystal-4.jpeg" ]    
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var increment = numberOptions[Math.round(Math.random())];
// function   

function reset() {
targetNumber = Math.floor((Math.random() * 101) + 19);
userNumber = 0;
$("#wins").text(wins);
$("#losses").text(losses);
$("#target-number").text(targetNumber);
$("#user-number").text(userNumber);
$(".crystals").empty()
makeCrystals()
} 
reset()    

// lets put crystalls on the screen
function makeCrystals(){
  for (i = 0; i < imgCrystal.length; i++) {
    var image = $("<img>");
    //console.log(image);
    
    //adding class 
    image.addClass("crystal");
    
    //adding source attribute for each image 
    image.attr("src", imgCrystal[i]);
    
    //adding value (1-12) to the image
    image.attr("data-value", Math.floor((Math.random() * 11) + 1)); 
    $("#crystals").append(image);
  }
}
 
$("#crystals").on("click", ".crystal", function() {

  var crystalValue = ($(this).attr("data-value"));
  crystalValue = parseInt(crystalValue);
  userNumber += crystalValue;
  $("#user-number").text(userNumber);
  console.log(userNumber)
})

  

  
  

