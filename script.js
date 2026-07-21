/* ===========================
   PayLink Pro v1.0
   Script Part 1
=========================== */

const accounts = [

{
name:"🏦 Standard Chartered",
title:"Mian Zain",
number:"PK12SCBL000000000000000000",
type:"IBAN"
},

{
name:"🏦 HBL",
title:"Mian Zain",
number:"PK45HABB111111111111111111",
type:"IBAN"
},

{
name:"🏦 Meezan Bank",
title:"Mian Zain",
number:"PK99MEEZ333333333333333333",
type:"IBAN"
},

{
name:"🏦 Bank Alfalah",
title:"Mian Zain",
number:"PK78ALFH222222222222222222",
type:"IBAN"
},

{
name:"📱 JazzCash",
title:"Mian Zain",
number:"03001234567",
type:"Mobile"
},

{
name:"📱 EasyPaisa",
title:"Mian Zain",
number:"03111234567",
type:"Mobile"
},

{
name:"💳 NayaPay",
title:"Mian Zain",
number:"03221234567",
type:"Mobile"
},

{
name:"💳 SadaPay",
title:"Mian Zain",
number:"03331234567",
type:"Mobile"
}

];

const cards=document.getElementById("cards");

accounts.forEach((acc,index)=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h2>${acc.name}</h2>

<div class="info">

<b>Account Title</b><br>

${acc.title}

</div>

<div class="info">

<b>${acc.type}</b><br>

<span id="num${index}">

${acc.number}

</span>

</div>

<div class="actions">

<button class="copy-btn"

onclick="copyNumber('num${index}')">

📋 Copy

</button>

<button class="pay-btn"

onclick="payNow(${index})">

💳 Pay Now

</button>

</div>

<div id="qr${index}" class="qr"></div>

`;

cards.appendChild(card);

new QRCode(

document.getElementById(`qr${index}`),

{

text:acc.number,

width:120,

height:120

}

);

});

/* HERO QR */

new QRCode(

document.getElementById("websiteQR"),

{

text:window.location.href,

width:180,

height:180

}

);

function copyNumber(id){

const text=document.getElementById(id).innerText;

navigator.clipboard.writeText(text);

alert("Number Copied Successfully ✅");

}/* ===========================
   Script Part 2
=========================== */

function payNow(index){

const acc=accounts[index];

const old=document.getElementById("paymentModal");

if(old){
old.remove();
}

const modal=document.createElement("div");

modal.id="paymentModal";

modal.innerHTML=`

<div class="modal-overlay">

<div class="modal-box">

<h2>${acc.name}</h2>

<p><strong>Account Title</strong></p>

<p>${acc.title}</p>

<br>

<p><strong>${acc.type}</strong></p>

<p id="popupNumber">${acc.number}</p>

<div class="modal-buttons">

<button class="copy-btn" onclick="copyPopupNumber()">
📋 Copy Number
</button>

<button class="pay-btn" onclick="paidNow()">
✅ I Have Paid
</button>

</div>

<button class="close-btn" onclick="closeModal()">

Close

</button>

</div>

</div>

`;

document.body.appendChild(modal);

}

function copyPopupNumber(){

const text=document.getElementById("popupNumber").innerText;

navigator.clipboard.writeText(text);

alert("Number Copied ✅");

}

function paidNow(){

window.open(

"https://wa.me/923001234567?text=Assalam-o-Alaikum,%20I%20have%20completed%20the%20payment.%20Please%20check.",

"_blank"

);

}

function closeModal(){

const modal=document.getElementById("paymentModal");

if(modal){

modal.remove();

}

}
