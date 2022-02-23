var fruits=["Apple","Banana","Grape","Kiwi"];

function printNumbers()
{
    for(var i=0;i<fruits.length;i++)
    {
        console.log(fruits[i]);
    }
}

function printFruits()
{
   var liTags="";
   for(var i=0;i<fruits.length;i++)
   {
    var liTag= "<li>"+fruits[i]+"</li>";
    liTags= liTags+liTag;
   }
   console.log("<ul>"+liTags+"</ul>");
   document.getElementById('furitsDiv').innerHTML="<ul>"+liTags+"</ul>";
}












