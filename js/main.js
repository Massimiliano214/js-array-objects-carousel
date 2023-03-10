const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



const listImg = document.querySelector(".list_img");

let wrapCont = "";
for (let i = 0; i < images.length; i++) {
    const insertImg =
    `
        <div class="image d_none">
            <img class="photo" src="${images[i].image}">
            <div class="text">
                <h2>${images[i].title}</h2>
                <p>${images[i].text}</p>
            </div>
        </div>    
    `;

    wrapCont += insertImg;
    
};

listImg.innerHTML = wrapCont;

const wrapImgDom = document.getElementsByClassName("image");

let activeImg = 0;

wrapImgDom[activeImg].classList.add("d_block");

const nextImg = document.querySelector(".down_button");
const backImg = document.querySelector(".up_button");

const thumbDom = document.querySelector(".Thumbnails");

let thumbImg = document.querySelectorAll(".thumbImg");
for (let i = 0; i < images.length; i++) {
    thumbDom.innerHTML += 
    `
        <div class="thumbImg">
            <img class="photo" src="${images[i].image}">
            
        </div>    
    `;

};
console.log(thumbDom);

/*
for (let i = 0; i < thumbImg.length; i++) {
    thumbImg[i].addEventListener ("click",
        function() {
            thumbImg[i].classList.add("d_none");
            const insertImg = thumbImg[i];
            wrapCont += insertImg;
            
            console.log(insertImg);
            console.log(wrapCont);
        }  
        


    );   
}
*/

nextImg.addEventListener ("click",
    function() {
        if (activeImg < wrapImgDom.length - 1) {
            wrapImgDom[activeImg].classList.remove("d_block");

            activeImg++;

            wrapImgDom[activeImg].classList.add("d_block");

    

        } else if (activeImg >= wrapImgDom.length - 1) {
            wrapImgDom[activeImg].classList.remove("d_block");

            activeImg = 0;

            wrapImgDom[activeImg].classList.add("d_block");
        }
        

    }  
     


);


backImg.addEventListener ("click",
    function() {
        if (activeImg > 0) {
            wrapImgDom[activeImg].classList.remove("d_block");

            activeImg--;

            wrapImgDom[activeImg].classList.add("d_block");

        } else if (activeImg == 0) {
            wrapImgDom[activeImg].classList.remove("d_block");

            activeImg = wrapImgDom.length - 1;

            wrapImgDom[activeImg].classList.add("d_block");
        }
        
    }


);


const clock = setInterval(myFunction, 3000);




function myFunction() {
    if (activeImg < wrapImgDom.length - 1) {
        wrapImgDom[activeImg].classList.remove("d_block");

        activeImg++;

        wrapImgDom[activeImg].classList.add("d_block");



    } else if (activeImg >= wrapImgDom.length - 1) {
        wrapImgDom[activeImg].classList.remove("d_block");

        activeImg = 0;

        wrapImgDom[activeImg].classList.add("d_block");
    }
}




invertiDom = document.getElementById("fine");






invertiDom.addEventListener("click", 
function() {
    clearInterval(clock);
    const ivertedClock = setInterval(invertedInterval, 3000);
}
);

 function invertedInterval() {
    if (activeImg > 0) {
        wrapImgDom[activeImg].classList.remove("d_block");

        activeImg--;

        wrapImgDom[activeImg].classList.add("d_block");

    } else if (activeImg == 0) {
        wrapImgDom[activeImg].classList.remove("d_block");

        activeImg = wrapImgDom.length - 1;

        wrapImgDom[activeImg].classList.add("d_block");
    }}


