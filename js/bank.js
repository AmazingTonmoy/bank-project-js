document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
 //    
    const depositString = depositInput.value ;
    depositInput.value = '';
   const newDepositAmount = parseFloat(depositString);
   
 //   deposit total
 
 const depositTotalElement = document.getElementById('deposit-total');
 const previousDepositTotalString = depositTotalElement.innerText;
 const previousDepositTotal = parseFloat(previousDepositTotalString);
 
 const totalDeposit = newDepositAmount + previousDepositTotal;
 
 depositTotalElement.innerText = totalDeposit;
 
 
 // balance
 const balanceTotalElement = document.getElementById('balance-total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousTotalBalance = parseFloat(previousBalanceTotalString)
 
 const newBalance = previousTotalBalance + newDepositAmount;
 balanceTotalElement.innerText = newBalance;
 
 
 
 });
 
 
 document.getElementById('btn-withdraw').addEventListener('click',function(){
     
     const withdrawInput = document.getElementById('withdraw-input');   
      const withdrawString = withdrawInput.value ;
     withdrawInput.value = '';
      const newWithdrawtAmount = parseFloat(withdrawString);
 
     //  withdrawtotal
 
 const withdrawTotalElement = document.getElementById('withdraw-total');
 const previousWithdrawTotalString = withdrawTotalElement.innerText;
 const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  
 const totalWithdraw = newWithdrawtAmount + previousWithdrawTotal;
 withdrawTotalElement.innerText = totalWithdraw;
 
 // balance
 
 const balanceTotalElement = document.getElementById('balance-total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousTotalBalance = parseFloat(previousBalanceTotalString)
 
 const newBalance = previousTotalBalance - newWithdrawtAmount ;
 balanceTotalElement.innerText = newBalance;
 
       
 })