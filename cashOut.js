document.getElementById('donate-now-btn').addEventListener('click',function(event){
    event.preventDefault();
    // const inputNumber=donateInputNumber('input-field');
    const inputNumber1=donateInputNumber('input-field1');

    const totalAmount=reserveTotalAmount('reserve-amount');


    // const donateAdd=donateAddAmount('donate-add');
    const donateAdd1=donateAddAmount('donate-add1');
    
    // donate add
    // const donateNewBalance=donateAdd+inputNumber;
    // document.getElementById('donate-add').innerText=donateNewBalance;
    // donate add1
    const donateNewBalance1=donateAdd1+inputNumber1;
    document.getElementById('donate-add1').innerText=donateNewBalance1;

    // donate cashout
    // const newBalance=totalAmount-inputNumber;
    // document.getElementById('reserve-amount').innerText=newBalance;

    // donate cashout 1
    const newBalance1=totalAmount-inputNumber1;
    document.getElementById('reserve-amount').innerText=newBalance1;




    // modal
    document.getElementById('my_modal_6').checked=true;
})