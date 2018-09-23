$(document).ready(function(){
    $('.your-class').slick({
        slidesToShow: 4, 
        slidesToScroll: 4,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]

        });





        $('.reviews-from-clients').slick({
            
            infinite: true,
            autoplay:true,
            autoplaySpeed:2000,
        
    
            });





  });