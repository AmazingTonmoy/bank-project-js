document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueId('deposit-input');
    
    
    const previousDepositAmount = getTextElementValueById('deposit-total');
    
    
    const previousBalanceAmount = getTextElementValueById('balance-total');

    const newDepositTotal = newDepositAmount + previousDepositAmount;
   
    const newBalanceTotal = newDepositAmount +  previousBalanceAmount;

    setElementValueById('deposit-total', newDepositTotal)
   
    
    
    setElementValueById('balance-total', newBalanceTotal)

    










})