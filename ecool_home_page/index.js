window.onload = function() {

    // 主体导航
    const nav = document.querySelector('.header .content .nav ul');
    [...nav.children].forEach((li, index) => {
        if ([1, 4, 5].includes(index)) {
            li.onmouseover = function() {
                li.lastElementChild.style.display = 'block';
            };
            li.onmouseout = () => li.lastElementChild.style.display = 'none';
        }
    });


    // 轮播图
    // const liList = document.querySelectorAll('.app .lunbo ul li');
    // const lunboBox = document.querySelector('.app .lunbo .box');
    // liList.forEach((li,index)=>{
    //     li.onclick = function(){
    //         lunboBox.style.translate=`${-1200*index}px`;
    //     }
    // })


};