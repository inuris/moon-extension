<<<<<<< HEAD
// Lấy Giá web sau sale, return Float;
function getRuelalaPrice(){ 
	console.log("---PRICE---");	
	var webData = retrieveWebsiteVariables(["utag_data"]);
	// utag_data là JSON lưu thông tin product có sẵn của web
	var itemPrice=0;
	if (webData.utag_data!=null){
		itemPrice=parseFloat(webData.utag_data.product_unit_price[0]);
	}
	console.log(itemPrice);
	return itemPrice;
}

function setRuelalaPrice(){
	console.log("RUELALA");
	var itemPrice=getRuelalaPrice();	
	var moonHTML=calculateMoonPrice("RUELALA",itemPrice,0,"UNKNOWN");	
	
	var priceWriter=document.getElementById('product_header');
	if (priceWriter!=null){
		var divMoonBox = document.getElementById("moon-box");
		if (divMoonBox==null){
			divMoonBox=document.createElement("div");
			divMoonBox.className="moon-box";
			divMoonBox.id="moon-box";
			divMoonBox.innerHTML = moonHTML;
			priceWriter.appendChild(divMoonBox);
		}
		else
			divMoonBox.innerHTML=moonHTML;
	}
}

=======
// Lấy Giá web sau sale, return Float;
function getRuelalaPrice(){ 
	console.log("---PRICE---");	
	var webData = retrieveWebsiteVariables(["utag_data"]);
	// utag_data là JSON lưu thông tin product có sẵn của web
	var itemPrice=0;
	if (webData.utag_data!=null){
		itemPrice=parseFloat(webData.utag_data.product_unit_price[0]);
	}
	console.log(itemPrice);
	return itemPrice;
}

function setRuelalaPrice(){
	console.log("RUELALA");
	var itemPrice=getRuelalaPrice();	
	var moonHTML=calculateMoonPrice("RUELALA",itemPrice,0,"UNKNOWN");	
	
	var priceWriter=document.getElementById('product_header');
	if (priceWriter!=null){
		var divMoonBox = document.getElementById("moon-box");
		if (divMoonBox==null){
			divMoonBox=document.createElement("div");
			divMoonBox.className="moon-box";
			divMoonBox.id="moon-box";
			divMoonBox.innerHTML = moonHTML;
			priceWriter.appendChild(divMoonBox);
		}
		else
			divMoonBox.innerHTML=moonHTML;
	}
}

>>>>>>> 72805914565998fe94bf5db46033b6b1250fce05
setRuelalaPrice();