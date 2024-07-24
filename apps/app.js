let dices = document.getElementsByClassName("dices");
let box_no;
let shift = [];
let click_unclick = [];
let reloader = document.getElementById("reloder");
let paragraph = document.getElementById("paragraph");
let congrats_screen = document.getElementById("congratulation_screen");
congrats_screen.style = `display: none;position: absolute;`;
paragraph.style = `width: 100%;
height: 70%;display: flex;justify-content:center;align-items: center;`;
reloader.style = `width: 10%;height: 10%;`;
let text = "<h1>Congratulation";
let z = 0;
reloader.addEventListener("click",()=>{
    location.reload();
})
function background_eraser(){
    let xyz = 0;
    while(xyz < 9){
        dices[xyz].style = `width: ${deskWidth*20/100}px;height: ${deskHeight*20/100}px;display: flex;justify-content: center;align-items: center;`;
        xyz++;
    }
}
function legalmoves(a){
    let neighbours = [
        [1,4,3],
        [0,2,4],
        [1,4,5],
        [0,6,4],
        [0,1,2,3,5,6,7,8],
        [4,2,8],
        [3,7,4],
        [6,8,4],
        [7,5,4]
    ];
    let p = 0;
let q = 0;
let x;
let mp = 0;
while(p<shift.length){
    if(shift[p] == "shift"){
        x = p;
    }
    
        p++;

}
while(q<neighbours[x].length){
if(click_unclick[neighbours[x][q]] == "unclick"){
dices[neighbours[x][q]].style = `width: ${deskWidth*20/100}px;height: ${deskHeight*20/100}px;display: flex;justify-content: center;align-items: center;background-color: rgba(235, 216, 52,0.5);border-radius: 50%;`;
}
q++;
}
}
function isNeighbour(a){
let neighbours = [
    [1,4,3],
    [0,2,4],
    [1,4,5],
    [0,6,4],
    [0,1,2,3,5,6,7,8],
    [4,2,8],
    [3,7,4],
    [6,8,4],
    [7,5,4]
];
let p = 0;
let q = 0;
let x;
let mp = 0;
while(p<shift.length){
    if(shift[p] == "shift"){
        x = p;
    }
    
        p++;

}
while(q<neighbours[x].length){
    if(neighbours[x][q] == a){
        
        mp = 7;
    }
    q++;
}
if(mp == 7){
    return true;
}
else {
    return false;
}
}
function winChecker(){
let clicked_red = [];
let clicked_green = [];
    let winning_combination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let m = 0;

    while(m<click_unclick.length){
        if(turn == "red"){
            if(click_unclick[m]=="clickedred"){
                clicked_red.push(m);
            }
        }
        else {
            if(click_unclick[m]=="clickedgreen"){
                clicked_green.push(m);
            }
        }
        m++;
    }
    let n = 0;
    while(n<winning_combination.length){
        if(JSON.stringify(clicked_red) == JSON.stringify(winning_combination[n]) || JSON.stringify(clicked_green) == JSON.stringify(winning_combination[n])){
            n = 9;
        }
        n++;
        
    }
    if(n == 10){
        congrats_screen.style = `display: flex;flex-direction: column;align-items: center;justify-content: center;background-color: white;width: 70vw;height: 70vh;position: absolute;`;
        paragraph.innerHTML = text+" "+turn+"</h1>";
        

      
    }
    else {
       
    }
    console.log(clicked_red);
};
while(z<9){
    click_unclick[z] = "unclick";
    z++;
}
let play_count = 0;
let turn = "red";
let body = document.body;
let diceInhabitar = document.getElementById("diceInhabitar");
let desk = document.getElementById("desk");
if(innerWidth>=innerHeight){
    var deskHeight = innerHeight*60/100;
    var deskWidth = innerHeight*60/100;

}
else {
    var deskHeight = innerWidth*60/100;
    var deskWidth = innerWidth*60/100;
}

desk.style = `width: ${deskWidth}px;height: ${deskHeight}px;`;
desk
let diagnol = document.getElementsByClassName("diagnols");
diagnol = Array.from(diagnol);

let diagnol_width = Math.sqrt(deskWidth*deskWidth +  deskHeight*deskHeight);
let co_ordination = ["top-left-radius : 20px;" ,"top-right-radius: 20px;","bottom-left-radius: 20px;","bottom-right-radius: 20px;"];
let boxes = document.getElementsByClassName("boxes");
boxes = Array.from(boxes);
let i =0;
while(i<boxes.length){
    boxes[i].style = `border-${co_ordination[i]}`;
    i++;
}
let j = 0;
while(j<diagnol.length){
    diagnol[j].style= `width: ${diagnol_width}px;transform-origin: top left;transform: rotate(45deg);`;
    if(j == 1){
        diagnol[j].style= `width: ${diagnol_width}px;transform-origin: top right;transform: rotate(${315}deg);left :-${diagnol_width-deskWidth}px;`;
    }
    j++;
}
diceInhabitar.style = `width: ${deskWidth+20/100*deskWidth}px;height: ${deskHeight+20/100*deskHeight}px;`;
let k = 0;

