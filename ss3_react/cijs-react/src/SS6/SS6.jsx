// import React, { useEffect, useState } from 'react'

// function SS6() {
//     // Component sẽ render phần HTML trước (Mounting/Mounted) => Sau đó mới chạy useEffect => useEffect nào viết trước sẽ chạy trước


//     const [count, setCount] = useState(0)
//     const [toggle, setToggle] = useState(false)

//     console.log("SS6 render")

//     // useEffect không có dependency => Chạy sau mỗi lần render
//     useEffect(() => {
//         // componentDidMount + componentDidUpdate
//         console.log("SS6 useEffect no dependency")
//     })


//     // useEffect có dependency rỗng => Chỉ chạy 1 lần duy nhất ở giai đoạn Mounting
//     useEffect(() => {
//         // componentDidMount
//         console.log("SS6 useEffect empty dependency")
//     }, [])


//     // useEffect có dependency => Chạy ở giai đoạn Mounting và mỗi khi state trong dependency thay đổi
//     useEffect(() => {
//         // componentDidMount + componentDidUpdate (khi state thay đổi)
//         console.log("SS6 useEffect dependency count")
//     }, [count])


//     console.log("SS6 render sau useEffect")


//     return (
//         <>
//             <div>{count}</div>
//             {toggle && <div>Toggle is ON</div>}
//             <button onClick={() => setCount(count + 1)}>Increase</button><br />
//             <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
//         </>

//     )
// }

// export default SS6


import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'

const BASE_URL = "https://69207ad031e684d7bfcd33b4.mockapi.io"

// ToDoList: CRUD
function SS6() {
    const [todos, setTodos] = useState([])
    // Thêm loading khi gọi API để lấy dữ liệu hoặc thay đổi dữ liệu đó
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const res = await fetch(`${BASE_URL}/todos`)
            const data = await res.json()

            if (Array.isArray(data)) {
                setTodos(data)
            } else {
                alert(data)
            }
        } catch {
            // Nơi xử lý lỗi
        } finally {
            setIsLoading(false)
        }
    }

    // Call API lấy danh sách công việc trong useEffect
    useEffect(() => {
        fetchData()
    }, [])

    const createTodo = () => {
        const newTodo = {
            "createdAt": "2025-11-24T04:35:54.123Z",
            "name": "Edited Todo",
            "dueDate": "2026-11-08T19:09:59.822Z",
            "status": "Success"
        }

        fetch(`${BASE_URL}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(async (res) => {
            // Chạy vào đây khi status code trả về là 200-299
            await fetchData()
        }).catch((error) => {
            // Chạy vào đây khi có lỗi xảy ra status code không phải 200-299
        })
    }

    const editTodo = (id) => {
        const editTodo = {
            "createdAt": "2025-11-24T04:35:54.123Z",
            "name": "Edited Todo",
            "dueDate": "2026-11-08T19:09:59.822Z",
            "status": "Success"
        }

        // Cập nhật dữ liệu
        fetch(`${BASE_URL}/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editTodo)
        }).then(async (res) => {
            // Chạy vào đây khi status code trả về là 200-299
            await fetchData()
        }).catch((error) => {
            // Chạy vào đây khi có lỗi xảy ra status code không phải 200-299
        })
    }


    const deleteTodo = (id) => {
        fetch(`${BASE_URL}/todos/${id}`, {
            method: "DELETE"
        }).then(async (res) => {
            // Chạy vào đây khi status code trả về là 200-299
            await fetchData()
        }).catch((error) => {
            // Chạy vào đây khi có lỗi xảy ra status code không phải 200-299
        })
    }

    return (
        <>
            <button onClick={createTodo}>Thêm todo</button>
            <div className='flex flex-col gap-2'>
                {
                    todos.map((todo, index) => (
                        <div key={`todo-${index + 1}`} className='border border-blue-500'>
                            <h3>{todo.name}</h3>
                            <p>{todo.status}</p>
                            <p>{todo.createdAt}-{todo.dueDate}</p>
                            <button onClick={() => editTodo(todo.id)}>Sửa</button>
                            <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
                        </div>
                    ))
                }
            </div>

            {isLoading && <Spin size="large" percent="auto" fullscreen />}
        </>

    )
}

export default SS6


/*
1. Ví dụ liên quan tới DOM
2. Clean Effect (componentWillUnmount) => Memory Leak
*/