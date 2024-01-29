export default function CommentBox(...arr) {
    // *** *** *** Variables *** *** ***
    const IMG_SRC = "./images/";

    let $template = document.getElementById("comment-box").content,
        $fragment = document.createDocumentFragment();
        
    // *** *** *** Execution *** *** ***
    arr.forEach(({user, content}) => {
        let $clone = document.importNode($template, true),
            $userImg = $clone.querySelector("[data-user-img]"),
            $userName = $clone.querySelector("[data-user-name]"),
            $userLabel = $clone.querySelector("[data-user-label]"),
            $content = $clone.querySelector("[data-content]");
        $userImg.src = IMG_SRC + user.img;
        $userImg.alt = user.name;
        $userName.textContent = user.name;
        $userLabel.textContent = user.label;
        $content.textContent = `" ${content} "`;
        $fragment.append($clone);        
    });
    return $fragment;
};
