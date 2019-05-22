<<<<<<< HEAD
// Lấy Giá web sau sale, return Float;
function getForever21Price(){ 
	console.log("---PRICE---");	
	var webData = document.head.querySelector('[property="og:description"]');
	var itemPrice=0;
	if (webData!=null){
		var reg=/Price:(\d*,*\d+\.*\d*)/;		
		var itemPriceReg=webData.content.match(reg);
		if (itemPriceReg!=null){
			itemPrice=parseFloat(itemPriceReg[1]);
		}
	}	
	console.log(itemPrice);
	return itemPrice;
}

function setForever21Price(){
	console.log("FOREVER21");
	var itemPrice=getForever21Price();	
	var moonHTML=calculateMoonPrice("FOREVER21",itemPrice,0,"UNKNOWN");	
	
	var priceWriter=document.getElementById('ItemPrice');
	if (priceWriter!=null){
		var divMoonBox = document.getElementById("moon-box");
		if (divMoonBox==null){
			divMoonBox=document.createElement("div");
			divMoonBox.className="moon-box";
			divMoonBox.id="moon-box";
			divMoonBox.innerHTML = moonHTML;
			priceWriter.outerHTML+=divMoonBox.outerHTML;
		}
		else
			divMoonBox.innerHTML=moonHTML;
	}
}

=======
// Lấy Giá web sau sale, return Float;
function getForever21Price(){ 
	console.log("---PRICE---");	
	var webData = document.head.querySelector('[property="og:description"]');
	var itemPrice=0;
	if (webData!=null){
		var reg=/Price:(\d*,*\d+\.*\d*)/;		
		var itemPriceReg=webData.content.match(reg);
		if (itemPriceReg!=null){
			itemPrice=parseFloat(itemPriceReg[1]);
		}
	}	
	console.log(itemPrice);
	return itemPrice;
}

function setForever21Price(){
	console.log("FOREVER21");
	var itemPrice=getForever21Price();	
	var moonHTML=calculateMoonPrice("FOREVER21",itemPrice,0,"UNKNOWN");	
	
	var priceWriter=document.getElementById('ItemPrice');
	if (priceWriter!=null){
		var divMoonBox = document.getElementById("moon-box");
		if (divMoonBox==null){
			divMoonBox=document.createElement("div");
			divMoonBox.className="moon-box";
			divMoonBox.id="moon-box";
			divMoonBox.innerHTML = moonHTML;
			priceWriter.outerHTML+=divMoonBox.outerHTML;
		}
		else
			divMoonBox.innerHTML=moonHTML;
	}
}

>>>>>>> 72805914565998fe94bf5db46033b6b1250fce05
setForever21Price();