
function OnClick(el)
{
    var lessons=document.getElementsByClassName('Lessonpages');

    for (var i= 0; i < lessons.length; i++) {  
        console.log(lessons[i].innerHTML);
        //lessons[i].style.color="white";
        lessons[i].style.zindex=101;
        
    }
    var ell = document.getElementById('LP2');
    ell.style.zindex=1;
    console.log(ell.innerHTML);
}


