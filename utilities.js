//cash out function declear for a donation

function donateInputNumber(id){
    const donateInput=parseFloat(document.getElementById(id).value);
    return isNaN(donateInput)? 0:donateInput;
}


// donate out button
function reserveTotalAmount(){
    const totalAmount=parseFloat(document.getElementById('reserve-amount').innerText);
    return isNaN(totalAmount)? 0:totalAmount;
}



// donate add

function donateAddAmount(id){
    const addAmount=parseFloat(document.getElementById(id).innerText);
    return isNaN(addAmount)? 0:addAmount;
}












