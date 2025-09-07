function homeBtnClick(id){
    document.getElementById('home-btn').style.background='';
    document.getElementById(id).style.background='#B4F461';
    return ;
}

// home btn buy clicked
document.getElementById('home-btn').addEventListener('click',function(){
    
    homeBtnClick('home-btn')
    window.location.href='index.html'
    
})