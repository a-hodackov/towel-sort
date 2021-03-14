// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    return matrix
        .map((value, index) => {
            if (index % 2 === 0) {
                return value;
            } else {
                return value.reverse();
            }
        })
        .flat();
};
