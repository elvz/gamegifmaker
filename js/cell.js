const WHITE = 1;
const BLACK = 2;
const WHITE_QUEEN = 3;
const BLACK_QUEEN = 4;

class Cell {
    constructor(value, style) {
        this.value = value;
        this.style = style;
    }
}

const WHITE_CELL = new Cell(WHITE, "background: no-repeat saddlebrown center/80% url(./assets/white-checker.png);");
const BLACK_CELL = new Cell(BLACK, "background: no-repeat saddlebrown center/80% url(./assets/black-checker.png);");
const WHITE_QUEEN_CELL = new Cell(WHITE_QUEEN, "background: no-repeat saddlebrown center/80% url(./assets/white-queen.png);");
const BLACK_QUEEN_CELL = new Cell(BLACK_QUEEN, "background: no-repeat saddlebrown center/80% url(./assets/black-queen.png);");
const NONE_CELL = new Cell(0, "");

function findCellByValue(value) {
    switch (value) {
        case WHITE:
            return WHITE_CELL;
        case BLACK:
            return BLACK_CELL;
        case WHITE_QUEEN:
            return WHITE_QUEEN_CELL;
        case BLACK_QUEEN:
            return BLACK_QUEEN_CELL;
    }

    return NONE_CELL;
}