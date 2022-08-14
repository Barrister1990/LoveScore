function Love() {
    var Urname = prompt("What is your name?")
var OtherName = prompt("What is their name?")
var LoveScore = Math.random() * 100;
LoveScore = Math.floor(LoveScore) + 1;
if (LoveScore > 80) {
    alert("Congratulation " + Urname + " and " + OtherName + " are a perfect match of " + LoveScore + "%")
    alert("You are meant  for each other")
}
    if (LoveScore > 50 && LoveScore <=  80){
        alert("Congratulation " + Urname + " and " + OtherName + " are a good match of " + LoveScore + "%" )
        alert("With hardwork and dedication you can make it work")
        
    }
        if (LoveScore > 30  && LoveScore <=  50){
             alert("Congratulation " + Urname + " and " + OtherName + " are a match of " + LoveScore  + "%")
            alert("There is a little chance that, you might end up together but don't raise your hopes up")
        }

    if(LoveScore < 30) {
        alert(Urname + " and " + OtherName + " are not a match")
        alert("Sorry you are not made for each other, Kindly find another person to love")
    }
    
}