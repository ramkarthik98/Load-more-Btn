let loadBtn=document.querySelector('#load-more');

cItem=3;
loadBtn.onclick =()=>{
    let boxes = [...document.querySelectorAll('.box')];
    for(let i=cItem;i<cItem +3;i++){
        boxes[i].style.display='block';
    }
    cItem+=3;

    if(cItem >=boxes.length){
        loadBtn.style.display='none';
    }
}
    
