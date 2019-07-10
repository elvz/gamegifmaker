(function () {
    const board = document.getElementById("board");

    renderEmptyBoard(board);

    const query = new URLSearchParams(window.location.search.substring(1));
    console.log(window.location.search.substring(1))

    const blacks = document.querySelectorAll(".black-cell");

    for (let i = 0; i < 32; i++) {
        if (query.has(i)) {
            const value = parseInt(query.get(i), 10);

            const cell = findCellByValue(value);

            if (cell.value > 0) {
                blacks[i].setAttribute("style", cell.style);
            }
        }
    }

    document.getElementById("js-fb-share-button").setAttribute("data-href", `${window.location.href}`);

    domtoimage.toPng(board)
        .then(function (dataUrl) {
            const image = new Image();
            image.src = dataUrl;
            board.innerHTML = "";
            board.appendChild(image).setAttribute("id", "tactic-img")

        })
        .catch(function (error) {
            console.error("oops, something went wrong!", error);
        });
    
    const ogUrl = document.getElementById("og-url");
    ogUrl.setAttribute("content", `${window.location.href}`); 
})();

function Copy() {
    var Url = document.getElementById("input-url");
    Url.value = window.location.href;
    Url.focus();
    Url.select();  
    document.execCommand("Copy");
}