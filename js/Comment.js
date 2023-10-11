function doFirst() {

    const Comment = document.getElementById('Comment');

    /*top區域*/
    const squidB = document.getElementById('squidB');
    const squidA = document.getElementById('squidA');
    const seaweedTop = document.getElementById('seaweedTop');
    const snowTop = document.getElementById('snowTop');

    /*Right區域*/
    const squidD = document.getElementById('squidD');
    const squidC = document.getElementById('squidC');
    const seaweedRight = document.getElementById('seaweedRight');
    const snowRight = document.getElementById('snowRight');

    /*Bottom區域*/
    const squidG = document.getElementById('squidG');
    const squidF = document.getElementById('squidF');
    const squidE = document.getElementById('squidE');
    const seaweedBottom = document.getElementById('seaweedBottom');
    const snowBottom = document.getElementById('snowBottom');

    /*Left區域*/
    const squidI = document.getElementById('squidI');
    const squidH = document.getElementById('squidH');
    const seaweedLeft = document.getElementById('seaweedLeft');
    const snowLeft = document.getElementById('snowLeft');

    /*滑鼠定位正中央*/
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    document.addEventListener('mousemove', (e) => {

        const mouseX = e.clientX - initialX;
        const mouseY = e.clientY - initialY;


        document.addEventListener('mousemove', (e) => {

            const topMoveX = e.clientX / 20;
            const topMoveY = e.clientY / 20;


            /*top區域*/
            squidB.style.transform = `translate(${topMoveX}px,${topMoveY}px)`;
            squidA.style.transform = `translate(${topMoveX * 0.5}px,${topMoveY * 0.5}px)`;
            seaweedTop.style.transform = `translate(${topMoveX * 0.2}px,${topMoveY * 0.2}px)`;
            snowTop.style.transform = `translate(${topMoveX * 1}px,${topMoveY * 1}px)`;

            /*Right區域*/
            squidD.style.transform = `translate(${topMoveX}px,${topMoveY}px)`;
            squidC.style.transform = `translate(${topMoveX * 1}px,${topMoveY * 1}px)`;
            seaweedRight.style.transform = `translate(${topMoveX * 0.5}px,${topMoveY * 0.5}px)`;
            snowRight.style.transform = `translate(${topMoveX * 1}px,${topMoveY * 1}px)`;

            /*Bottom區域*/
            squidG.style.transform = `translate(${topMoveX}px,${topMoveY}px)`;
            squidF.style.transform = `translate(${topMoveX * 0.5}px,${topMoveY * 0.5}px)`;
            squidE.style.transform = `translate(${topMoveX * 0.5}px,${topMoveY * 0.5}px)`;
            seaweedBottom.style.transform = `translate(${topMoveX * 0.2}px,${topMoveY * 0.2}px)`;
            snowBottom.style.transform = `translate(${topMoveX * 1}px,${topMoveY * 1}px)`;

            /*Left區域*/
            squidI.style.transform = `translate(${topMoveX}px,${topMoveY}px)`;
            squidH.style.transform = `translate(${topMoveX * 1}px,${topMoveY * 1}px)`;
            seaweedLeft.style.transform = `translate(${topMoveX * 0.5}px,${topMoveY * 0.5}px)`;
            snowLeft.style.transform = `translate(${topMoveX * 1}px,${topMoveY * 1}px)`;

            const titleMoveX = e.clientX / 2;
            const titleMoveY = e.clientY / 2;

            Comment.style.transform = `translate(${titleMoveX * 0.5}px,${titleMoveY * 0.5}px)`;
        });
    })
}
window.addEventListener('load', doFirst);