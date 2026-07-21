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
name:"🏦 Bank Alfalah",
title:"Mian Zain",
number:"PK78ALFH222222222222222222",
type:"IBAN"
},
{
name:"🏦 Meezan Bank",
title:"Mian Zain",
number:"PK99MEEZ333333333333333333",
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

const container = document.getElementById("cards");

accounts.forEach((acc,index)=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h2>${acc.name}</h2>

<div class="info"><b>Account Title:</b> ${acc.title}</div>

<div class="info"><b>${acc.type}:</b> <span id="num${index}">${acc.number}</span></div>

<div class="actions">

<button onclick="copyText('num${index}')">
📋 Copy
</button>

<div id="qr${index}" class="qr"></div>

</div>
`;

container.appendChild(card);

new QRCode(document.getElementById(`qr${index}`),{
text:acc.number,
width:110,
height:110
});

});
