//auto turn of big slider
setInterval(turn,6000);
function turn (){
    let list = [document.querySelector('#slide1'),document.querySelector('#slide2'),document.querySelector('#slide3')];
    let active = document.querySelectorAll('.active')[0];
    if (list.indexOf(active)===1||list.indexOf(active)===0) {
        list[list.indexOf(active)+1].className = 'item active';
        active.className = 'item';
    }else if (list.indexOf(active)===2) {
        list[0].className = 'item active';
        active.className = 'item';
    };
};
//buttons of sliders 
let ies = document.querySelectorAll('.buttons i');
for(let i of ies){
    i.addEventListener('click',function(e){
        let mahsool = i.parentElement.parentElement;
        try{mahsool.querySelectorAll('.activ')[0].className='none img';
        }catch{mahsool.querySelectorAll('.active')[0].className='item'};
        if (i.className==='fas fa-circle is') {
            try{mahsool.querySelectorAll('.img')[0].className='activ img'; 
        }   catch{mahsool.querySelectorAll('.item')[0].className='item active'};
        }else if (i.className==='fas fa-circle iz') {
            try{mahsool.querySelectorAll('.img')[1].className='activ img';
        }   catch{mahsool.querySelectorAll('.item')[1].className='item active'};
        }else if(i.className==='fas fa-circle im'){
            try{mahsool.querySelectorAll('.img')[2].className='activ img';
        }   catch{mahsool.querySelectorAll('.item')[2].className='item active'};
        };
    });
};

setInterval(check,500);
function check (){
        if (document.body.clientWidth<516 && document.querySelector('.navRight input').classList.contains("searchBox")===false){
            document.querySelector('.navRight input').classList.add('searchBox');
        }else if(document.body.clientWidth>516 && document.querySelector('.navRight input').classList.contains("searchBox")===true){
            document.querySelector('.navRight input').classList.remove('searchBox');
        };
};
let a = 0;
document.querySelector('#sana').addEventListener('click',function(e){
    if (a%2 === 0) {
        document.querySelector('.navRight input').classList.add('ls1');
        a = a+1
    }else if (a%2 > 0) {
        document.querySelector('.navRight input').classList.remove('ls1');
        a = a+1
    };
});
