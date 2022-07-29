console.log("welcome to tic tac toe");
let music=new Audio("music.mp3");
let ting=new Audio("ting.mp3");
let over=new Audio("gameover.mp3");
let turn="X";
let isgameover = false;
//func to change turn
const changeturn = ()=>{
    if(turn=="X")
    {
        turn="O";
    }
    else{
        turn="X";
    }
}
//func to check win

const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('text');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText ===boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !==""){
            changeturn();
            document.getElementsByClassName("info")[0].innerText= turn + "wons";
            isgameover= true;
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            over.play()
            music.pause();
        }
    })
}
// func for logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) =>
{
    let boxtext=element.querySelector('.text');
    element.addEventListener('click',()=>
    {
        music.play();
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            changeturn();
            ting.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }
    })
})
//funct for reset
document.getElementById("reset").addEventListener('click',()=>{
    Array.from(boxes).forEach((element) =>{
        let boxtext=element.querySelector('.text');
        boxtext.innerText = "";
        isgameover = false;
    })
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    music.pause();
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px";
})