function clock(){
const date=new Date();
document.getElementById("tr").textContent=(date.getHours().toString().padStart(2,0)+":"+date.getMinutes().toString().padStart(2,0)+":"+date.getSeconds().toString().padStart(2,0));
}
setInterval(() => {clock()
    
}, 1000);