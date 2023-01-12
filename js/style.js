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

// owl carousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    navText: [" ", " "],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{ 
            items:2 
        },
        600:{ 
            items:3 
        },
        1000:{ 
            items:5 
        }
    }
});   

// counter when scroll  
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


