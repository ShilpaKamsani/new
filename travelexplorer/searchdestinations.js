$(document).ready(function()
{
    $("#header").load("header.html");
    $("#searchDestBtn").on("click",function()
    {
        var dest=$("#destination").val();
        if(dest=="")
        {
            alert("Please Enter Destination that you want to search for..");
            return;
        }
        else
        {
            searchdestination(dest);
        }
    });

});

function searchdestination(dest)
{
    $("#destinationDetails").html("");
    $.ajax({
        url:"destinationplaces.json",
        cache:false,
        success(data)
        {
            var dests=$(data.destinations);
            var present=false;
            var result="";
            debugger;
            $(dests).each(function()
            {
                var curdest=this.destination;
                var attractions1=this.attractions1;
                var attractions2=this.attractions2;
                var attractions3=this.attractions3;
                var accomodation1=this.accomodation1;
                var accomodation2=this.accomodation2;
                var accomodation3=this.accomodation3;
                var traveltips1=this.traveltips1;
                var traveltips2=this.traveltips2;
                var traveltips3=this.traveltips3;
                if(curdest.toLowerCase().includes(dest.toLowerCase()))
                {
                        present=true;
                        result+="<b><u>Destination:</u></b><br>";
                        result+=curdest+"<br><br>";
                        result+="<b><u>Attractions:</u></b><br>";
                        result+=attractions1+"<br>";
                        result+=attractions2+"<br>";
                        result+=attractions3+"<br><br>";
                        result+="<b><u>Accomodations:</u></b><br>";
                        result+=accomodation1+"<br>";
                        result+=accomodation2+"<br>";
                        result+=accomodation3+"<br><br>";
                        result+="<b><u>Travel Tips:</u></b><br>";
                        result+=traveltips1+"<br>";
                        result+=traveltips2+"<br>";
                        result+=traveltips3+"<br><br>";
                        result+="-----------------------------------------------------------------------------------------------------------------------";
                        result+="<br><br>";
                }
            });

            $("#destinationDetails").append(result);
            if(present==false)
            {
                $("#destinationDetails").append("Sorry for the inconvenience. We dont have this destination in our list... We will add this soon....");
            }

        },
        error:function(xhr,status,error)
        {
            alert("An error has occured");
        }
    })
}