import React, { useState } from 'react'
import Child1 from './Child1.jsx'
import { useUserContext } from './contexts/UserContext.js'



function SS7() {
    const { user, setUser } = useUserContext()
    return (
        <>
            Đây là component SS7, xin chào {user.name} <br />
            <button onClick={() => setUser({
                isLogin: true,
                name: "Long",
                email: "mind@edu.vn"
            })}>Thay đổi tên</button>
            <Child1></Child1>
        </>
    )
}

export default SS7