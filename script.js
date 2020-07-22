const loginBtn = document.getElementById("a");
loginBtn.addEventListener("click", function(){
    const logArea = document.getElementById("login");
    logArea.style.display="none";
    const tArea=document.getElementById("two");
    tArea.style.display="block";
})

// deposite button

const depositeClik = document.getElementById("adddeposite") 
depositeClik.addEventListener("click",function(){
    const depositeValue = document.getElementById("depositAmount").value;
    const depositeNumber= parseFloat(depositeValue);
    const startDeposite = document.getElementById("currentAmount").innerText;
    const beforeDeposite = parseFloat(startDeposite);
    const totalDeposite = depositeNumber + beforeDeposite;
    document.getElementById("currentAmount").innerText= totalDeposite;
    document.getElementById("depositAmount").value="";
    const currentTaka=document.getElementById("currentBalance").innerText;
    const currentTakaNumber =parseFloat(currentTaka);
    const totalBalance = currentTakaNumber + depositeNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

})
// withdrawBtn
const withdrawClick = document.getElementById("loss");
withdrawClick.addEventListener("click",function(){
    const withValue = document.getElementById("withAmount").value;
    const withNumber= parseFloat(withValue);
    const startwith = document.getElementById("currentWith").innerText;
    const beforewith = parseFloat(startwith);
    const totalWith = withNumber + beforewith;
    document.getElementById("currentWith").innerText= totalWith;
    document.getElementById("withAmount").value="";
    const currentTaka=document.getElementById("currentBalance").innerText;
    const currentTakaNumber =parseFloat(currentTaka);
    const totalBalance = currentTakaNumber - withNumber;
    document.getElementById("currentBalance").innerText = totalBalance;
})