$(document).ready(function() {
    
    // Globals
    var counter = 0
    var Wins = 0
    var Losses = 0
    
    // Setting crystal values and target value
    var crystal1 = Math.floor(Math.random() * (12)) + 1;
    var crystal2 = Math.floor(Math.random() * (12)) + 1;
    var crystal3 = Math.floor(Math.random() * (12)) + 1;
    var crystal4 = Math.floor(Math.random() * (12)) + 1;
    var targetNumber = Math.floor(Math.random() * (101)) + 19;
    $("#GivenNumber").text(targetNumber);
    
    
    // Image Crystal One-Green
        $("#image1").on("click", ".green", function() {
        counter += crystal1;
        $("#result").text(counter);
        console.log(counter); 
        if (counter === targetNumber) {
            $("#result").text(counter);
            Wins += 1;
            $("#Win").text(Wins);
            alert("You Win!");
            reset();}
        else if (counter > targetNumber) {
            $("#result").text(counter);
            Losses += 1;
            $("#Lose").text(Losses);
            alert("Sorry, you lost!");
            reset();
            
        }});
    // Image Crystal Two- black
    $("#image2").on("click", ".black", function() {
        counter += crystal2;
        $("#result").text(counter);
        console.log(counter);
        if (counter === targetNumber) {
            $("#result").text(counter);
            Wins += 1;
            $("#Win").text(Wins);
            alert("You Win!");
            reset();}
        else if (counter > targetNumber) {
            $("#result").text(counter);
            Losses += 1;
            $("#Lose").text(Losses);
            alert("Sorry, you lost!");
            reset();
            
        }});
    // Image Crystal Three- yellow
    $("#image3").on("click", ".yellow", function() {
            counter += crystal3;
            $("#result").text(counter);
            console.log(counter);
        if (counter === targetNumber) {
            $("#result").text(counter);
            Wins += 1;
            $("#Win").text(Wins);
            alert("You Win!");
            reset();}
        else if (counter > targetNumber) {
            $("#result").text(counter);
            Losses += 1;
            $("#Lose").text(Losses);
            alert("Sorry, you lost!");
            reset();
        }});
    // Image Crystal Four- purple
    $("#image4").on("click", ".purple", function() {
            counter += crystal4;
            $("#result").text(counter);
            console.log(counter);
        if (counter === targetNumber) {
            $("#result").text(counter);
            Wins += 1;
            $("#Win").text(Wins);
            alert("You Win!");
            reset();}
        else if (counter > targetNumber) {
            $("#result").text(counter);
            Losses += 1;
            $("#Lose").text(Losses);
            alert("Sorry, you lost!");
            reset();
        }});
    // Reset Game Function
    var reset = function() {
        counter=0;
        crystal1 = Math.floor(Math.random() * (12)) + 1;
        crystal2 = Math.floor(Math.random() * (12)) + 1;
        crystal3 = Math.floor(Math.random() * (12)) + 1;
        crystal4 = Math.floor(Math.random() * (12)) + 1;
        targetNumber = Math.floor(Math.random() * (101)) + 19;
        $("#result").text(counter);
        $("#GivenNumber").text(targetNumber);
        console.log(counter);};
    
    });
    