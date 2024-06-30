const cellList = document.querySelectorAll(".play-cage")
let previousCell = null;


setInterval(function () {
    const randomCell = Math.floor(Math.random() * (cellList.length - 1));
    const result = cellList[randomCell];

    if(result !== previousCell) {
        cellList.forEach((element) => {
            element.classList.remove('play-cage-full')
        })
        result.classList.add('play-cage-full')
        previousCell = result;
    }
}, 1000);



