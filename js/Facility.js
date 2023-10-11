function doFirst() {
    const posterRestaurant = document.querySelector('.posterRestaurant')
    const posterGiftShop = document.querySelector('.posterGiftShop')

    const penguinLeft = document.querySelector('.penguinLeft')
    const penguinUpright = document.querySelector('.penguinUpright')
    const penguinRight = document.querySelector('.penguinRight')

    const posterRestaurantOcclusion = document.querySelector('.posterRestaurantOcclusion')
    const posterGiftShopOcclusion = document.querySelector('.posterGiftShopOcclusion')

    // 滑鼠移到餐廳
    posterRestaurant.addEventListener('mousemove', function () {

        penguinLeft.style.opacity = 1;
        penguinUpright.style.opacity = 0;
        penguinRight.style.opacity = 0;
        posterRestaurantOcclusion.style.opacity = 0;
    });

    //滑鼠移到禮品店
    posterGiftShop.addEventListener('mousemove', function () {

        penguinRight.style.opacity = 1;
        penguinUpright.style.opacity = 0;
        penguinLeft.style.opacity = 0;
        posterGiftShopOcclusion.style.opacity = 0;
    });

    //滑鼠移到左企鵝上
    penguinLeft.addEventListener('mousemove', function () {

        penguinRight.style.opacity = 0;
        penguinUpright.style.opacity = 1;
        penguinLeft.style.opacity = 0;
        posterRestaurantOcclusion.style.opacity = 0.4;
        posterGiftShopOcclusion.style.opacity = 0.4;
    });

    //滑鼠移到右企鵝上
    penguinRight.addEventListener('mousemove', function () {

        penguinRight.style.opacity = 0;
        penguinUpright.style.opacity = 1;
        penguinLeft.style.opacity = 0;
        posterRestaurantOcclusion.style.opacity = 0.4;
        posterGiftShopOcclusion.style.opacity = 0.4;
    });
}

window.addEventListener('load', doFirst);


