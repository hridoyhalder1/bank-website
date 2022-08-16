// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){

    // step-2: get deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step-3: get the current deposit total

    const depositTotalField = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalField.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step-4: add number to the set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalField.innerText = currentDepositTotal;
    
    // step-5: get balance current total
    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalField.innerText = currentBalanceTotal;

    // step-7: clear the deposit filed
    depositField.value = '';
})