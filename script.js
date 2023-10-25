var read1 = document.querySelector(".read1");
var read2 = document.querySelector(".read2");
var read3 = document.querySelector(".read3");
var read4 = document.querySelector(".read4");
var m1 = document.querySelector(".m1");
var m2 = document.querySelector(".m2");
var m3 = document.querySelector(".m3");
var m4 = document.querySelector(".m4");
var ja = document.querySelector(".ja");
var je = document.querySelector(".je");
var ji = document.querySelector(".ji");
var jo = document.querySelector(".jo");
var remover = document.querySelector(".remover");
var bala = document.querySelector(".bala");
var bale = document.querySelector(".bale");
var nop = document.querySelector(".nop");
var ream1 = document.querySelector(".ream1");
var ream2 = document.querySelector(".ream2");
var ream3 = document.querySelector(".ream3");
var ream4 = document.querySelector(".ream4");




var move = false;

read1.addEventListener("mouseenter",()=>{
    move == !move;
    m1.style.width = '230px';
    ja.style.position = "fixed";
})

read2.addEventListener("mouseenter", ()=>{
    move == !move;
    m2.style.width = '230px';
    je.style.position = "fixed";
    console.log("hey");
 } )

read3.addEventListener("mouseenter", ()=>{
    move == !move;
    m3.style.width = '230px';
    m3.style.position = "fixed";
 } )

read4.addEventListener("mouseenter", ()=>{
    move == !move;
    m4.style.width = '230px';
    m4.style.position = "fixed";
 } )



 read1.addEventListener("mouseleave", ()=>{
    move == !move;
    m1.style.width = '4px';
    m1.style.position =  "absolute";
    
} )

read2.addEventListener("mouseleave",()=>{
    move == !move;
    m2.style.width = '4px';
    m2.style.position = "absolute";
 } )

read3.addEventListener("mouseleave",()=>{
    move == !move;
    m3.style.width = '4px';
    m3.style.position = "absolute";
 } )

read4.addEventListener("mouseleave",()=>{
    move == !move;
    m4.style.width = '4px';
    m4.style.position = "absolute";
 } )


const text = "I am a software developer with 1.5years of experience in HTML, CSS, Java Script,Python, React Native and C++ , I am passionate about building elegant and efficient solutions to complex problems ";

function simulateTyping(){
const words = text.split(" ");
let i = 0;
const chatbox = document.getElementById("chatbox");

 
function typeWord(){
    if(i < words.length){
        chatbox.textContent  += words[i] +" " ;
        i++;
        setTimeout(typeWord,300)
    }
}
typeWord();
}

setTimeout(simulateTyping,2000);




bala.addEventListener("click", ()=>{
    bala.style.marginLeft = "-100px";
    bale.style.marginLeft = "50px";
    nop.style.height = "430px";
    nop.style.background = "black";
    ream1.style.marginLeft = "10px";
    ream2.style.marginLeft = "10px";
    ream3.style.marginLeft = "10px";
    ream4.style.marginLeft = "10px";
    ream1.style.background = "black";
    ream2.style.background = "black";
    ream3.style.background = "black";
    ream4.style.background = "black";

})

bale.addEventListener("click", ()=>{
 bala.style.marginLeft = "0px";
 bale.style.marginLeft = "-100px";
    nop.style.height = "0px";
    nop.style.background = "non";
    ream1.style.marginLeft = "-1000px";
    ream2.style.marginLeft = "-1000px";
    ream3.style.marginLeft = "-1000px";
    ream4.style.marginLeft = "-1000px";
    ream1.style.background = "none";
    ream2.style.background = "none";
    ream3.style.background = "none";
    ream4.style.background = "none";
   
})
