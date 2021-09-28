var curr=0;
var num=3;
var imagedesc={
    "bimage1":["Red Nike Sneaker","₹8,999","₹10,999"],
    "bimage2":["White Nike Running Shoes","₹6,999","₹8,999"],
    "bimage3":["Maroon Plimsoll","₹4,999","₹5,999"],
    "bimage4":["Red Air Jordan","₹9,999","₹10,999"],
    "bimage5":["Nike Athletic Shoe","₹7,999","₹9,999"],
    "bimage6":["Nike Air Max","₹6,999","₹8,999"],
    "bimage7":["Brown Nike Sneaker","₹8,999","₹9,999"],
    "bimage8":["Black Converse All star","₹4,999","₹5,999"],
    "bimage9":["White and Blue Nike Air","₹2,999","₹4,999"],
    "bimage10":["Nike High Top Sneakers","₹8,999","₹12,999"],
    "bimage11":["Red Nike Sneaker","₹8,999","₹10,999"],
    "bimage12":["White Nike Running Shoes","₹6,999","₹8,999"],
    "bimage13":["Maroon Plimsoll","₹4,999","₹5,999"],
    "bimage14":["Red Air Jordan","₹9,999","₹10,999"],
    "bimage15":["Nike Athletic Shoe","₹7,999","₹9,999"],
    "bimage16":["Nike Air Max","₹6,999","₹8,999"],
    "bimage17":["Brown Nike Sneaker","₹8,999","₹9,999"],
    "bimage18":["Black Converse All star","₹4,999","₹5,999"],
    "bimage19":["White and Blue Nike Air","₹2,999","₹4,999"],
    "bimage20":["Nike High Top Sneakers","₹8,999","₹12,999"],
    "bimage21":["Red Nike Sneaker","₹8,999","₹10,999"],
    "bimage22":["White Nike Running Shoes","₹6,999","₹8,999"],
    "bimage23":["Maroon Plimsoll","₹4,999","₹5,999"],
    "bimage24":["Red Air Jordan","₹9,999","₹10,999"],
    "bimage25":["Nike Athletic Shoe","₹7,999","₹9,999"],
    "bimage26":["Nike Air Max","₹6,999","₹8,999"],
    "bimage27":["Brown Nike Sneaker","₹8,999","₹9,999"],
    "bimage28":["Black Converse All star","₹4,999","₹5,999"],
    "bimage29":["White and Blue Nike Air","₹2,999","₹4,999"],
    "bimage30":["Nike High Top Sneakers","₹8,999","₹12,999"],
}
function start(){
    for(let i=1;i<=10;i++){
        let calc=i+curr*10;
        let image=document.getElementById(`image${i}`);
        let str=imagedesc[`bimage${calc}`][0];
        image.innerHTML=`<a href="./showitems.html"><img src="./Smallimages/simage${calc}.jpg" onclick="saveImage(this)"></img></a>
        <div class="title">${str}</div>`
        document.getElementById(`c1`).style["background-color"]="cyan";
        document.getElementById(`c2`).style["background-color"]="cyan";
        document.getElementById(`c3`).style["background-color"]="cyan";
        document.getElementById(`c${curr+1}`).style["background-color"]="darkblue";
    }
}
function prevPic(){
    if(curr==0)
        curr=num;
    else
        curr--;
    start();
}
function nextPic(){
    if(curr==num-1)
        curr=0;
    else
        curr++;
    start();
}
function saveImage(obj){
    let str=obj.src;
    str.replace("Small","Big");
    str.replace("simage","bimage");
    console.log(str)
    localStorage.loadimage=str;
}
start();
setInterval(nextPic,5000);