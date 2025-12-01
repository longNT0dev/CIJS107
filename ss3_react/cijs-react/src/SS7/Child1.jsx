import React, { useContext } from 'react'
import Child2 from './Child2.jsx'
import UserContext from './contexts/UserContext.js'

function Child1() {
    const { user } = useContext(UserContext)

    return (
        <>
            <div>Đây là component Child1, xin chào {user.name} </div>
            <Child2></Child2>
        </>

    )
}

export default Child1