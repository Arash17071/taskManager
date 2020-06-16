import React from 'react';


const jalaliDate = ()=>{
    let d = new Date();
    let gy = d.getFullYear();
    let gm = d.getMonth()+1;
    let gd = d.getDate();
    let wd = d.getDay();
    let wds =''
    let wgm = ''

    let g_d_m,jy,jm,jd,gy2,days;
    
    if (wd===6){
        wds = "شنبه"
    } else if(wd===0){
        wds = "یکشنبه"
    } else if(wd===1){
        wds = "دوشنبه"
    } else if(wd===2){
        wds = "سه شنبه"
    } else if(wd===3){
        wds = "چهارشنبه"
    } else if(wd===4){
        wds = "پنج شنبه"
    } else {
        wds = "جمعه"
    }

    g_d_m=[0,31,59,90,120,151,181,212,243,273,304,334];
    if(gy > 1600){
     jy=979;
     gy-=1600;
    }else{
     jy=0;
     gy-=621;
    }
    gy2=(gm > 2)?(gy+1):gy;
    days=(365*gy) +(parseInt((gy2+3)/4)) -(parseInt((gy2+99)/100)) +(parseInt((gy2+399)/400)) -80 +gd +g_d_m[gm-1];
    jy+=33*(parseInt(days/12053)); 
    days%=12053;
    jy+=4*(parseInt(days/1461));
    days%=1461;
    if(days > 365){
     jy+=parseInt((days-1)/365);
     days=(days-1)%365;
    }
    jm=(days < 186)?1+parseInt(days/31):7+parseInt((days-186)/30);
    jd=1+((days < 186)?(days%31):((days-186)%30));

    if (jm===1){
        wgm = "فروردین"
    } else if(jm===2){
        wgm = "اردیبهشت"
    } else if(jm===3){
        wgm = "خرداد"
    } else if(jm===4){
        wgm = "تیر"
    } else if(jm===5){
        wgm = "مرداد"
    } else if(jm===6){
        wgm = "شهریور"
    } else if(jm===7){
        wgm = "مهر"
    } else if(jm===8){
        wgm = "آبان"
    } else if(jm===9){
        wgm = "آذر"
    } else if(jm===10){
        wgm = "دی"
    } else if(jm===11){
        wgm = "بهمن"
    } else {
        wgm = "اسفند"
    }
    
    return [jy,jm,jd,wds,wgm];
}

let tarikhList = jalaliDate()

const Jalali = () => {

    return(
        <span style={{ color:"white"}}>{`${tarikhList[3]} ${tarikhList[2]} ${tarikhList[4]} ${tarikhList[0]}`}</span>
    )
}


 
export default Jalali;