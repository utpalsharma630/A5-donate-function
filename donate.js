document.getElementById('donate-now-btn').addEventListener('click',function(event){
    event.preventDefault();

    const inputNumber=donateInputNumber('input-field');
    if(inputNumber<=0){
        alert('Enter a valid amount!');
        return ;
    }
    document.getElementById('donate-add').innerText= donateAddAmount('donate-add')+inputNumber;
    document.getElementById('reserve-amount').innerText=reserveTotalAmount('reserve-amount')-inputNumber;

    document.getElementById('my_modal_1').checked=true;
    
})
// donate btn1
document.getElementById('donate-now-btn1').addEventListener('click',function(event){
    event.preventDefault();

    const inputNumber=donateInputNumber('input-field1');
    if(inputNumber<=0){
        alert('Enter a valid amount!');
        return ;
    }
    document.getElementById('donate-add1').innerText= donateAddAmount('donate-add1')+inputNumber;
    document.getElementById('reserve-amount').innerText=reserveTotalAmount('reserve-amount')-inputNumber;

    document.getElementById('my_modal_2').checked=true;
    
})
// donate btn2
document.getElementById('donate-now-btn2').addEventListener('click',function(event){
    event.preventDefault();

    const inputNumber=donateInputNumber('input-field2');
    if(inputNumber<=0){
        alert('Enter a valid amount!');
        return ;
    }
    document.getElementById('donate-add2').innerText= donateAddAmount('donate-add2')+inputNumber;
    document.getElementById('reserve-amount').innerText=reserveTotalAmount('reserve-amount')-inputNumber;

    document.getElementById('my_modal_3').checked=true;
    
})