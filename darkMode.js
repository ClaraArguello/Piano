gsap.timeline()
    .set('body', {backgroundColor:'#000'})
    .set('.btn', {left:'50%', xPercent:-50, top:'50%', yPercent:-50, position:'absolute', cursor:'pointer'})
    .set('.moon', {scale:0, transformOrigin:'66% 66%'})

$('.btn').on('click', (e)=>{
  if (gsap.getProperty('body', 'backgroundColor')=='rgb(0, 0, 0)'){
    gsap.timeline({defaults:{duration:0.5, ease:'expo', overwrite:'auto'}})
        .to('.btn', {attr:{stroke:'#000'}}, 0)
        .to('.masker', {attr:{r:0}}, 0)
        .to('.sun', {scale:2.5, transformOrigin:'50% 50%', attr:{'stroke-width':0.25}}, 0)
        .fromTo('.moon', {scale:0},{scale:1}, 0)
        .to('body', {backgroundColor:'#eee', ease:'power3.inOut'}, 0)
  } else {
    gsap.timeline({defaults:{duration:0.5, ease:'expo', overwrite:'auto'}})
        .to('.btn', {attr:{stroke:'#fff'}}, 0)
        .to('.masker', {attr:{r:9}, ease:'power2.inOut'}, 0)    
        .to('.sun', {scale:1, transformOrigin:'50% 50%', attr:{'stroke-width':1}, duration:0.4, ease:'back.inOut(1.5)'}, 0)
        .to('.moon', {scale:0, duration:0.01}, 0)
        .to('body', {backgroundColor:'#000', ease:'power3.inOut'}, 0)
  }
});

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     document.documentElement.setAttribute('data-theme', "dark");
// } else {
//     document.documentElement.setAttribute('data-theme', "light");
// }

// window.matchMedia('(prefers-color-scheme: dark)')
//     .addEventListener('change', event => {
//         if (event.matches) {
//             //dark mode
//             document.documentElement.setAttribute('data-theme', "dark")
//         } else {
//             //light mode
//             document.documentElement.setAttribute('data-theme', "light");
//         }
//     })