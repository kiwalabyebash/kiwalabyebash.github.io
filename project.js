var bar = document.getElementById("bar");
var heyi = document.querySelector(".heyi");
var remover = document.querySelector(".remover");
var resume = document.querySelector(".resume");
var sim = document.querySelector(".sim");
var sim2 = document.querySelector(".sim2");



bar.addEventListener("click",()=>{
    heyi.style.marginLeft = "0px";
    heyi.style.height = "60000px";
    remover.style.marginLeft = "320px";
    bar.classList.toggle("toggleMe")
});

remover.addEventListener("click",()=>{
    remover.style.marginLeft = "500000px";
    heyi.style.marginLeft = "-5000px";
    bar.classList.toggle("toggleMe")
})

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


window.onscroll = function(){
remover.style.marginLeft = "500000px";
    heyi.style.marginLeft = "-5000px";
    bar.classList.toggle("toggleMe")    
}

 





resume.onclick = function(){
    alert("Resume not available yet!")
}

