

$(document).ready(function() {
    // Variables
    var Wins = 0;
    var Losses = 0;
    var RandomNumber = 0;
    var CumulativeAmount = 0;
    var Jaeger1 = {RandomNumber: "0", ImageSource:"assets/images/1.jpg"};
    var Jaeger2 = {RandomNumber: "0", ImageSource:"assets/images/2.jpg"};
    var Jaeger3 = {RandomNumber: "0", ImageSource:"assets/images/3.jpg"};
    var Jaeger4 = {RandomNumber: "0", ImageSource:"assets/images/4.jpg"};
    var JaegerNumber = [Jaeger1.RandomNumber,Jaeger2.RandomNumber,Jaeger3.RandomNumber,Jaeger4.RandomNumber]
    var JeagerPhoto = [Jaeger1.ImageSource,Jaeger2.ImageSource,Jaeger3.ImageSource,Jaeger4.ImageSource]
    
    // function to generate random number (used for Jaeger)
    function resetJaegerNumber() {
      var minRandomNumber = 1;
      var MaxRandomNumber = 12;
      return Math.floor(Math.random() * (MaxRandomNumber - minRandomNumber + 1) + minRandomNumber)
      };
    
     
    
    // function to set CumulativeAmount to Zero
    function resetCumulativeAmount() {
      CumulativeAmount = 0;
      };
    
    // function to generate random number
    function resetRandomNumber() {
      var minRandomNumber = 19;
      var MaxRandomNumber = 120;
      RandomNumber = Math.floor(Math.random() * (MaxRandomNumber - minRandomNumber + 1) + minRandomNumber);
      };
    
      
    
      function resetJaeger() {
        for (var i = 0; i < JaegerNumber.length; i++) {
          JaegerNumber[i] = resetJaegerNumber();
        }
      };
    
    // randomize number and jaeger numbers
    
      resetRandomNumber();
      resetJaeger();
    
      function resetImgCounter() {
        for (q = 0; q < JeagerPhoto.length; q++) {
          var JeagerImages = $(".JaegerImgCSS");
          JeagerImages.attr("data-JaegerValue", JaegerNumber[q]);
        }
      }
    
    function resetJaegerCSS() {
      $(".JaegerImgCSS").each(function(i){
        $(this).attr("data-JaegerValue",JaegerNumber[i]);
    });
    }
    
    
    
    
    // generate images for Jaegers
      for (var j = 0; j < JeagerPhoto.length; j++) {
        // For each iteration, we will create an Jaeger image
        var JeagerImages = $("<img>");
    
        JeagerImages.addClass("JaegerImgCSS");
    
        JeagerImages.attr("src", JeagerPhoto[j]);
    
        JeagerImages.attr("data-JaegerValue", JaegerNumber[j]);
    
        $(".JaegerImg").append(JeagerImages);
      }
    
    
    
    // Display Values Default
    $("#DisplayRandomNumber").html("Random Number: " + RandomNumber);
    $("#DisplayWins").html("Wins: " + Wins);
    $("#DisplayLosses").html("Losses: " + Losses);
    $("#DisplayCumulativeAmount").html("Cumulative Amount: " + CumulativeAmount);
    
    //Set Jaeger Number
    
    // image click logic
    $(".JaegerImgCSS").on("click", function() {
    
    var JaegerValue = ($(this).attr("data-JaegerValue"));
      JaegerValue = parseInt(JaegerValue);
    
      CumulativeAmount += JaegerValue;
      $("#DisplayCumulativeAmount").html("CumulativeAmount: " + CumulativeAmount);
      
      if (CumulativeAmount === RandomNumber) {
        Wins++;
        resetRandomNumber();
        resetCumulativeAmount();
        resetJaeger();
        resetJaegerCSS()
        $("#DisplayRandomNumber").html("Random Number: " + RandomNumber);
        $("#DisplayWins").html("Wins: " + Wins);
        $("#DisplayLosses").html("Losses: " + Losses);
        $("#DisplayCumulativeAmount").html("Cumulative Amount: " + CumulativeAmount);
        alert("you win");
      }
      
      if (CumulativeAmount > RandomNumber) {
        Losses++;
        resetRandomNumber();
        resetCumulativeAmount();
        resetJaeger();
        resetJaegerCSS()
        $("#DisplayRandomNumber").html("Random Number: " + RandomNumber);
        $("#DisplayWins").html("Wins: " + Wins);
        $("#DisplayLosses").html("Losses: " + Losses);
        $("#DisplayCumulativeAmount").html("Cumulative Amount: " + CumulativeAmount);
        alert("you lose");
      }
    });
    
    
    
    });
    