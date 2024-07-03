const cellList = document.querySelectorAll(".play-cage");
const arr = [];


setInterval(function () {
    function getRandom(max) {
        let randomCell = Math.floor(Math.random() * max);

        while (randomCell === arr[0]) {
            randomCell = Math.floor(Math.random() * max);
        };

        arr[0] = randomCell;
        return randomCell;
    };

    const random = getRandom(cellList.length);

    cellList.forEach((element) => {
        element.classList.remove('play-cage-full');
    })
    cellList[random].classList.add('play-cage-full');
}, 1000);



