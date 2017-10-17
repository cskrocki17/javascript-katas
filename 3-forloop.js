/*1.3-for loops*/

//conditional where flavor = chocolate or vanilla
//prompt for flavor, output "heres your flavor" + flavor
//if strawberry alert "all out of strawberry"
//else alert "no such flavor"
//continue while flavor not equal to "coffee" XX
//then write "no coffee allowed in school"XX
//put a for loop asking for 3 scoops
//after each scoop, alert here is your flavor


for (i = 1; i < 4; i++) {
	var flavor = prompt ("what is your preferred flavor of ice cream?");
	if(flavor == "chocolate" || flavor == "vanilla"){
		alert("Your flavor is "+ flavor);
	}
	else if(flavor == "strawberry"){
		i = i - 1;
		alert("Sorry, we're all out of "+flavor);
	}
	else if(flavor == "coffee"){
		i = i - 1;
		alert("No coffee allowed in school");
	}
	else{
		i = i - 1;
		alert("not a flavor");
	}
}