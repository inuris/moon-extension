
// Danh sách các loại detail block của Amazon
const DETAILBLOCK=[
		["productDetails_detailBullets_sections1","tr"],
		["detailBullets_feature_div","li"],
		["detailBulletsWrapper_feature_div","li"],
		["prodDetails","tr"],
		["detail-bullets","li"],
		["technical-details-table","tr"],
		["tech-specs-desktop","tr"],		
	];

// Kiểm tra thấy tab title đổi text thì rerun script (trường hợp click color/size)
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) { 	
    setAmazonPrice();
});

// Kiểm tra keyword có tồn tại trong array include và không tồn tại trong exclude
// checkkeyword(string,array,array)
function checkKeyword(keyString, include, exclude){
	for (var i=0;i<include.length;i++){			
		if (keyString.indexOf(include[i])>=0){
			for (var j=0;j<exclude.length;j++){
				if (keyString.indexOf(exclude[j])>=0){
					return false;
				}
			}
			return true;
		}
	}
	return false;
}

// Lấy Giá web sau sale, return Float;
function getAmazonPrice(){ 
	console.log("---PRICE---");
	var priceString="";
	var itemPrice=0;
	// Danh sách các block chứa giá
	var itemPriceList = [document.getElementById('priceblock_dealprice'),
						document.getElementById('priceblock_ourprice'), 
						document.getElementById('priceblock_saleprice'), 						
						document.getElementsByClassName('guild_priceblock_ourprice')[0],
						document.getElementsByClassName('offer-price')[0]];
	for (var i =0;i<itemPriceList.length;i++){
		if (itemPriceList[i]!=null){
			console.log(itemPriceList[i].innerText);
			priceString=itemPriceList[i].innerText.trim().replace('$ ','').replace('$','').replace(',','').replace(' ','.'); // $33 99 => 33.99			
			break;
		}
	}
	// Block đặc biệt chứa giá kèm text
	if (priceString==""){
		var itemPriceWidget=document.getElementById('alohaPricingWidget');
		if (itemPriceWidget!=null)
		{
			priceString=itemPriceWidget.getElementsByClassName('a-color-price')[0].innerText.trim().replace('$ ','').replace('$','').replace(' ','.');			
		}
	}
	if (priceString!=""){
		itemPrice=parseFloat(priceString);
	}	
	console.log(itemPrice);
	return itemPrice;
}

// Lấy cân nặng, return String;
function getAmazonWeightString(elementId, elementTagName){
	var weightString=[];
	var itemDetail=document.getElementById(elementId); // Element chứa info cân nặng
	if (itemDetail!=null){
		var itemDetailRow=itemDetail.getElementsByTagName(elementTagName);
		for (var i=itemDetailRow.length-1;i>=0;i--){
			if (itemDetailRow[i]!=null
			&& (itemDetailRow[i].innerText.indexOf('Weight')>=0 || itemDetailRow[i].innerText.indexOf('Dimensions')>=0 )){	// Tìm từ Weight				
				weightString.push(itemDetailRow[i].innerText.trim().toLowerCase());	// Có dạng: 1.1 pounds								
			}
		}
	}
	return weightString;
}

// Lấy cân nặng, return Float;
function getAmazonWeight(){	
	console.log("---WEIGHT---");
	var itemWeight=0;
	var itemWeightKg=0;
	var itemWeightUnit="";
	var weightString=[];
	var reg=/(\d*,*\d+\.*\d*)( ounce| pound| oz)/i;
	
	for (var i=0;i<DETAILBLOCK.length;i++){
		weightString=getAmazonWeightString(DETAILBLOCK[i][0],DETAILBLOCK[i][1]);		
		if (weightString.length>0)
			break;
	}
	if (weightString.length==0)
		return 0;
	else{
		for (var i=0;i<weightString.length;i++){
			var weightReg=weightString[i].match(reg); // ["2.6 pound", "2.6", " pound", index: 16, input: "shipping weight	2.6 pounds"
			if (weightReg!=null)
			{
				var weight=parseFloat(weightReg[1]);
				var weightKg=weight;
				var weightUnit=weightReg[2];
				if (weightUnit.indexOf("ounce")>=0 || weightUnit.indexOf("oz")>=0 )
					weightKg=weight/35.274;
				else if (weightUnit.indexOf("pound")>=0) 
					weightKg=weight/2.2;
				// Tìm weight lớn nhất
				if (itemWeightKg<weightKg || weightString[i].indexOf("shipping weight")>=0)
				{
					itemWeight=weight;
					itemWeightKg=weightKg;
					itemWeightUnit=weightUnit;
				}
			}		
		}
		console.log(itemWeight+itemWeightUnit);
		// Đổi sang Kg
		
		return itemWeightKg;
	}
}

