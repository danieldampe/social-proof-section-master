import StarRatingWidget from "./components/StarRatingWidget.js";
import CommentBox from "./components/CommentBox.js";

// *** *** *** Variables *** *** ***
const $ratingSection = document.querySelector(".rating-section"),
    $commentSection = document.querySelector(".comment-section");

const allRatings = [
    {
        source: "Reviews",
        stars: 5
    },
    {
        source: "Report Guru",
        stars: 5
    },
    {
        source: "BestTech",
        stars: 5
    }
];

const allComments = [
    {
        user: {
            name: "Colton Smith",
            label: "Verified Buyer",
            img: "image-colton.jpg"
        },
        content: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
    },
    {
        user: {
            name: "Irene Roberts",
            label: "Verified Buyer",
            img: "image-irene.jpg"
        },
        content: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
    },
    {
        user: {
            name: "Anne Wallace",
            label: "Verified Buyer",
            img: "image-anne.jpg"
        },
        content: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
    }
];

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", async () => {
    $ratingSection.append(await StarRatingWidget(...allRatings));
    $commentSection.append(CommentBox(...allComments));
});
