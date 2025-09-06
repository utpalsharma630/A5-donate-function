function buttonClick(id){
    const blockBtn=document.getElementById(id).style.background='#B4F461';
    return blockBtn;
    
}
// function noneBtn(id){
//     document.getElementById('blog-btn').classList.add('background');
//     document.getElementById('donation-btn').classList.add('background');
//     document.getElementById('history-btn').classList.add('background');


//     document.getElementById(id).classList.remove('background');
// }
// blog btn by clicked
document.getElementById('blog-btn').addEventListener('click',function(){
    const blogBtn=buttonClick('blog-btn')
    console.log(blogBtn);
    // noneBtn('blog-btn')
})
// donation btn by clicked-------------
document.getElementById('donation-btn').addEventListener('click', function(){
    const donationBtn=buttonClick('donation-btn')
    console.log(donationBtn);
    // noneBtn('danation-btn')
})
// history btn by clicked--
document.getElementById('history-btn').addEventListener('click', function(){
    const donationBtn=buttonClick('history-btn')
    console.log(donationBtn);
    // noneBtn('history-btn')
})