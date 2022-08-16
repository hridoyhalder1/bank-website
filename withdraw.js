// step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){

    // step-2: get withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    
    // step-3: get the current withdraw total

    const withDrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withDrawTotal.innerText;
    const previousWithDrawAmount = parseFloat(previousWithdrawTotalString);
    
    // step-4: calculate the total withdraw amount

    const currentTotalAmount = previousWithDrawAmount + newWithDrawAmount;
    withDrawTotal.innerText = currentTotalAmount;

    // step-5: get balance current total
    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: claculate new balance total and set new balance total

    const currentBalanceTotal =  previousBalanceTotal - newWithDrawAmount ;
    balanceTotalField.innerText = currentBalanceTotal;


    // step-7: clear the withdraw field
    withdrawField.value= '';



})