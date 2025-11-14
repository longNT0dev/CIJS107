// import React, { useState } from 'react'

// function SS4() { // Component (Object)
//   // let age = 10;

//   // useState là 1 hook, 1 hook thì luôn bắt đầu bằng từ use
//   // useState trả về 1 mảng gồm 2 giá trị
//   // Giá trị đầu tiên chính là giá trị của state
//   // Giá trị thứ là 1 hàm dùng để thay đổi giá trị của state
//   let [age, setAge] = useState(10)

//   const handleInc = () => {
//     // age++;
//     // Hàm setState là 1 hàm bất đồng bộ => Nó không thực hiện tuần tự 
//     // => Chạy 1 lần, chính vì thế nó sẽ chỉ tăng lên 1
//     setAge(age + 1)
//     // setAge(age + 1)

//     // Nói cho React để thực hiện tuần tự với giá trị mới nhất
//     // let prevAge = age (mới nhất)
//     // setAge((prevAge) => prevAge + 1)
//     // setAge((prevAge) => prevAge + 1)
//   };

//   console.log(age);

//   return (
//     <div className="app">
//       <h1>Hello mọi người!</h1>
//       <p>Mỗi năm tôi sẽ được tăng 1 tuổi</p>
//       <p>Hiện tại tôi: {age} tuổi!</p>
//       {/* <button onClick={() => handleIncAge(5)}>Tăng tuổi</button> */}

//       <button onClick={() => handleInc()}>Tăng tuổi</button>
//     </div>
//   )
// }




// export default SS4


// import React, { useState } from 'react'

// function SS4() {
//   const [color, setColor] = useState("rgb(0,0,0)");

//   const toggleSwitch = () => {
//     // // Red, Green, Blue
//     // 0 => 255
//     // Tạo ra các giá trị ngẫu nhiên trong đoạn trên
//     let r = Math.floor(Math.random() * 255) // 0, 255
//     let g = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255)


//     setColor(`rgb(${r}, ${g}, ${b})`)
//     // setIsOn(!isOn);
//   };

//   return (
//     <div>
//       <div>
//         <span>Đèn:</span>
//         <div
//           style={
//             {
//               width: "60px",
//               height: "60px",
//               borderRadius: "50%",
//               border: "1px solid black",
//               backgroundColor: color
//             }
//           }></div>
//       </div>
//       <button onClick={toggleSwitch}>Chuyển trạng thái</button>
//     </div>
//   );
// }

// export default SS4


// import React, { useState } from 'react'

// function SS4() {
//   // Lưu giá trị email
//   const [email, setEmail] = useState("");
//   // Trạng thái hợp lệ của email
//   const [isValid, setIsValid] = useState(true);

//   // Hàm kiểm tra định dạng email
//   const validateEmail = (email) => {
//     // Biểu thức chính quy kiểm tra email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // Kiểm tra email khớp với regex
//     return emailRegex.test(email);
//   };

//   // Hàm xử lý khi người dùng nhập giá trị trên ô input
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     // Cập nhật email vào state
//     setEmail(value);
//     // Kiểm tra email hợp lệ hay không
//     setIsValid(validateEmail(value));
//   };

//   const getEmailMessage = (email, isValid) => {
//     if (email) {
//       if (isValid) {
//         return "Email hợp lệ!"
//       } else {
//         return "Email không hợp lệ. Vui lòng kiểm tra lại."
//       }
//     } else {
//       return "Vui lòng nhập email để kiểm tra."
//     }
//   }

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Kiểm tra định dạng Email</h1>
//       <input
//         type="text"
//         placeholder="Nhập email của bạn"
//         // mỗi khi state email thay đổi, component sẽ thực hiện re-render
//         // và cung cấp giá trị mới cho ô input
//         value={email}
//         onChange={handleInputChange}
//         style={{
//           padding: "10px",
//           fontSize: "16px",
//           border: `2px solid ${isValid ? "green" : "red"}`,
//         }}
//       />
//       <p style={{ color: isValid ? "green" : "red", marginTop: "10px" }}>
//         {
//           getEmailMessage(email, isValid)
//         }
//       </p>
//     </div>
//   );
// }

// export default SS4

import React, { useState } from 'react'
import UserInforForm from '../components/UserInforForm/UserInforForm'

function SS4() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: ""
  })
  const [isSubmit, setIsSubmit] = useState(false)

  return (
    <>
      <UserInforForm setUserData={setUserInfo}></UserInforForm>

      <button onClick={() => setIsSubmit(true)}>Submit</button>

      {isSubmit && <div>
        <span>Name: {userInfo.name}</span><br />
        <span>Email: {userInfo.email}</span>
      </div>}

    </>
  )
}

export default SS4