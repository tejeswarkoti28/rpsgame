let you=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
choices.forEach((choices)=>{
    choices.addEventListener("click", ()=>{
        console.log("choice clicked was",choices.getAttribute("id"));
    })
}

)