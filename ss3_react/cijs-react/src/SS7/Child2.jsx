import React, { useContext } from 'react'
import UserContext from './contexts/UserContext'

function Child2() {
    const { user } = useContext(UserContext)
    return (
        <>
            <div>Đây là component Child2, xin chào {user.name}</div>
        </>
    )
}

export default Child2