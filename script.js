// // swiper carroussel

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


  /* ==================================================
            # Testimonial Carousel
         ===============================================*/
         const testimonial2 = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: true,

			pagination: {
                el: 'swiper-pagination',
              
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: "swiper-button-prev",
                prevEl: "swiper-button-next"
            },

			breakpoints: {
				991: {
                    slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,
                },
                1200: {
                    slidesPerView: 2.5,
					spaceBetween: 60,
                },
				1800: {
                    slidesPerView: 2.8,
					spaceBetween: 80,
                },
            },

            // And if we need scrollbar
            /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
        });


     
        // Fonction pour gérer le chargement de la page
       function handlePageLoad() {
            // Masquer le loader et afficher le contenu après un délai
            setTimeout(function () {
                document.getElementById('loader').style.display = 'none'; // Masquer le loader
                document.getElementById('content').style.display = 'block'; // Afficher le contenu
            }, 1000); // Délai de 2000 ms (2 secondes)
        }

        // Écouteur d'événements pour l'événement 'load' de la fenêtre
        window.addEventListener('load', handlePageLoad);
   

      