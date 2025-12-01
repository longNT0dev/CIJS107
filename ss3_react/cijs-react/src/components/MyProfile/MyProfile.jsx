import React, { useEffect } from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router'

function MyProfile() {
    const profileId = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    console.log(profileId)

    useEffect(() => {
        console.log(searchParams.get("c"))
        // Kiểm tra trạng thái đăng nhập
    }, [])

    return (
        <>
            <Outlet></Outlet>
            <h1>MyProfile</h1>


        </>
    )
}

export default MyProfile