const depositTotal = document.getElementById("deposit-total");
const depositButton =document.querySelector("#deposit-button");
const depositInput = document.querySelector("#deposit-input");
const balancetotal = document.querySelector("#balance-total");
depositButton.addEventListener("click", function(){
    const totalDeposit = parseFloat(depositTotal.innerText)
    const inputDeposit = parseFloat(depositInput.value)
    depositTotal.innerText = totalDeposit + inputDeposit
    depositInput.value="";
    const totalBalance = parseFloat(balancetotal.innerText);
    balancetotal.innerText = totalBalance + inputDeposit
});

// withdraw balance
const withdrawTotal = document.querySelector("#withdraw-total");
const withdrawButton = document.querySelector("#withdraw-button");
const withdrawInput = document.querySelector("#withdraw-input");
withdrawButton.addEventListener("click", function(){
  const inputWithdraw = parseFloat(withdrawInput.value);
  const totalWithdraw = parseFloat(withdrawTotal.innerText);
  withdrawTotal.innerText = inputWithdraw + totalWithdraw;
  withdrawInput.value = "";
  
  //update balance
  balanceUpdate = parseFloat(balancetotal.innerText);
  balancetotal.innerText = balanceUpdate - inputWithdraw;

})

