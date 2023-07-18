let rate;

$(document).ready(function() {
    $(".thank-you").hide();
    $(".circle-button").click(function() {
      rate = $(this).attr("value");
      $(".circle-button").css("background-color", "hsla(216, 12%, 54%, 0.3)");
      $(this).css("background-color", "hsl(25, 97%, 53%)");
    });


    $("form").submit(function(){
        $(".card-body .response").html("<p>You selected "+ rate +" out of 5</p>");
        $(".card-body .response p").css("color","hsl(25, 97%, 53%)");
        $("div.response").addClass("response-style");
        $("form").hide(1,()=>{
            $(".thank-you").show();
        });
    });



  });