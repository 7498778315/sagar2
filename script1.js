
// let faqs = document.querySelectorAll(".faq");
// faqs.forEach((fa,index) => {
//     fa.addEventListener("click",() => {
//         const icon = document.querySelectorAll(`.${fa.classList[0]} .faq-question i`)[index]
//         fa.classList.toggle("active");
//         icon.classList.toggle('fa-angle-up')
//     })
// })
let faqanswer = document.querySelectorAll(".faq")
faqanswer.forEach((value,index) => {
value.addEventListener("click",() => {
    const icon = document.querySelectorAll(`.${value.classList[0]} .faq-question i`)[index]
    value.classList.toggle("active")
    icon.classList.toggle("fa-angle-up")
})
})

let langbtn = document.getElementById("lang-btn")
let langcontainer = document.getElementById("lang-container");

let eyes = document.getElementById("eyes");
let eyepass = document.querySelector('input[name="pass"]');

eyes.addEventListener("click", ()  =>{
    console.log("yes")
    if(eyepass.type === "password"){
        eyepass.type = "text";
    }else{
        eyepass.type == "password";
    }
})