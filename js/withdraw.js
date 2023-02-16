document.getElementById('btn-withdraw').addEventListener('click',function(){

    const newWithdrawAmount = getInputFieldValueId('withdraw-input');
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');
    const previousBalanceAmount = getTextElementValueById('balance-total')

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    const newBalanceTotal = previousBalanceAmount -  newWithdrawAmount;
    setElementValueById('withdraw-total', newWithdrawTotal)
    setElementValueById('balance-total', newBalanceTotal)
    
    
})