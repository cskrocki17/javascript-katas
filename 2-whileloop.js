/*1.2-while loop*/

//conditional where flavor = chocolate or vanilla
//prompt for flavor, output "heres your flavor" + flavor
//if strawberry alert "all out of strawberry"
//else alert "no such flavor"
//continue while flavor not equal to "coffee"
//then write "no coffee allowed in school"

do{
	var flavor = prompt ("what is your preferred flavor of ice cream?");
	if(flavor == "chocolate" || flavor == "vanilla"){
		alert("Your flavor is "+ flavor);
	}
	else if(flavor == "strawberry"){
		alert("Sorry, we're all out of "+flavor);
	}
	else if(flavor == "coffee"){
		alert("No coffee allowed in school");
	}
	else{
		alert("not a flavor");
	}
}
while(flavor != "coffee");
