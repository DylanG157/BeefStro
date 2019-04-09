// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

btn2.onclick = function() {
  modal2.style.display = "block";
};
btn3.onclick = function() {
		if (isNaN(drinks.picked) === true && isNaN(steaks.picked) === true){
			return;
		}else if (drinks.picked > 0 && isNaN(steaks.picked) === true) {  
			modal3.style.display = "block";
		}else if (steaks.picked > 0 && isNaN(drinks.picked) === true){
			modal3.style.display = "block";
		} else {
			modal3.style.display = "block";
		}
};

//  close the modal
span.onclick = function() {
  modal.style.display = "none";
};

span2.onclick = function() {
  modal2.style.display = "none";
};

span3.onclick = function() {
  modal3.style.display = "none";
};
span4.onclick = function() {
  modal4.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

//Drinks
var drinks = {
	coke: 15,
	sprit: 14,
	fanta: 14,
	beer : 30,
	wine: 27
} 

// steaks
var steaks = {
	"rumpsteak": 70,
	"filletsteak" : 100,
	"tbonesteak" : 80,
	"sirloin": 120,
	"ribeye": 200
}
// the tip
var extra ={

}

// To let the user select drinks 
function favDrink(){
	var drinkTotal = 0;
	var drinkChoice = document.getElementById('drinks').value;
	if (drinkChoice === "coke"){
		console.log("Your drink Choice is " + drinkChoice + " and it will cost R" + drinks.coke);
		var drinkTotal = drinkTotal + drinks.coke;
		modal.style.display = "none";
		document.getElementById('order1').innerHTML="- " + drinkChoice+ ": R" + drinks.coke;
		drinks["picked"] = drinkTotal;
	}else if (drinkChoice === "sprit") {
		console.log("Your drink Choice is " + drinkChoice + " and it will cost R" + drinks.sprit);
		var drinkTotal = drinkTotal + drinks.sprit;
		modal.style.display = "none";
		document.getElementById('order1').innerHTML= "- " + drinkChoice+ ": R" + drinks.sprit;
		drinks["picked"] = drinkTotal;
	}else if (drinkChoice === "fanta"){
		console.log("Your drink Choice is " + drinkChoice + " and it will cost R" + drinks.fanta);
		var drinkTotal = drinkTotal + drinks.fanta;
		modal.style.display = "none";
		document.getElementById('order1').innerHTML= "- " +drinkChoice+ ": R" + drinks.fanta;
		drinks["picked"] = drinkTotal;
	}else if (drinkChoice === "beer"){
		console.log("Your drink Choice is " + drinkChoice + " and it will cost R" + drinks.beer);
		var drinkTotal = drinkTotal + drinks.beer;
		modal.style.display = "none";
		document.getElementById('order1').innerHTML= "- " + drinkChoice+ ": R" + drinks.beer;
		drinks["picked"] = drinkTotal;
	}else if (drinkChoice === "wine"){
		console.log("Your drink Choice is " + drinkChoice + " and it will cost R" + drinks.wine);
		var drinkTotal = drinkTotal + drinks.wine;
		modal.style.display = "none";
		document.getElementById('order1').innerHTML= "- " + drinkChoice+ ": R" + drinks.wine;
		drinks["picked"] = drinkTotal;
	}
}


// To let the user select steaks
function favSteak(){
	var steakTotal = 0;
	var steakChoice = document.getElementById('steaks').value;
	var total = 0;

	if (steakChoice === "rumpsteak"){
		console.log("Your drink steak choice is " + steakChoice + " and it will cost R" + steaks.rumpsteak);
		var steakTotal = steakTotal + steaks.rumpsteak;
		modal2.style.display = "none";
		document.getElementById('order2').innerHTML= "- " + steakChoice+ ": R" + steaks.rumpsteak;
		steaks["picked"] = steakTotal;
	}else if (steakChoice === "filletsteak"){
		console.log("Your drink steak choice is " + steakChoice + " and it will cost R" + steaks.filletsteak);
		var steakTotal = steakTotal + steaks.filletsteak;
		modal2.style.display = "none";
		document.getElementById('order2').innerHTML= "- " + steakChoice+ ": R" + steaks.filletsteak;
		steaks["picked"] = steakTotal;
	}else if (steakChoice === "tbonesteak"){
		console.log("Your drink steak choice is " + steakChoice + " and it will cost R" + steaks.tbonesteak);
		var steakTotal = steakTotal + steaks.tbonesteak;
		modal2.style.display = "none";
		document.getElementById('order2').innerHTML= "- " + steakChoice+ ": R" + steaks.tbonesteak;
		steaks["picked"] = steakTotal;
	}else if (steakChoice === "sirloin"){
		console.log("Your drink steak choice is " + steakChoice + " and it will cost R" + steaks.sirloin);
		var steakTotal = steakTotal + steaks.sirloin;
		modal2.style.display = "none";
		document.getElementById('order2').innerHTML= "- " + steakChoice+ ": R" + steaks.sirloin;
		steaks["picked"] = steakTotal;
	}else if (steakChoice === "ribeye"){
		console.log("Your drink steak choice is " + steakChoice + " and it will cost R" + steaks.ribeye);
		var steakTotal = steakTotal + steaks.ribeye;
		modal2.style.display = "none";
		document.getElementById('order2').innerHTML= "- " + steakChoice+ ": R" + steaks.ribeye;
		steaks["picked"] = steakTotal;
	}
}

//Total Calculator ( checkout )

function addTip(){
	var tipAmount = document.getElementById('tipValue').value;
	extra["tip"] = parseInt(tipAmount);
	modal3.style.display = "none";
	document.getElementById('tip1').innerHTML= "Your tip: " + extra["tip"]; 
}

function totalCal(){
	var total1 = parseInt(drinks.picked);
	var total2 = parseInt(steaks.picked);
	var tip = parseInt(extra.tip)
	var total = total1 + total2 + tip;
	var total1tip = total1 + tip;
	var total2tip = total2 + tip;
	var total3 = total1 + total2;
	
	if (isNaN(total1) === true && isNaN(total2) === true && isNaN(tip) === true ) {
		return;
	}else if (tip > 0 && isNaN(total1) === true && isNaN(total2) === true) {
		return;
	}else if (total1 > 0 && isNaN(total2) === true && tip > 0) { 
		modal4.style.display = "block";
		document.getElementById('finalAmmount').innerHTML = total1tip
		document.getElementById('total').innerHTML ="Your total is: R" +total1tip;
		document.getElementById('myBtn3').style.display = "none";
	}else if (total1 > 0 && isNaN(total2) === true && isNaN(tip) === true) { 
		modal4.style.display = "block";
		document.getElementById('finalAmmount').innerHTML = total1
		document.getElementById('total').innerHTML ="Your total is: R" + total1;
		document.getElementById('myBtn3').style.display = "none";
	}else if (total2 > 0 && isNaN(total1) === true && tip > 0) {
		modal4.style.display = "block";
		document.getElementById('finalAmmount').innerHTML = total2tip
		document.getElementById('total').innerHTML ="Your total is: R" + total2tip;
		document.getElementById('myBtn3').style.display = "none";
	} else if (total2 > 0 && isNaN(total1) === true && isNaN(tip) === true) { 
		modal4.style.display = "block";
		document.getElementById('finalAmmount').innerHTML = total2
		document.getElementById('total').innerHTML ="Your total is: R" + total2;
		document.getElementById('myBtn3').style.display = "none";
	}else if(total1 > 0 && total2 > 0 && isNaN(tip) ===true ){
		modal4.style.display = "block";
		document.getElementById('finalAmmount').innerHTML = total3;
		document.getElementById('total').innerHTML ="Your total is: R" + total3;
		document.getElementById('myBtn3').style.display = "none";
	}else {   //Else just display the full total
		modal4.style.display = "block";
		document.getElementById('finalAmmount').innerHTML = total
		document.getElementById('total').innerHTML ="Your total is: R" + total;
		document.getElementById('myBtn3').style.display = "none";
	}
}

//to close the tip window
function closeWindow(){
	modal4.style.display = "none";
}



 