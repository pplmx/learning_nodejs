// sum nums
function total(...nums) {
    return nums.reduce((x, y) => x + y)
}

console.log(total(1, 2, 3, 4))
