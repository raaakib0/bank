
function valueadd(fieldId) {

    const dipositValue = document.getElementById(fieldId);
    const underDipositValue = dipositValue.value;
    const dipositValueNumber = parseFloat(underDipositValue);
    dipositValue.value = '';
    return dipositValueNumber;

}

function innerTextCollect(previousBalanceId) {
    const previousValue = document.getElementById(previousBalanceId).innerText;
    const previousDepositValueNumber = parseFloat(previousValue);
    return previousDepositValueNumber;
}

function balanceAdd(id, value) {
    document.getElementById(id).innerText = value;
}

document.getElementById('depositButton').addEventListener('click', function () {

    const dipositvalueNumberReturn = valueadd('depositField');

    if (isNaN(dipositvalueNumberReturn)) {
        alert("Please enter a valid Amount");
        return;
    }
        const previousDepositValueReturn = innerTextCollect('previousDepositValue');
        const totalDepositValue = dipositvalueNumberReturn + previousDepositValueReturn;
        balanceAdd('previousDepositValue', totalDepositValue);

        // total balance

        const totalAmount = innerTextCollect('totalBalance');

        const diposit = totalAmount + dipositvalueNumberReturn;
        balanceAdd('totalBalance', diposit);



 

})

document.getElementById('withdrawButton').addEventListener('click', function () {

    const withdrawFieldValue = valueadd('withdrawField');

    if (isNaN(withdrawFieldValue)) {
        alert("Please enter a valid Amount");
        return;
    }

    const previousWithdrawValue = innerTextCollect('previousWithdrawValue');
    const totalAmountAfterWithdraw = innerTextCollect('totalBalance');
 
    if (totalAmountAfterWithdraw < withdrawFieldValue) {
        alert("tk nai");
    } else {
        const totalWithdrawAmount = withdrawFieldValue + previousWithdrawValue;
        balanceAdd('previousWithdrawValue', totalWithdrawAmount);

        // totalbalance
        const withdraw = totalAmountAfterWithdraw - withdrawFieldValue;
        balanceAdd('totalBalance', withdraw);
    }


})