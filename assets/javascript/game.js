   
//var targetNumber = 0
var userNumber = 0
var wins = 0
var losses = 0
var imgCrystal = ["../images/crystal-1.jpeg", "../images/crystal-2.jpeg", "../images/crystal-1.jpeg","../images/crystal-2.jpeg" ]    
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
//$(".crystals").clear()
//makeCrystals()
} 
reset()    

//BELOW IS THE CODE FOR DINAMIC CRYSTALS (it does not work :)

function makeCrystals(){
  for (i = 0; i < imgCrystal.length; i++) {
    var image = $("<img>");
    //adding class 
    image.addclass("img-crystal");
    //adding source attribute for each image 
    // image.attr("src", imgCrystal[i]);
    //adding value (1-12) to the image
    image.attr("data-test", Math.floor((Math.random() * 11) + 1)); //<--- this did not work
    // image.attr("data-test", inrement);  
    $("#crystals").append(imgCrystal[i]);
  }
}
 
$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-test"));
  crystalValue = parseInt(crystalValue);
  
  userNumber += crystalValue;


})