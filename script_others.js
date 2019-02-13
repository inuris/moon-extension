// Lấy Giá web sau sale, return Float;
function getPrice(priceBlock){ 
	console.log("---PRICE---");
	var itemPrice=0;
	if (priceBlock!=null){
		itemPrice=parseFloat(priceBlock.innerText.trim().replace(' ','').replace('$',''));
	}
	console.log(itemPrice);
	return itemPrice;
}

// Set giá VND ra ngoài
function setPrice(web){
	var itemPrice=getPrice(eval(WEBSITES[web].PRICEBLOCK));	
	var moonHTML=calculateMoonPrice(web,itemPrice,0,"UNKNOWN");	
	
	var priceWriter=eval(WEBSITES[web].WRITEBLOCK);
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
function detectWebsite(){
	var currentURL=window.location.href;
	for (WEB in WEBSITES){
		if (currentURL.indexOf(WEBSITES[WEB].URL)>=0){
			console.log(WEB);
			return WEB;	
		}
	}
}
setPrice(detectWebsite());