import React from 'react'

function UserInforForm({ setUserData }) {

    // const handleChangeName = (e) => {
    //     let currentValue = e.target.value

    //     setUserData((currentInfo) => ({
    //         name: currentValue,
    //         email: currentInfo.email
    //     }))
    // }

    // const handleChangeEmail = (e) => {
    //     let currentValue = e.target.value

    //     setUserData((currentInfo) => ({
    //         name: currentInfo.name,
    //         email: currentValue
    //     }))
    // }


    const handleChange = (e) => {
        let currentValue = e.target.value

        setUserData((currentInfo) => ({
            ...currentInfo,
            [e.target.name]: currentValue
        }))
    }


    return (
        <>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />
            </div>
        </>
    )
}

export default UserInforForm