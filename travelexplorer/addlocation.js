$(document).ready(function()
{
    $("#header").load("header.html");

$("#adddestination").click(function()
{
var dest=$("#destination").val();
var price=$("#price").val();
var desc=$("#description").val();
var months=$("#months").val();
var image=$("#image").val();
if(dest=="")
{
    alert("Please enter Destination");
}
else if(price=="")
{
alert("Please enter Price");
}
else if(price<=0)
{
    alert("Please enter valid price");
}
else if(desc=="")
{
    alert("Please enter Description");
}
else if(months=="")
{
    alert("Please enter Popular Months value");
}
else if(image=="")
{
    alert("Please upload image");
}
else
{
alert("This destination is added successfully!!");
window.location="home.html";
}
});
});