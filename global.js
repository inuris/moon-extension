<<<<<<< HEAD
const RATE_USD_VND=24066;
const FACEBOOK_APPID="878760088950034";
const FACEBOOK_PAGEID="573537602700846";
const FACEBOOK_LINK="https://www.facebook.com/moonhangmy";
const CATEGORIES = {
	"GLASSES":{             SHIP:0, EXTRA:5, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Kính mát", NOTE: "Giá đã bao gồm Phụ thu $5/cái",
		KEYWORD:["sunglasses","eyewear accessories"], 
		NOTKEYWORD:[]},
	"BELT":{                SHIP:11, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Dây nịt", NOTE: "Giá đã bao gồm Phí ship $11/kg",
		KEYWORD:["belt"], 
		NOTKEYWORD:[]},
	"WATCH":{               SHIP:0, EXTRA:15, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Đồng hồ", NOTE: "Giá đã bao gồm Phụ thu $15/cái",
		KEYWORD:["watches"], 
		NOTKEYWORD:[]},
	"JEWELRY":{             SHIP:0, EXTRA:5, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Trang sức", NOTE: "Giá đã bao gồm Phụ thu $5/cái",
		KEYWORD:["> jewelry"], 
		NOTKEYWORD:["> shoes","cleaning", "care"]},
	"BIKE":{                SHIP:12, EXTRA:40, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Xe đạp", NOTE: "Giá đã bao gồm Phí ship $12/kg + Phụ thu $40/chiếc",
		KEYWORD:["bike","walker","rollator","cycling"], 
		NOTKEYWORD:["accessories"]},
	"KITCHENAPPLIANCE":{    SHIP:12, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Dụng cụ nhà bếp", NOTE: "Giá đã bao gồm Phí ship $12/kg",
		KEYWORD:["coffee machine","blender","brewer","appliance"], 
		NOTKEYWORD:["> paper & plastic"]},
	"DVD":{    				SHIP:10, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0, HQANCHOR:500, 
		NAME:"Đĩa nhạc, game", NOTE: "Giá đã bao gồm Phí ship $10/kg",
		KEYWORD:["video games", " > games", "blu-ray >", "dvd >"], 
		NOTKEYWORD:["accessories", "controllers", " > consoles" ,"cards"]},
	"CHEMICAL_VITAMIN":{    SHIP:11, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0, HQANCHOR:500, 
		NAME:"Thuốc - Vitamin", NOTE: "Giá đã bao gồm Phí ship $11/kg",
		KEYWORD:["beauty & grooming","oil", "vitamin", "supplement","personal care", "liquid","health supplies"], 
		NOTKEYWORD:["> professional dental supplies", "> toothbrushes"]},
	"PHONE_TABLET_LAPTOP":{ SHIP:12, EXTRA:40, PRICEEXTRA:70, PRICEANCHOR:25, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Điện thoại - Laptop", NOTE: "Giá đã bao gồm Phí ship $12/kg + Phụ thu $40/cái",
		KEYWORD:["amazon devices", " > unlocked cell phones "," > 2 in 1 laptops", " > traditional laptops"], 
		NOTKEYWORD:[""]}, 
	"CONSOLE":{             SHIP:13, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:0, 
		NAME:"Máy chơi game", NOTE: "Giá đã bao gồm Phí ship $13/kg",
		KEYWORD:[" > consoles"], 
		NOTKEYWORD:[]},
	"CAMERA":{         		SHIP:0, EXTRA:35, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Camera", NOTE: "Giá đãaccessories bao gồm Phụ thu $35/chiếc",
		KEYWORD:["camera & photo > video >","camera & photo > dslr cameras"], 
		NOTKEYWORD:["accessories"]},
	"GOLF":{        		SHIP:12, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Golf", NOTE: "Giá đã bao gồm Phí ship $12/kg",
		KEYWORD:["golf club"," > racquets"], 
		NOTKEYWORD:[]},
	"DIGITAL":{             SHIP:13, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.05, HQANCHOR:500, 
		NAME:"Hàng điện tử", NOTE: "Giá đã bao gồm Phí ship $13/kg",
		KEYWORD:["electronics","machines","television","computer","laptop","monitor","device","headphones"], 
		NOTKEYWORD:["kids", "learning","education","audio & video accessories", "screen protectors", "cases", "bags", "camera & photo accessories","accessory kits","cables","holder","stands","cradles","mounts","repair kits","sticks","tripods","styluses"]},
	"AUTOMOTIVE":{           SHIP:11, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.05, HQANCHOR:500, 
		NAME:"Phụ kiện xe hơi", NOTE: "Giá đã bao gồm Phí ship $11/kg",
		KEYWORD:["automotive"], 
		NOTKEYWORD:[]},
	"MILK":{             	SHIP:7.5, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Sữa", NOTE: "Giá đã bao gồm Phí ship $7.5/kg",
		KEYWORD:["bottled beverages, water & drink mixes"], 
		NOTKEYWORD:[]},
	"CLOTHES":{             SHIP:8.5, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Quần áo, giày dép", NOTE: "Giá đã bao gồm Phí ship $8.5/kg",
		KEYWORD:["clothing, shoes & jewelry >"], 
		NOTKEYWORD:[]},
	"GENERAL":{             SHIP:8.5, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Mặt hàng thông thường", NOTE: "Giá đã bao gồm Phí ship $8.5/kg",
		KEYWORD:[], 
		NOTKEYWORD:[]},
	"UNKNOWN":{             SHIP:0, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Không xác định *", NOTE: "* Phí ship tính theo cân nặng, sẽ được thông báo sau khi hàng về.",
		KEYWORD:[], 
		NOTKEYWORD:[]}
	};
