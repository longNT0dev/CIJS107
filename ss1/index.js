// let name = prompt("Nhập tên của bạn")
// let age = prompt("Nhập tuổi của bạn")
// let job = prompt("Nhập nghề nghiệp của bạn")

// import { sum } from "./numbers.module.js";
import numberModules from "./numbers.module.js";

// alert("Xin chào " + name + ", bạn " + age + " tuổi và bạn làm nghề " + job)


// Literal template
// alert(`Xin chào ${name}, bạn ${age} tuổi và bạn làm nghề ${job}`)


// Function: Tập hợp nhiều câu lệnh được gom nhóm lại với nhau để thực hiện 1 nhiệm vụ/ 1 công việc cụ thể
// => Giúp tái sử dụng code nhiều lần, giúp code gọn gàng, dễ đọc, dễ bảo trì

// Hãy cho người dùng nhập 2 số a, b. Thực hiện tính tổng 2 số nếu 2 số đó là số dương, chẵn
// let a = +prompt("Nhập số a") // Kiểu dữ liệu nhận được là 1 string
// let b = +prompt("Nhập số b")

// if(a > 0 && b > 0 && a % 2 === 0 && b % 2 === 0) {
//     console.log(`Tổng của 2 số ${a} và ${b} là ${a + b}`)
// } else {
//     console.log("Vui lòng nhập số dương, chẵn")
// }

// Hãy cho người dùng nhập 2 số c, d. Thực hiện tính tổng 2 số nếu 2 số đó là số dương, chẵn
// let c = +prompt("Nhập số c") // Kiểu dữ liệu nhận được là 1 string
// let d = +prompt("Nhập số d")

// if (c > 0 && d > 0 && c % 2 === 0 && d % 2 === 0) {
//     console.log(`Tổng của 2 số ${c} và ${d} là ${c + d}`)
// } else {
//     console.log("Vui lòng nhập số dương, chẵn")
// }

// Khai báo hàm

// Regular function
// function tinhTongSoDuongChan(a, b) {
//     // TODO: Thân hàm => Xử lý logic
//     if (a > 0 && b > 0 && a % 2 === 0 && b % 2 === 0) {
//         console.log(`Tổng của 2 số ${a} và ${b} là ${a + b}`)
//     } else {
//         console.log("Vui lòng nhập số dương, chẵn")
//     }
// }

// // Arrow function
// const tinhTongSoDuongChan = (a, b) => {
//     // TODO: Thân hàm => Xử lý logic
//     if (a > 0 && b > 0 && a % 2 === 0 && b % 2 === 0) {
//         console.log(`Tổng của 2 số ${a} và ${b} là ${a + b}`)
//     } else {
//         console.log("Vui lòng nhập số dương, chẵn")
//     }
// }

// Sử dụng hàm
// tinhTongSoDuongChan(4, 6)
// tinhTongSoDuongChan(12, 8)

// const tongCuaNSo = (num1, num2, ...args) => {
//     console.log(num1)
//     console.log(num2)
//     console.log(args)
//     let tong = 0

//     for(let i = 0; i< args.length; i++) {
//         tong += args[i]
//     }


//     console.log(`Tổng của các số là: ${tong}`)
// }

// tongCuaNSo(2, 4, 6, 8, 10)

// Destructuring

// const user = {
//     username: "admin",
//     password: "123456",
//     firstName: "Nguyen",
//     lastName: "Long"
// }

// Hãy viết 1 hàm để in ra thông tin username, password từ object và thực hiện in ra 1 tin nhắn
// "Xin chào firstName lastName, Bạn đã đăng nhập với username: username và password: password"


// const { password, firstName, lastName, username: usernameNew } = user

// console.log(usernameNew, password, firstName, lastName)

// const hienThiThongTinDangNhap = ({ username, password, firstName, lastName }) => {
//     console.log(`Username: ${username}, Password: ${password}`)
//     console.log(`Xin chào ${firstName} ${lastName}, Bạn đã đăng nhập với username: ${username} và password: ${password}`)
// }

// const arr = ["JavaScript", "PHP", "Python", "Java", "C++"]
// const [lang1, lang2, ...otherLangs] = arr // ["JavaScript", "PHP", "Python", "Java", "C++"]
// console.log(lang1, lang2, otherLangs)

numberModules.sum(4, 6)