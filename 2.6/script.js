let ekran = document.getElementById("show");
let y= 2;
let cavab='';
let x ='';
while(y>0){
    cavab = prompt('bir eded daxil edin');
     x = Math.floor( Math.random() * 10 + 1) ;
if 
   (x==cavab) {
    y=0;
       alert ('dogru');
       ekran.innerHTML = cavab;
       
   }
else {
    y--;
    alert('yanlis');
    
}
console.log(x)
}