const WEBSITES = {
	"ALDO":{			TAX: 0.083, URL:"www.aldoshoes.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"AMAZON":{			TAX: 0.083, URL:"www.amazon.com", 			
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"BATHBODYWORKS":{	TAX: 0.083, URL:"www.bathandbodyworks.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"BHCOSMETICS":{		TAX: 0, 	URL:"www.bhcosmetics.com", 		
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"CARTERS":{			TAX: 0.083, URL:"www.carters.com", 			
		PRICEBLOCK: 'document.getElementsByClassName("product-price-container desktopvisible")[0].getElementsByClassName("price-sales-usd")[0]', 
		WRITEBLOCK: 'document.getElementsByClassName("product-price-container desktopvisible")[0]'},
	"CLINIQUE":{		TAX: 0.083, URL:"www.clinique.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"FOREVER21":{		TAX: 0.083, URL:"www.forever21.com", 
		PRICEBLOCK: 'document.getElementById("ItemPrice")', 
		WRITEBLOCK: 'document.getElementById("ItemPrice")'},
	"FRAGRANCENET":{	TAX: 0, 	URL:"www.fragrancenet.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"GAP":{				TAX: 0.083, URL:"www.gap.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"H&M":{				TAX: 0.083, URL:"www.hm.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"JOMASHOP":{		TAX: 0, 	URL:"www.jomashop.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"LOFT":{			TAX: 0.083, URL:"www.loft.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"NINEWEST":{		TAX: 0.083, URL:"www.ninewest.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"OLDNAVY":{			TAX: 0.083, URL:"www.oldnavy.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"OSHKOSH":{			TAX: 0.083, URL:"www.oshkosh.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"RALPHLAUREN":{		TAX: 0.083, URL:"www.ralphlauren.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"RUELALA":{			TAX: 0, 	URL:"www.reulala.com", 			
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"THEBODYSHOP":{		TAX: 0.083, URL:"www.thebodyshop.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"TOYSRUS":{			TAX: 0.083, URL:"www.toysrus.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"BABIESRUS":{		TAX: 0.083, URL:"babiesrus.toysrus.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"VICTORIASSECRET":{	TAX: 0.083, URL:"www.victoriassecret.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"WALGREENS":{		TAX: 0.083, URL:"www.walgreens.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"VITACOST":{		TAX: 0, 	URL:"www.vitacost.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"ZULILY    ":{		TAX: 0, 	URL:"www.zulily.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
};

// Chuyển đổi dạng Number ra Currency: 1200000 => 1,200,000
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
	c = isNaN(c = Math.abs(c)) ? 2 : c, 
	d = d == undefined ? "." : d, 
	t = t == undefined ? "," : t, 
	s = n < 0 ? "-" : "", 
	i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
	j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
 
// Đổi USD sang VND, làm tròn 5000
function toVND(price){ 
	var priceNew=Math.ceil(price*RATE_USD_VND/5000)*5000; //Làm tròn lên 10000
	// Giảm 10000 còn 9000 cho rẻ
	// if (priceNew%10000==0)
	// 	priceNew-=1000;
	return priceNew;
}
// Lấy variable có sẵn trên website
function retrieveWebsiteVariables(variables) {
	var ret = {};

	var scriptContent = "";
	for (var i = 0; i < variables.length; i++) {
		var currVariable = variables[i];
		scriptContent += "if (typeof " + currVariable + " !== 'undefined') document.body.setAttribute('tmp_" + currVariable + "', JSON.stringify(" + currVariable + "));\n"
	}

	var script = document.createElement('script');
	script.id = 'tmpScript';
	script.appendChild(document.createTextNode(scriptContent));
	(document.body || document.head || document.documentElement).appendChild(script);

	for (var i = 0; i < variables.length; i++) {
		var currVariable = variables[i];
		ret[currVariable] = JSON.parse(document.body.getAttribute("tmp_" + currVariable));
		document.body.removeAttribute("tmp_" + currVariable);
	}

	document.getElementById("tmpScript").remove();

	return ret;
}

// Xuất CATEGORY ra html <select>
function generateCategorySelect(category){
	var categoryHTML='<select class="moon-select" id="moon-select" onchange="setAmazonPrice(true)">';
	for (CATEGORY in CATEGORIES){
		categoryHTML+='<option value="'+CATEGORY+'" '+(CATEGORY==category?'selected':'')+'>'+CATEGORIES[CATEGORY].NAME+'</option>';
	}
	categoryHTML+='</select>';
	return categoryHTML;
}

// Tính giá USD tổng dựa trên [tên website, giá web, cân nặng, danh mục], return int
function calculateMoonPrice(website, price, weight, category){
	console.log("---CALCULATE---");
	var itemPrice=price; 
	var itemTax=itemPrice*WEBSITES[website].TAX; // Thuế tại Mỹ
	var itemPriceAfterTax=itemPrice+itemTax; // Giá Sau Thuế
	console.log("tax: "+itemTax+" ("+WEBSITES[website].TAX*100+"%)");
	

	var itemMoon=itemPriceAfterTax*(itemPriceAfterTax<300?0.07:0.05); // Công mua tính theo Giá Sau Thuế
	console.log("moon: "+itemMoon);

	var itemWeight=Math.ceil(weight*10)/10;
	var itemShip=itemWeight*CATEGORIES[category].SHIP; // Giá ship theo cân nặng
	console.log("ship: $"+CATEGORIES[category].SHIP+"/kg x "+itemWeight+"kg");

	var itemPriceExtra=CATEGORIES[category].EXTRA+(itemPrice>=CATEGORIES[category].PRICEANCHOR?CATEGORIES[category].PRICEEXTRA:0); /// Phụ thu theo cái
	console.log("extra: "+CATEGORIES[category].EXTRA);

	var itemHQEXTRA=itemPrice*(itemPrice>=CATEGORIES[category].HQANCHOR?CATEGORIES[category].HQEXTRA:0) // Phụ thu giá trị cao (HQANCHOR)
	console.log("high price extra: "+itemHQEXTRA);

	var itemTotal=itemPrice>0?itemPriceAfterTax+itemMoon+itemShip+itemPriceExtra+itemHQEXTRA:0;
	console.log("total: "+itemTotal);	
	return itemTotal;
}

// Xuất ra HTML giá cuối và danh mục
function exportMoonPrice(category, total) {
	var itemHTML='<div><div><span class="moon-label">Giá của Moon: </span><span class="moon-price">'
					+(total>0
						?'~ '+ toVND(total).formatMoney(0, '.', ',')
							+' VNĐ</span>&nbsp;&nbsp;&nbsp;'
							+'<a class="moon-link" href="'+FACEBOOK_LINK+'">Liên hệ &gt;</a>'	
							+'</div><div style="margin-top:8px">'
							+ (itemWeight==0 && CATEGORIES[category].SHIP!==0
								?'<span class="moon-sub">Phí ship tính theo cân nặng, sẽ được thông báo sau khi hàng về.</span>'
								:'<span>Loại mặt hàng:  </span>' + generateCategorySelect(category)
									+ '<br><span class="moon-sub">'+CATEGORIES[category].NOTE+'</span>'							
								)
						:'<a class="moon-link" href="'+FACEBOOK_LINK+'">Liên hệ &gt;</a>')
					+'</div></div>';
	return itemHTML;

=======
const RATE_USD_VND=24066;
const FACEBOOK_APPID="878760088950034";
const FACEBOOK_PAGEID="573537602700846";
const FACEBOOK_LINK="https://www.facebook.com/moonhangmy";
const CATEGORIES = {
	"GLASSES":{             SHIP:0, EXTRA:5, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Kính mát", NOTE: "Giá đã bao gồm Phụ thu $5/cái",
		KEYWORD:["sunglasses","eyewear accessories"], 
		NOTKEYWORD:[]},
	"BELT":{                SHIP:11, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Dây nịt", NOTE: "Giá đã bao gồm Phí ship $11/kg",
		KEYWORD:["belt"], 
		NOTKEYWORD:[]},
	"WATCH":{               SHIP:0, EXTRA:15, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Đồng hồ", NOTE: "Giá đã bao gồm Phụ thu $15/cái",
		KEYWORD:["watches"], 
		NOTKEYWORD:[]},
	"JEWELRY":{             SHIP:0, EXTRA:5, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Trang sức", NOTE: "Giá đã bao gồm Phụ thu $5/cái",
		KEYWORD:["> jewelry"], 
		NOTKEYWORD:["> shoes","cleaning", "care"]},
	"BIKE":{                SHIP:12, EXTRA:40, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Xe đạp", NOTE: "Giá đã bao gồm Phí ship $12/kg + Phụ thu $40/chiếc",
		KEYWORD:["bike","walker","rollator","cycling"], 
		NOTKEYWORD:["accessories"]},
	"KITCHENAPPLIANCE":{    SHIP:12, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Dụng cụ nhà bếp", NOTE: "Giá đã bao gồm Phí ship $12/kg",
		KEYWORD:["coffee machine","blender","brewer","appliance"], 
		NOTKEYWORD:["> paper & plastic"]},
	"DVD":{    				SHIP:10, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0, HQANCHOR:500, 
		NAME:"Đĩa nhạc, game", NOTE: "Giá đã bao gồm Phí ship $10/kg",
		KEYWORD:["video games", " > games", "blu-ray >", "dvd >"], 
		NOTKEYWORD:["accessories", "controllers", " > consoles" ,"cards"]},
	"CHEMICAL_VITAMIN":{    SHIP:11, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0, HQANCHOR:500, 
		NAME:"Thuốc - Vitamin", NOTE: "Giá đã bao gồm Phí ship $11/kg",
		KEYWORD:["beauty & grooming","oil", "vitamin", "supplement","personal care", "liquid","health supplies"], 
		NOTKEYWORD:["> professional dental supplies", "> toothbrushes"]},
	"PHONE_TABLET_LAPTOP":{ SHIP:12, EXTRA:40, PRICEEXTRA:70, PRICEANCHOR:25, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Điện thoại - Laptop", NOTE: "Giá đã bao gồm Phí ship $12/kg + Phụ thu $40/cái",
		KEYWORD:["amazon devices", " > unlocked cell phones "," > 2 in 1 laptops", " > traditional laptops"], 
		NOTKEYWORD:[""]}, 
	"CONSOLE":{             SHIP:13, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:0, 
		NAME:"Máy chơi game", NOTE: "Giá đã bao gồm Phí ship $13/kg",
		KEYWORD:[" > consoles"], 
		NOTKEYWORD:[]},
	"CAMERA":{         		SHIP:0, EXTRA:35, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Camera", NOTE: "Giá đãaccessories bao gồm Phụ thu $35/chiếc",
		KEYWORD:["camera & photo > video >","camera & photo > dslr cameras"], 
		NOTKEYWORD:["accessories"]},
	"GOLF":{        		SHIP:12, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Golf", NOTE: "Giá đã bao gồm Phí ship $12/kg",
		KEYWORD:["golf club"," > racquets"], 
		NOTKEYWORD:[]},
	"DIGITAL":{             SHIP:13, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.05, HQANCHOR:500, 
		NAME:"Hàng điện tử", NOTE: "Giá đã bao gồm Phí ship $13/kg",
		KEYWORD:["electronics","machines","television","computer","laptop","monitor","device","headphones"], 
		NOTKEYWORD:["kids", "learning","education","audio & video accessories", "screen protectors", "cases", "bags", "camera & photo accessories","accessory kits","cables","holder","stands","cradles","mounts","repair kits","sticks","tripods","styluses"]},
	"AUTOMOTIVE":{           SHIP:11, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.05, HQANCHOR:500, 
		NAME:"Phụ kiện xe hơi", NOTE: "Giá đã bao gồm Phí ship $11/kg",
		KEYWORD:["automotive"], 
		NOTKEYWORD:[]},
	"MILK":{             	SHIP:7.5, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Sữa", NOTE: "Giá đã bao gồm Phí ship $7.5/kg",
		KEYWORD:["bottled beverages, water & drink mixes"], 
		NOTKEYWORD:[]},
	"CLOTHES":{             SHIP:8.5, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Quần áo, giày dép", NOTE: "Giá đã bao gồm Phí ship $8.5/kg",
		KEYWORD:["clothing, shoes & jewelry >"], 
		NOTKEYWORD:[]},
	"GENERAL":{             SHIP:8.5, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Mặt hàng thông thường", NOTE: "Giá đã bao gồm Phí ship $8.5/kg",
		KEYWORD:[], 
		NOTKEYWORD:[]},
	"UNKNOWN":{             SHIP:0, EXTRA:0, PRICEEXTRA:0, PRICEANCHOR:0, HQEXTRA:0.1, HQANCHOR:500, 
		NAME:"Không xác định *", NOTE: "* Phí ship tính theo cân nặng, sẽ được thông báo sau khi hàng về.",
		KEYWORD:[], 
		NOTKEYWORD:[]}
	};
const WEBSITES = {
	"ALDO":{			TAX: 0.083, URL:"www.aldoshoes.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"AMAZON":{			TAX: 0.083, URL:"www.amazon.com", 			
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"BATHBODYWORKS":{	TAX: 0.083, URL:"www.bathandbodyworks.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"BHCOSMETICS":{		TAX: 0, 	URL:"www.bhcosmetics.com", 		
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"CARTERS":{			TAX: 0.083, URL:"www.carters.com", 			
		PRICEBLOCK: 'document.getElementsByClassName("product-price-container desktopvisible")[0].getElementsByClassName("price-sales-usd")[0]', 
		WRITEBLOCK: 'document.getElementsByClassName("product-price-container desktopvisible")[0]'},
	"CLINIQUE":{		TAX: 0.083, URL:"www.clinique.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"FOREVER21":{		TAX: 0.083, URL:"www.forever21.com", 
		PRICEBLOCK: 'document.getElementById("ItemPrice")', 
		WRITEBLOCK: 'document.getElementById("ItemPrice")'},
	"FRAGRANCENET":{	TAX: 0, 	URL:"www.fragrancenet.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"GAP":{				TAX: 0.083, URL:"www.gap.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"H&M":{				TAX: 0.083, URL:"www.hm.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"JOMASHOP":{		TAX: 0, 	URL:"www.jomashop.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"LOFT":{			TAX: 0.083, URL:"www.loft.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"NINEWEST":{		TAX: 0.083, URL:"www.ninewest.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"OLDNAVY":{			TAX: 0.083, URL:"www.oldnavy.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"OSHKOSH":{			TAX: 0.083, URL:"www.oshkosh.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"RALPHLAUREN":{		TAX: 0.083, URL:"www.ralphlauren.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"RUELALA":{			TAX: 0, 	URL:"www.reulala.com", 			
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"THEBODYSHOP":{		TAX: 0.083, URL:"www.thebodyshop.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"TOYSRUS":{			TAX: 0.083, URL:"www.toysrus.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"BABIESRUS":{		TAX: 0.083, URL:"babiesrus.toysrus.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"VICTORIASSECRET":{	TAX: 0.083, URL:"www.victoriassecret.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"WALGREENS":{		TAX: 0.083, URL:"www.walgreens.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"VITACOST":{		TAX: 0, 	URL:"www.vitacost.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
	"ZULILY    ":{		TAX: 0, 	URL:"www.zulily.com", 
		PRICEBLOCK: '', 
		WRITEBLOCK: ''},
};

// Chuyển đổi dạng Number ra Currency: 1200000 => 1,200,000
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
	c = isNaN(c = Math.abs(c)) ? 2 : c, 
	d = d == undefined ? "." : d, 
	t = t == undefined ? "," : t, 
	s = n < 0 ? "-" : "", 
	i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
	j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
 
// Đổi USD sang VND, làm tròn 5000
function toVND(price){ 
	var priceNew=Math.ceil(price*RATE_USD_VND/5000)*5000; //Làm tròn lên 10000
	// Giảm 10000 còn 9000 cho rẻ
	// if (priceNew%10000==0)
	// 	priceNew-=1000;
	return priceNew;
}
// Lấy variable có sẵn trên website
function retrieveWebsiteVariables(variables) {
	var ret = {};

	var scriptContent = "";
	for (var i = 0; i < variables.length; i++) {
		var currVariable = variables[i];
		scriptContent += "if (typeof " + currVariable + " !== 'undefined') document.body.setAttribute('tmp_" + currVariable + "', JSON.stringify(" + currVariable + "));\n"
	}

	var script = document.createElement('script');
	script.id = 'tmpScript';
	script.appendChild(document.createTextNode(scriptContent));
	(document.body || document.head || document.documentElement).appendChild(script);

	for (var i = 0; i < variables.length; i++) {
		var currVariable = variables[i];
		ret[currVariable] = JSON.parse(document.body.getAttribute("tmp_" + currVariable));
		document.body.removeAttribute("tmp_" + currVariable);
	}

	document.getElementById("tmpScript").remove();

	return ret;
}

// Xuất CATEGORY ra html <select>
function generateCategorySelect(category){
	var categoryHTML='<select class="moon-select" id="moon-select" onchange="setAmazonPrice(true)">';
	for (CATEGORY in CATEGORIES){
		categoryHTML+='<option value="'+CATEGORY+'" '+(CATEGORY==category?'selected':'')+'>'+CATEGORIES[CATEGORY].NAME+'</option>';
	}
	categoryHTML+='</select>';
	return categoryHTML;
}

// Tính giá USD tổng dựa trên [tên website, giá web, cân nặng, danh mục], return int
function calculateMoonPrice(website, price, weight, category){
	console.log("---CALCULATE---");
	var itemPrice=price; 
	var itemTax=itemPrice*WEBSITES[website].TAX; // Thuế tại Mỹ
	var itemPriceAfterTax=itemPrice+itemTax; // Giá Sau Thuế
	console.log("tax: "+itemTax+" ("+WEBSITES[website].TAX*100+"%)");
	

	var itemMoon=itemPriceAfterTax*(itemPriceAfterTax<300?0.07:0.05); // Công mua tính theo Giá Sau Thuế
	console.log("moon: "+itemMoon);

	var itemWeight=Math.ceil(weight*10)/10;
	var itemShip=itemWeight*CATEGORIES[category].SHIP; // Giá ship theo cân nặng
	console.log("ship: $"+CATEGORIES[category].SHIP+"/kg x "+itemWeight+"kg");

	var itemPriceExtra=CATEGORIES[category].EXTRA+(itemPrice>=CATEGORIES[category].PRICEANCHOR?CATEGORIES[category].PRICEEXTRA:0); /// Phụ thu theo cái
	console.log("extra: "+CATEGORIES[category].EXTRA);

	var itemHQEXTRA=itemPrice*(itemPrice>=CATEGORIES[category].HQANCHOR?CATEGORIES[category].HQEXTRA:0) // Phụ thu giá trị cao (HQANCHOR)
	console.log("high price extra: "+itemHQEXTRA);

	var itemTotal=itemPrice>0?itemPriceAfterTax+itemMoon+itemShip+itemPriceExtra+itemHQEXTRA:0;
	console.log("total: "+itemTotal);	
	return itemTotal;
}

// Xuất ra HTML giá cuối và danh mục
function exportMoonPrice(category, total) {
	var itemHTML='<div><div><span class="moon-label">Giá của Moon: </span><span class="moon-price">'
					+(total>0
						?'~ '+ toVND(total).formatMoney(0, '.', ',')
							+' VNĐ</span>&nbsp;&nbsp;&nbsp;'
							+'<a class="moon-link" href="'+FACEBOOK_LINK+'">Liên hệ &gt;</a>'	
							+'</div><div style="margin-top:8px">'
							+ (itemWeight==0 && CATEGORIES[category].SHIP!==0
								?'<span class="moon-sub">Phí ship tính theo cân nặng, sẽ được thông báo sau khi hàng về.</span>'
								:'<span>Loại mặt hàng:  </span>' + generateCategorySelect(category)
									+ '<br><span class="moon-sub">'+CATEGORIES[category].NOTE+'</span>'							
								)
						:'<a class="moon-link" href="'+FACEBOOK_LINK+'">Liên hệ &gt;</a>')
					+'</div></div>';
	return itemHTML;

>>>>>>> 72805914565998fe94bf5db46033b6b1250fce05
}