// Lấy category, return String;
function getAmazonCategoryString(elementId, elementTagName){
	var categoryString="";
	var itemDetail=document.getElementById(elementId); // Element chứa info cân nặng
	if (itemDetail!=null){
		var itemDetailRow=itemDetail.getElementsByTagName(elementTagName);
		for (var i=itemDetailRow.length-1;i>=0;i--){
			if (itemDetailRow[i]!=null
			&& (itemDetailRow[i].innerText.indexOf('Sellers Rank')>=0 )){	// Tìm từ Weight
				categoryString+=itemDetailRow[i].innerText.trim().toLowerCase();	// Có dạng: 1.1 pounds								
			}
		}
	}
	return categoryString;
}
// Lấy category
function getAmazonCategory(){
	
	console.log("---CATEGORY---");

	var categoryString="";

	for (var i=0;i<DETAILBLOCK.length;i++){
		categoryString=getAmazonCategoryString(DETAILBLOCK[i][0],DETAILBLOCK[i][1]);		
		if (categoryString!="")
			break;
	}
	
	if (categoryString==""){

		return "UNKNOWN";
	}
		
	categoryString=categoryString.toLowerCase().replace('see top 100','').replace(' in ',' ').replace('amazon best sellers rank:','').replace('best sellers rank:','');
	console.log(categoryString);
	// Query từng KEYWORD trong CATEGORY
	for (CATEGORY in CATEGORIES){
		if (checkKeyword(categoryString,CATEGORIES[CATEGORY].KEYWORD,CATEGORIES[CATEGORY].NOTKEYWORD)==true)
			return CATEGORY;
	}
	return "GENERAL";
}

function setAmazonPrice(update){
	console.clear();
	console.log("1 USD = "+RATE_USD_VND+" VNĐ");
	console.log("AMAZON");
	if (update==true) 
		itemCategory = document.getElementById('moon-select').value;
	else{
		itemPrice=getAmazonPrice();	
		itemWeight=getAmazonWeight();
		itemCategory=getAmazonCategory();
	}	
	console.log(itemCategory);
	var moonHTML=exportMoonPrice(itemCategory, calculateMoonPrice("AMAZON",itemPrice,itemWeight,itemCategory));
	
	// Danh sách các block có thể hiện giá Moon
	var priceWriter=[document.getElementById('unifiedPrice_feature_div'),
					document.getElementById('price'),
					document.getElementById('price-quantity-container'),
					document.getElementById('alohaPricingWidget'),
					document.getElementById('buyBoxInner'),
					document.getElementById('buyNewSection')								
					];
	for (var i =0;i<priceWriter.length;i++){
		if (priceWriter[i]!=null){
			var divMoonBox = document.getElementById("moon-box");
			if (divMoonBox==null){
				divMoonBox=document.createElement("div");
				divMoonBox.className="moon-box";
				divMoonBox.id="moon-box";
				divMoonBox.innerHTML = moonHTML;
				priceWriter[i].appendChild(divMoonBox);
			}
			else
				divMoonBox.innerHTML=moonHTML;
			break;
		}
	}
}
var itemPrice;
var itemWeight;
var itemCategory;

setAmazonPrice();
