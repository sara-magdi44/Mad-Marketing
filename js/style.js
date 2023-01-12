/*          js counter 

let counters = document.querySelectorAll(".counter-data1");
console.log(counters);
 counters.forEach(counter => {
    counters.innerText = "0"

    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const c =  +counter.innerText
        const increment =  target /200 

        if( c < target ){
            counter.innerText =  `${Math.ceil( c + increment)}`
            setTimeout( updateCounter , 1);
         }else{
            counter.innerText = target ;
         }
    }
    updateCounter();
});
*/

/* owl carousel */
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:7,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
        
/*  counter when scroll */ 
$(document).ready(function () {
    $(document).scroll(function() {
        if($(".customer").visible(true)) {
            $('#counter-data1').jQuerySimpleCounter({
                start:0,
                end: 1500,
                duration: 3000
            });
            $('#counter-data2').jQuerySimpleCounter({
                end:12000 ,
                duration: 3000
            });
            $('#counter-data3').jQuerySimpleCounter({
                end: 5000,
                duration: 3000
            });
            $(document).unbind("scroll");
        }
    });
    // if we want to hover but scroll is way better
// $(".customer").hover(function () {

//     $(".customer").unbind("mouseenter mouseleave")

// })
});


