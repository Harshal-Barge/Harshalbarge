const navi= document.querySelector('.navbar');
const logo= document.querySelector('.logo');
const liele= document.querySelector('a');
const inf_cnt= document.querySelector('.information');
const bb= document.querySelector('.inner-container');
const abt= document.querySelector('.abt-hdng');
const edu= document.querySelectorAll('.edu-animat');
const certf= document.querySelector('.cert-animat');
const skills= document.querySelector('.skill-animation');
const skillcard= document.querySelectorAll('.skill-card');
const cntcard= document.querySelectorAll('.cnct-info');

var color=getComputedStyle(document.body);
document.addEventListener('scroll',()=>{
    var scroll_position=window.scrollY;
    if(scroll_position > 50){
        navi.style.backgroundColor = color.getPropertyValue('--nav_hover');
    }else{
        navi.style.backgroundColor = color.getPropertyValue('--nav_top');
    }
    if(scroll_position>700){
        bb.style.transform = 'translateX(0)';
        bb.style.opacity = '1';
        abt.style.transform ='translateX(-1rem)';
        abt.style.opacity = '1';
    }
    if(scroll_position>1400){ 
        inf_cnt.style.transform = 'translateX(0)';
        inf_cnt.style.opacity = '1';
    }
    if(scroll_position>2200){
        var length0=edu.length;
        for(var i=0;i<length0;i++){
        edu[i].style.transform = 'translateY(0)';
        edu[i].style.opacity = '1';
    }
    }
    if(scroll_position>3500){
        certf.style.transform = 'translateY(0)';
        certf.style.opacity = '1';
    }
    if(scroll_position>4900){
        skills.style.transform = 'translateY(0)';
        skills.style.opacity = '1';
        var length1=skillcard.length;
        for (var i=0 ; i<length1 ; i++){
        skillcard[i].style.opacity = '1';
        skillcard[i].style.transform = 'translateY(0)';
        }
    }
    if(scroll_position>5900){
        var length2=cntcard.length;
        for (var i=0 ; i<length2 ; i++){
        cntcard[i].style.opacity = '1';
        cntcard[i].style.transform = 'scale(1)';
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

