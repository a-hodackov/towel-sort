// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    return matrix
        .map((val, indx) => {
            if (indx % 2 === 0) {
                return val;
            } else {
                return val.reverse();
            }
        })
        .flat();
};
