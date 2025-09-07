function buttonClick(id){
    // const blockBtn=document.getElementById(id).style.background='#B4F461';

    document.getElementById('blog-btn').style.background='';
    document.getElementById('donation-btn').style.background='';
    
    document.getElementById('history-btn').style.background='';
    


    
    document.getElementById(id).style.background='#B4F461';
    return ;
    
}
function noneBtn(id){
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('donate-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
// blog btn by clicked
document.getElementById('blog-btn').addEventListener('click',function(){
    
    buttonClick('blog-btn')
    
})
// donation btn by clicked-------------
document.getElementById('donation-btn').addEventListener('click', function(){
   
    buttonClick('donation-btn')
    noneBtn('donation-form')
})
// history btn by clicked--
document.getElementById('history-btn').addEventListener('click', function(){
    
    buttonClick('history-btn')
    noneBtn('donate-history')
})