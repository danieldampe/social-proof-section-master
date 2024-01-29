import ajax from "../helpers/ajax.js";

export default function StarRatingWidget(...arr) {
    // *** *** *** Variables *** *** ***
    const ICON_STAR = "./images/icon-star.svg";

    let $template = document.getElementById("star-rating-widget").content,
        $fragment = document.createDocumentFragment();

    // *** *** *** Execution *** *** ***
    return ajax({
        url: ICON_STAR,
        sucess: data => {
            arr.forEach(({source, stars}) => {
                let $clone = document.importNode($template, true),
                    $source = $clone.querySelector("[data-source]"),
                    $starsNum = $clone.querySelector("[data-stars-num]"),
                    $stars = $clone.querySelector("[data-stars]");
                let fragment = "";
                for (let i = 0; i < stars; i++) fragment += data;
                $stars.innerHTML = fragment;
                $starsNum.textContent = stars;
                $source.textContent = source;
                $fragment.append($clone);
            });
            return $fragment;
        }
    });
};
