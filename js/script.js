
// Swiper JS 
  // Initialize Swiper 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0:{
         slidesPerView: 2,
      },

      200:{
         slidesPerView: 1,
      },


      800:{
         slidesPerView: 2,
      }

   }
  });

  let  list = document.querySelectorAll(".list");
  //console.log(list)
  let itemBox = document.querySelectorAll(".item");
  //console.log(itembox)

  for(i=0; i<list.length; i++){
    list[i].addEventListener('click',function(){
      for(let j=0; j<list.length; j++){
        list[j].classList.remove("active");
      }
      this.classList.add("active");
    }
    )}

    $(document).ready(function(){
      $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
          $('.itemBox').show('1000');
        }
        else{
          $('.itemBox').not('.'+value).hide('1000');
          $('.itemBox').filter('.'+value).show('1000')
        }
      })
    })

    window.addEventListener('scroll', function(){  //scroll 
      let nav = document.querySelector('nav')
       //console.log(navbar)
  
      if(window.pageYOffset  >= 40){
          nav.classList.add('sticky');
         // console.log("hell")
  
      } else{
          nav.classList.remove('sticky')
      }
  
  });


  