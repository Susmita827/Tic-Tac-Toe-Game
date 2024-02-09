let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let message=document.querySelector(".msgbox");
let msg=document.querySelector("#msg");``


let t=true;//playerx,player0;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    t=true;
    enablebtn();
    message.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(t){
        box.innerText="0";
        t=false;
       }
       else{
        box.innerText="x";
        t=true;
       }
       box.disable=true;

       checkwinner();
    });
});

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    message.classList.remove("hide");
    disablebtn();

};

const checkwinner=()=>{
    for(let pattern of win){
       let p1=boxes[pattern[0]].innerText;
       let p2=boxes[pattern[1]].innerText;
       let p3=boxes[pattern[2]].innerText;

        if(p1 !="" && p2 !="" && p3 !=""){
            if(p1===p2 && p2===p3){
                console.log("winner",p1);
                showwinner(p1);
            }
        }

        }
    };
    newbtn.addEventListener("click",resetGame);
    reset.addEventListener("click",resetGame);



    
