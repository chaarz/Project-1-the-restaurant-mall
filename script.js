// 1. Added UI element: Contact Form validation (on Contact page)

const contactForm = document.querySelector('form[name=contactForm]');
const formValidation = document.querySelector('.formValidation')
const validationText = document.querySelector('.validationText')
const userName = document.querySelector('input[name=userName]')
const email = document.querySelector('input[name=email]')
const userMessage = document.querySelector('textarea[name=userMessage]')

if (contactForm){
    contactForm.addEventListener('submit', function(event){

        event.preventDefault();

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
}

// 2. Added UI element: Make new comments appear on the Blog page


const commentForm = document.querySelector('form[name=commentForm]');
const userComment = document.querySelector('textarea[name=userComment]')
const comment2 = document.querySelector(".comment2");

// after user has completed the form, post their comment. Use 'submit' event listener

if(commentForm){
    commentForm.addEventListener('submit', function(event){

        event.preventDefault();
    
        if (userComment.value && email.value && userName.value){
    // if all fields are completed the comment is posted on the page
        // create the <div> with the comment content
        const newComment = document.createElement('div')
        // add the .comments class to the newComment
        newComment.classList.add("comment")
        // modify the content of the newComment
        newComment.innerHTML = `
        <div class="commentImg">
            <img src="./the-restaurant-mall-assets/comment-1.jpg" alt="${userName.value}'s profile picture">
        </div>
        <div class="commentText">
        <p><span>Wednesday September 28, 2022 by ${userName.value}</span></p>
        <p>${userComment.value}</p>
        </div>
        `
        // add newComment to the div with class of .comments as the element before the next div i.e. before the formContainer so it appears after the last comment currently present on the page
        const formContainer = document.querySelector('.formContainer')
        formContainer.insertAdjacentElement('beforebegin', newComment);
        
        } else{
            // create an error alert 
            alert("Error! To post your comment, please complete all required fields")
        }

        // clearing up the form fields when submitted 
        userComment.value = '';
        email.value = '';
        userName.value= '';
    });
}



//     <div class="comment comment1">
//     <div class="commentImg">
//         <img src="./the-restaurant-mall-assets/comment-1.jpg" alt="Ali's profile picture">
//     </div>
//     <div class="commentText">
//         <p><span>Tuesday October 9th, 2019 by Ali</span></p>
//         <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Done euismod scelerisque igula. Maecenas eu varius risus..</p>
//     </div>
// </div> <!--comment1 ends-->


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
