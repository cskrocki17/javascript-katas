/*1.1-conditionals w/ prompt*/

//conditional where flavor = chocolate or vanilla
//prompt for flavor, output "heres your flavor" + flavor
//if strawberry alert "all out of strawberry"
//else alert "no such flavor"
var flavor = prompt ("Do you want chocolate, vanilla or strawberry ice cream?");
if(flavor == "chocolate" || flavor == "vanilla"){
	alert("Your flavor is "+ flavor);
}
else if(flavor == "strawberry"){
	alert("Sorry, we're all out of "+flavor);
}
else{
	alert("not a flavor");
}