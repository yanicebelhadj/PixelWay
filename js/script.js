const html = document.documentElement;
const videoPresentation = document.querySelector('#videoPresentation')

window.addEventListener('scroll',() =>{
    const scrollTop = html.scrollTop;
    console.log(scrollTop)
    const maxScrollTop = html.scrollHeight-window.innerHeight;
    const scrollFraction = (scrollTop*2)/maxScrollTop; 
    
    $('#videoPresentation').css({
        width: scrollFraction * 95 +'vw'
    });
})

// console.log(videoPresentation.offsetTop - innerHeight)

// const scale = (videoPresentation.offsetTop - innerHeight)/900 -(videoPresentation.offsetTop - innerHeight)

console.log(scale)


