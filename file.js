const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let getImgs = $$(".content__best-left-img");
let selectBoxs = $$(".content__select-box")

    selectBoxs.forEach((value, index) => {
        let getImg = getImgs[index];
        value.onclick =  function() {
                $(".content__best-left-img.content__select-js").classList.remove("content__select-js");
                getImg.classList.add("content__select-js");
        
                $(".content__select-box.content__box-color").classList.remove("content__box-color");
                value.classList.add("content__box-color");
            }

})

var imgSlider = $("#img-slider");
let imgs = ["./img/bestitem1.png", "./img/bestitem2.png", "./img/bestitem3.png"];

var i = 1;

function sliderShowAuto() {
    imgSlider.setAttribute("src", imgs[i]);
    i++;
    if(i == imgs.length) {
        i= 0;
    }

} 



setInterval(sliderShowAuto, 10000);



// slider

window.addEventListener("load", function() {
    const sliderWrap = $(".content__viewer-list");
    const sliderItems = $$(".content__viewer-item");
    const sliderNext = $(".content__direction-next");
    const sliderBack = $(".content__direction-back");
    
    const sliderItemsWidth = sliderItems[0].offsetWidth;
    
    const sliderItemsLength = sliderItems.length;
    let positionX = 0;
    let index = 0;
    
    
    sliderNext.addEventListener("click", function() {
        sliderHandler(1);
    })
    sliderBack.addEventListener("click", function() {
        sliderHandler(-1)
    })

    function sliderHandler(direction) {
        
        if(direction === 1) {
            if(index >= sliderItemsLength -4) {
                index = sliderItems.length -4
                return;
            };
            positionX = positionX - sliderItemsWidth;
            sliderWrap.style = `transform: translateX(${positionX}px)`;
            index++;
        } else if (direction === -1) {
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemsWidth;
            sliderWrap.style = `transform: translateX(${positionX}px)`;
            index--;

        }
    }
    
})



window.addEventListener("load", function() {
    const sliderWrap1 = $(".content__latest-post-wrap")
    const sliderPostSubs = $$(".content__latest-post-sub")
    const sliderNext1 = $(".content__slider-sub-next");
    const sliderBack1 = $(".content__slider-sub-back");

    const sliderItemsWidth1 = sliderPostSubs[0].offsetWidth
    const sliderItemLength = sliderPostSubs.length;
    
    let index = 0;
    let positionX = 0;
    let marginRight = 0;

    sliderNext1.addEventListener("click", function() {
        sliderHand(1);
    })

    sliderBack1.addEventListener("click", function() {
        sliderHand(-1);
    })

    function sliderHand(direct) {
        if(direct === 1) {
            if(index >= sliderItemLength - 3) {
                index = sliderItemLength -3
                return;
            }
            positionX = positionX - sliderItemsWidth1;
      
            sliderWrap1.style = `transform: translateX(${positionX}px)`;
            
            
            
            index++
        } else if(direct === -1) {
            if(index <= 0) {
                index = 0
                return;
            }
            positionX = positionX + sliderItemsWidth1;
            

            sliderWrap1.style = `transform: translateX(${positionX}px)`;
           
            index--
        }
    }
})


