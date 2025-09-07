

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

    // history--------
    const p =document.createElement('p');
    p.innerText=`${inputNumber} taka is Donated for flood at noakhali, Bangladesh`;
    const h3=document.createElement('h3');
    h3.innerText=new Date();
    console.log(h3)
    p.classList.add('text-2xl','font-bold')
    document.getElementById('donate-history').appendChild(p);
    document.getElementById('donate-history').appendChild(h3);
    

    
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


    // history--------
    const p =document.createElement('p');
    p.innerText=`${inputNumber} taka is Donated for flood Relief in Feni, Bangladesh`;
    const h3=document.createElement('h3');
    h3.innerText=new Date();
    console.log(h3)
    p.classList.add('text-2xl','font-bold')
    document.getElementById('donate-history').appendChild(p);
    document.getElementById('donate-history').appendChild(h3);
    
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


    // history--------
    const p =document.createElement('p');
    p.innerText=`${inputNumber} taka is Donated for Aid for Injured in the Quata Movement, Bangladesh`;
    const h3=document.createElement('h3');
    h3.innerText=new Date();
    console.log(h3)
    p.classList.add('text-2xl','font-bold')
    document.getElementById('donate-history').appendChild(p);
    document.getElementById('donate-history').appendChild(h3);
    
})