


let box = document.getElementsByClassName("box");
let turn = "X";


const changeturn = () => {
    return turn === "X" ? "0":"X";
}

const checkwin = () =>{

}
Array.from(box).forEach((element) => {
    let boxtext = document.querySelectorAll(".boxtext")
    element.addEventListener("click",() =>{
        console.log("hello")
    if(boxtext.innertext == ""){
        boxtext.innertext = "X";
        changeturn();
        checkwin();
        document.getElementsByClassName("whoseturn"[0]).innertext = "turn for" + turn
    }
})
})