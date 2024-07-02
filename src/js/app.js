const cellList = document.querySelectorAll(".play-cage");
const arr = [];


setInterval(function () {
    // const randomCell = Math.floor(Math.random() * (cellList.length - 1));
    // const result = cellList[randomCell];

    function getRandom(max) {
        let randomCell = Math.floor(Math.random() * max);

        while (randomCell === arr[0]) {
            randomCell = Math.floor(Math.random() * max);
        };

        arr[0] = randomCell;
        return randomCell;
    }

    const random = getRandom(cellList.length);


    cellList.forEach((element) => {
        element.classList.remove('play-cage-full')
    })
    cellList[random].classList.add('play-cage-full')
    // previousCell = result;

}, 1000);



