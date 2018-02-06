!(function(){
    let css = `
/**
 * 首先，给皮卡丘一张皮。
 */
body{
    background: #ffe600;    
}
/**
 * 接下来，画一个鼻子。
 */
.nose{
    border: 9px solid;
    border-color: black transparent 
        transparent transparent;
    width:1px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    top: 26px;
}
/**
 * 紧接着是眼睛。
 */
.eye{
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #1e1e1e;
    position: absolute;
    border:2px solid black;
}
.eye::after{
    display: block;
    content: "";
    width: 21px;
    height: 21px;
    border-radius:50%;
    background: #fff;
    position:absolute;
    left: 8px;
}
.eye.left{
    right: 50%;
    transform: translateX(-65px);
}  
.eye.right{
    left:50%;
    transform: translateX(65px)
}
/**
 * 水灵灵的眼睛画完之后，该画脸颊了。
 */
.face{
    width: 67px;
    height: 67px;
    background:red;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    top:84px;
}
    .face.right{
    right: 0px;
}
/**
 * 接下来是最复杂的嘴巴。
 */
.mouse{
    width: 132px;
    height: 129px;
    position: absolute;
    left:50%;
    top:50px;
    transform: translateX(-50%);
    overflow:hidden;
}
.upperLip::before,.upperLip::after{
    background:#ffe600;
    display: block;
    content: '';
    border: 2px solid #000;
    border-top: none;
    width: 64px;
    height: 25px;
    position: absolute;
}
.upperLip::before{
    border-radius: 0px 0px 3px 100%;
    border-right: none;
    transform:translateX(-100%) 
    rotate(-25deg);
    top: 46px;
    left:50%;
}
.upperLip::after{
    border-radius: 0px 0px 100% 3px;
    border-left: none;
    transform: translateX(100%) 
        rotate(25deg);
    margin-left: 98px;
    top: 46px;
}
    
.lowerLip-wrapper{
    width:152px;
    height:125px;
    position: absolute;
    bottom:0;
    overflow:hidden;
    left:82px;
    z-index: -1;  
    position: absolute;
}
.lowerLip{
    border:2px solid #000;
    width:152px;
    height:836px;
    position:absolute;
    bottom:0;
    border-radius: 50%;
    background: #9b000a;
    overflow: hidden;
}
.lowerLip::after{
    display: block;
    content: '';
    width: 110px;
    height: 110px;
    background: #ff485f;
    position: absolute;
    bottom: -6px;
    border-radius: 50%;
    left: 20px;
}
/**
 * 好啦，可爱的皮卡丘画完了。
 * 可爱的皮卡丘送给可爱的你。
 */
`
    let duration = 50
    
    $('.buttons').on('click',(e)=>{
        let speed = $(e.target).attr('data-speed')
        $(e.target).addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 20
                break
        }
    })
    
    
    function writeCode(css,){
        let styleTag = document.querySelector('#styleTag')
        let codePre = document.querySelector('#code')
        let n = 0
    
        let timer
        timet = setTimeout(function run(){
            n += 1
            styleTag.innerHTML = css.substr(0,n)
            codePre.innerHTML = Prism.highlight( css.substr(0,n), Prism.languages.css)
            codePre.scrollTop = codePre.scrollHeight
            if(n < css.length){
                timer = setTimeout(run, duration)
            }else{
                clearTimeout(timer)
            }
        },duration)
    }
    
    writeCode(css)
})()
