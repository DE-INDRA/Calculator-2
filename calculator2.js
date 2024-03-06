const screen=document.getElementById("screen");
let str="";
function update(val){
    str+=val;
    screen.value=str;
}
function calculate(){
    try{
        result=eval(str);
    }
    catch{
        screen.value=`Error!`;
    }
    screen.value=result;
    str=result;
}
function Clear(){
    str="";
    screen.value="";
}
function Delete(){
    str=str.substring(0,str.length-1);
    screen.value=str;
}