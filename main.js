var images=["f.jpg","Dad.jpg","Mom.jpg","Trisha.jpg","Vansh.jpg"];
var names=[ "family book","Dad","Mom","Trisha","Vansh"];
var i=0;
function update()
{
    i++;
var number_of_family_in_array=4;
if(i >number_of_family_in_array)
{
    i=0;
}
var updateimage=images[i];
var updateName=names[i];
document.getElementById("book").src=updateimage;
document.getElementById("b1").innerHTML=updateName;
}