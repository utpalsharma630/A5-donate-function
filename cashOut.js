document.getElementById('donate-now-btn').addEventListener('click',function(event){
    event.preventDefault();
    const inputNumber=donateInputNumber('input-field');

    const totalAmount=reserveTotalAmount('reserve-amount');


    const donateAdd=donateAddAmount('donate-add');
    
    // donate add
    const donateNewBalance=donateAdd+inputNumber;
    document.getElementById('donate-add').innerText=donateNewBalance;

    // donate cashout
    const newBalance=totalAmount-inputNumber;
    document.getElementById('reserve-amount').innerText=newBalance;
})