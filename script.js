// Contact Form validation

const contactForm = document.querySelector('form[name=contactForm]');
const formValidation = document.querySelector('.formValidation')
const validationText = document.querySelector('.validationText')
const userName = document.querySelector('input[name=userName]')
const email = document.querySelector('input[name=email]')
const userMessage = document.querySelector('textarea[name=userMessage]')


contactForm.addEventListener('submit', function(event){

    event.preventDefault();

    // console.log(event);

    // console.log('Form has been submitted!');

    if(userMessage.value && email.value && userName.value){

        formValidation.className = 'submitSuccess';
        // print success message
        validationText.innerHTML = "Thank you! Your message was successfully sent.";
        
    } else{
        formValidation.className = 'submitError';
        // print error message
        validationText.innerHTML = "Error! Please complete all required fields";
    }
            // clearing up the form fields when submitted 
            userMessage.value = '';
            email.value = '';
            userName.value= '';

 
});



// Attempted Image Carousel

// const gallery = document.querySelector(".gallery");
// // const images = Array.from(gallery.children);
// const buttons = document.querySelectorAll(".carousel-button")
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");
// // const imgCount = images.length
// let imgIndex = 0;
// // const activeImg = gallery.querySelector(".active")

// //Put our inages in an array
// // let images = [];
// // images[0] = {
// //     src: "./the-restaurant-mall-assets/gallery-image-1.jpg",
// //     alt: "patio string lights with edison bulbs at night"
// // };
// // images[1] = {
// //     src: "./the-restaurant-mall-assets/gallery-image-2.jpg",
// //     alt: "squared red 'Take Away' neon sign outside restaurant window"
// // };
// // images[2] = {
// //     src: "./the-restaurant-mall-assets/gallery-image-3.jpg",
// //     alt: "dishes displayed in bowls on set wooden table viewed from above" 
// // };
// // images[3] = {
// //     src: "./the-restaurant-mall-assets/gallery-image-4.jpg",
// //     alt: "sea food pasta dish viewed from above"
// // };
// // images[4] = {
// //     src: "./the-restaurant-mall-assets/gallery-image-5.jpg",
// //     alt: "plated sandwich with brick wall background"
// // };

// // console.log(images)

// nextButton.addEventListener('click', e => {
//     console.log("Next image")
//     // moveToNextImg(){}
        
//     // };

// })

// prevButton.addEventListener('click', e => {
//     console.log("Previous image")
//     // moveToPrevImg();

// });

// // function moveToNextImg() {
// //     if (imgIndex === imgCount - 1) {

// //     }
// // }

// // function moveToPrevImg() {
// //     console.log('hello prev')
// // }
