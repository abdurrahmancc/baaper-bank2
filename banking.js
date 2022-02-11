//input string to float convert
function getInputValue(inputId){
    const inputDeposit = parseFloat(inputId.value);
    depositInput.value="";
    return inputDeposit ;
}

//total deposit Amount
function dipositTotalAmount( totalFieldId, dipositAmount){
  // debugger;
  const depositTotal = document.getElementById(totalFieldId);
  const totalDeposit = parseFloat(depositTotal.innerText);
  depositTotal.innerText = totalDeposit + dipositAmount;
}

//total balance
function updateBalance(dipositAmount, isAdd){
  const balancetotal = document.getElementById("balance-total");
  const totalBalance = parseFloat(balancetotal.innerText);
  if(isAdd==true){
    balancetotal.innerText = totalBalance + dipositAmount;
  }
  else{
    balancetotal.innerText = totalBalance - dipositAmount;
  }
  
}

function getCurrentBlance(){
  const balancetotal = document.getElementById("balance-total");
  const totalBalance = parseFloat(balancetotal.innerText);
  return totalBalance;
}

// const depositTotal = document.getElementById("deposit-total");
const depositButton = document.getElementById("deposit-button");
const depositInput = document.getElementById("deposit-input");
depositButton.addEventListener("click", function(){
  const dipositAmount = getInputValue(depositInput);
  if(dipositAmount>0){
    dipositTotalAmount("deposit-total", dipositAmount);
    updateBalance (dipositAmount, true);
  }
  else(
    alert("Please Enter Your Currect Amount")
  )
});

// withdraw balance
const withdrawButton = document.getElementById("withdraw-button");
const withdrawInput = document.getElementById("withdraw-input");
withdrawButton.addEventListener("click", function(){
  const inputWithdraw = getInputValue(withdrawInput)
  withdrawInput.value = "";
//update balance
  const currentBalance = getCurrentBlance();
  if(inputWithdraw>0 && inputWithdraw <= currentBalance){
    dipositTotalAmount ("withdraw-total" , inputWithdraw);
    updateBalance(inputWithdraw, false);
  }
  else(
    alert("Please Enter Your Currect Amount")
  )
})

