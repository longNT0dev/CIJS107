
// Tính toán số học
const sum = (a , b) => console.log(a + b)

const sub = (a , b) => console.log(a - b)

const mul = (a , b) => console.log(a * b)

const div = (a , b) => console.log(a / b)



// Những hàm trong module cần được export để sử dụng ở file khác

// export {
//     sum,
//     sub,
//     mul,
//     div
// }

// Chỉ có thể export default 1 lần trong 1 file
export default {
    sum,
    sub,
    mul,
    div
}