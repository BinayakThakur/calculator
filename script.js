let value="";
let cal=[];
function addition(){
    var screen=document.getElementById("output");
    screen.innerHTML="OUTPUT";
    if(isNaN(value)==false){
        cal.push(value);
        
    }
    cal.push("+");
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+" + ";
    value="";
    
}
function minus(){
    var screen=document.getElementById("output");
    screen.innerHTML="OUTPUT";
    if(isNaN(value)==false){
        cal.push(value);
        
    }
    cal.push("-");
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+" - ";
    value="";
}
function multiply(){
    var screen=document.getElementById("output");
    screen.innerHTML="OUTPUT";
    if(isNaN(value)==false){
        cal.push(value);
        
    }
    cal.push("*");
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+" * ";
    value="";
}
function divide(){
    var screen=document.getElementById("output");
    screen.innerHTML="OUTPUT";
    if(isNaN(value)==false){
        cal.push(value);
        
    }
    cal.push("/");
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+" / ";
    value="";
}
function solving(stack){
    let ans=Number(stack[0]);
    for(let i=0;i<stack.length;i++){
        
        if(stack[i]=="+"){
            ans=ans+Number(stack[i+1]);
        }
        if(stack[i]=="-"){
            ans=ans-Number(stack[i+1]);
        }
        if(stack[i]=="/"){
            ans=ans/Number(stack[i+1]);
        }
        if(stack[i]=="*"){
            ans=ans*Number(stack[i+1]);
        }
    }
    return ans;
}
function equate(){
    var screen=document.getElementById("output");
    
    if(isNaN(value)==false){
        cal.push(value);
        
    }
    let solved=solving(cal);
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"<br><b> Output : "+solved + "</b><br>";
    cal=[];
    screen.innerHTML=solved;
    value="";
}
function one(){
    
    var screen=document.getElementById("output");
    value=value+1;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"1";
    screen.innerHTML=value;
}
function two(){
    var screen=document.getElementById("output");
    value=value+2;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"2";
    screen.innerHTML=value;
}
function three(){
    var screen=document.getElementById("output");
    value=value+3;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"3";
    screen.innerHTML=value;
}
function four(){
    var screen=document.getElementById("output");
    value=value+4;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"4";
    screen.innerHTML=value;
}
function five(){
    var screen=document.getElementById("output");
    value=value+5;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"5";
    screen.innerHTML=value;
}
function six(){
    var screen=document.getElementById("output");
    value=value+6;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"6";
    screen.innerHTML=value;
}
function seven(){
    var screen=document.getElementById("output");
    value=value+7;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"7";
    screen.innerHTML=value;
}
function eight(){
    var screen=document.getElementById("output");
    value=value+8;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"8";
    screen.innerHTML=value;
}
function nine(){
    var screen=document.getElementById("output");
    value=value+9;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"9";
    screen.innerHTML=value;
}
function zero(){
    var screen=document.getElementById("output");
    value=value+0;
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+"0";
    screen.innerHTML=value;
}
function decimal(){
    var screen=document.getElementById("output");
    value=value+".";
    var con=document.getElementById("con");
    con.innerHTML=con.innerHTML+".";
    screen.innerHTML=value;
}
