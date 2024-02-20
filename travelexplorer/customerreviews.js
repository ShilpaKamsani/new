$(document).ready(function()
{
    $("#header").load("header.html");

    let result="";
    //load all the feedbacks for all destinations and show them
  $.ajax({
    url:"feedbacks.json",
    cache:false,
    success: function(feedbacksjson)
    {
        var feedbacks=$(feedbacksjson.feedbacks);
        $(feedbacks).each(function()
        {
            let dest=this.destination;
            let review1=this.review1;
            let review2=this.review2;
            let review3=this.review3;        
            result+="<b><u>"+dest+" : </u></b><br>";
            result+=review1+"<br>";
            result+=review2+"<br>";
            result+=review3+"<br><br><br>";
        });
        $("#customerreviews").html(result);
    },
    error:function(xhr,status,error)
    {
        alert("An error has occured");
    }
  })


});

