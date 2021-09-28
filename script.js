const container = document.querySelector(".container")
const image = document.querySelector(".image")
const lens = document.querySelector(".lens")
const result = document.querySelector(".result")
const body=document.querySelector("body")
const containerRect = container.getBoundingClientRect()
const imageRect = image.getBoundingClientRect()
const lensRect = lens.getBoundingClientRect()
const resultRect = result.getBoundingClientRect()

container.addEventListener("mousemove", zoomImage)
container.addEventListener("mouseleave",removeImage)
container.addEventListener("mouseenter",addImage)

const imagedesc={
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
const price=document.getElementById("price");
const discount=document.getElementById("discount");
const heading=document.getElementById("prodhead");
function addImage(){
    result.style.backgroundImage = `url(${image.src})`
    lens.style.opacity="0.6"
}
function removeImage(){
    result.style.backgroundImage="none"
    lens.style.opacity="0"
}
function zoomImage(e) {
    const { x, y } = getMousePos(e)

    lens.style.left = x + "px"
    lens.style.top = y + "px"

    let fx = resultRect.width / lensRect.width
    let fy = resultRect.height / lensRect.height

    result.style.backgroundSize = `${imageRect.width * fx}px ${
        imageRect.height * fy
    }px`
    result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`
}

function getMousePos(e) {
    let x = e.clientX - containerRect.left - lensRect.width / 2
    let y = e.clientY - containerRect.top - lensRect.height / 2
    let minX = 0
    let minY = 0
    let maxX = containerRect.width - lensRect.width
    let maxY = containerRect.height - lensRect.height
    if (x <= minX) {
        x = minX
    } else if (x >= maxX) {
        x = maxX
    }
    if (y <= minY) {
        y = minY
    } else if (y >= maxY) {
        y = maxY
    }
    return { x, y }
}
function start(){
    let str=localStorage.loadimage;
    str=str.replace("Small","Big");
    str=str.replace("simage","bimage");
    image.src=str;
    let temp="";
    for(let i=str.length-5;i>=0;i--){
        let ch=str.charAt(i);
        if(ch=='/')
            break;
        temp=ch+temp;
    }
    heading.textContent=imagedesc[temp][0];
    price.textContent=imagedesc[temp][1];
    discount.textContent=imagedesc[temp][2];
}
start();