while(k<dices.length){
let tokens = document.createElement("div");
tokens.setAttribute("class","tokens");
tokens.style = `width: ${deskWidth * 5/100}px;height: ${deskHeight * 5/100}px;background-color: red;border-radius: 50%;display: none;`;
dices = Array.from(dices);
    dices[k].style = `width: ${deskWidth*20/100}px;height: ${deskHeight*20/100}px;display: flex;justify-content: center;align-items: center;`;
    dices[k].appendChild(tokens);
    dices[k].addEventListener("click",()=>{
    if(play_count<6){
        if(turn=="red"){
            if(click_unclick[box_no] == "unclick"){
            tokun[box_no].style = `width: ${deskWidth * 5/100}px;height: ${deskHeight * 5/100}px;background-color: red;border-radius: 50%;`;
            click_unclick[box_no] = "clickedred";
            winChecker();
            turn = "green";
            play_count++;
            }
        }
        else {
            if(click_unclick[box_no]=="unclick"){
            tokun[box_no].style = `width: ${deskWidth * 5/100}px;height: ${deskHeight * 5/100}px;background-color: green;border-radius: 50%;`;

            click_unclick[box_no] = "clickedgreen";
            winChecker();
            turn = "red";
            play_count++;
            }
        }
        
            
        
    }
    else {

    if(click_unclick[box_no] != "unclick"){
        let o = 0;
        while(o<9){
            shift[o] = "0"; 
            o++;
        }
        if (turn == "red"){
        if(click_unclick[box_no] == "clickedred"){
            shift[box_no] = "shift";
            background_eraser();
            legalmoves(box_no);
          
        }
        else {
            shift[box_no] = "0";
        }
        }
        else {
            if(click_unclick[box_no] == "clickedgreen"){
                shift[box_no] = "shift"
                background_eraser();
                legalmoves(box_no);
             
            }
            else {
                shift[box_no] = "0";
            }
        }
    }
    else {
        let qx = 0;
        while(qx<shift.length){
            if(shift[qx] == "shift"){
                qx = 10;
            }
            qx++;
        }
        if(qx == 11){
            if(isNeighbour(box_no) == true){
                if(turn == "green"){
                    tokun[box_no].style = `width: ${deskWidth * 5/100}px;height: ${deskHeight * 5/100}px;background-color: green;border-radius: 50%;`;
                    click_unclick[box_no] = "clickedgreen";
                
                }
                else {
                    tokun[box_no].style = `width: ${deskWidth * 5/100}px;height: ${deskHeight * 5/100}px;background-color: red;border-radius: 50%;`;
                    click_unclick[box_no] = "clickedred";
                    
                }
                
                let mop = 0;
                let pom;
                while(mop<shift.length){
                    if(shift[mop] == "shift"){
                        pom = mop;

                    }
                    mop++;
                }
                        let opq = 0;
                        while(opq<shift.length){
                            shift[opq] = "0";
                            opq++;
                        }
                    
                    click_unclick[pom] = "unclick";
                    tokun[pom].style = `width: ${deskWidth * 5/100}px;height: ${deskHeight * 5/100}px;background-color: red;border-radius: 50%;display: none;`;
                    background_eraser();
                    
                    winChecker();
                    if(turn=="green"){
                        turn = "red";
                    }
                    else {
                        turn = "green";
                    }
                }
                else {
                    
                }
            }

}

    }
    });
k++;
}
window.addEventListener("mousemove",(e)=>{
    if(e.pageX/innerWidth * 100 < 44 && e.pageY/innerHeight * 100 < 35){
        box_no = 0;
    }
    else if(e.pageX/innerWidth * 100 < 57 && e.pageY/innerHeight * 100 < 35){
        box_no = 1;
    }
    else if(e.pageX/innerWidth * 100 < 100 && e.pageY/innerHeight * 100 < 35){
        box_no = 2;
    }
    else if(e.pageX/innerWidth * 100 < 44 && e.pageY/innerHeight * 100 < 64){
        box_no = 3;
    }
    else if(e.pageX/innerWidth * 100 < 57 && e.pageY/innerHeight * 100 < 64){
        box_no = 4;
    }
    else if(e.pageX/innerWidth * 100 < 100 && e.pageY/innerHeight * 100 < 64){
        box_no = 5;
    }
    else if(e.pageX/innerWidth * 100 < 44 && e.pageY/innerHeight * 100 < 100){
        box_no = 6;
    }
    else if(e.pageX/innerWidth * 100 < 57 && e.pageY/innerHeight * 100 < 100){
        box_no = 7;
    }
    else if(e.pageX/innerWidth * 100 < 100 && e.pageY/innerHeight * 100 < 100){
        box_no = 8;
    }
})
let tokun = document.getElementsByClassName("tokens");
tokun = Array.from(tokun);
body.style = `display: flex;justify-content: center;align-items: center;width: 100vw;height: 100vh;`
