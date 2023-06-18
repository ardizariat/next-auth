'use client'
import useAxiosAuth from '@/lib/hooks/useAxiosAuth'
import { useState } from 'react'

export default function HomePage() {
    const [users, setUsers] = useState([])
    const axiosAuth = useAxiosAuth()
    const fetchUsers = async () => {
        try {
            setUsers([])
            const { data } = await axiosAuth.get('/user')
            setUsers(data?.result?.data)
        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={fetchUsers}>Get User</button>
            {users &&
                users?.map((user, index) => (
                    <ul key={index}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                    </ul>
                ))}
        </div>
    )
}
