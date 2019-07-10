function renderEmptyBoard(board) {
    for (var i = 0; i < 64; i++) {
        board.appendChild(document.createElement("div"))
            .className = parseInt((i / 8) + i) % 2 === 0 ? "white-cell" : "black-cell";
    }
}

class BoardState {
    constructor(cellCount) {
        this.state = (new Array(cellCount)).fill(0);
    }

    set(index, value) {
        this.state[index] = value;
    }

    toQueryParams() {
        const state = this.state;
        const length = state.length;

        const result = [];

        for (let i = 0; i < length; i++) {
            const value = state[i];

            if (value > 0) {
                result.push(`${i}=${value}`);
            }
        }

        return result;
    }
}