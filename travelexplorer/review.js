var xhr;
$(document).ready(function()
{
    $("#header").load("header.html");
    xhr=new XMLHttpRequest();
    xhr.addEventListener("readystatechange",loaddests,false);
    xhr.open("GET","destinations.xml",true);
    xhr.send();

    $("#reviewbtn").on("click",function()
    {
        var review=$("#review").val();
        if(review=="")
        {
            alert("Please Enter Review");            
        }
        else
        {
            alert("Thanks for submitting the review!!");
            window.location="home.html";
        }
    });
});

function loaddests()
{
    var destsdropdown=document.getElementById("destinations");
    if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
    {
        var destinationslist=xhr.responseXML.getElementsByTagName("destination");
        for(let i=0;i<destinationslist.length;i++)
        {
            var dest=destinationslist[i].getElementsByTagName("name")[0].firstChild.nodeValue;
            var opt=document.createElement("option");
            opt.innerHTML=dest;
            opt.value=dest;
            destsdropdown.appendChild(opt);
        }
    }
}