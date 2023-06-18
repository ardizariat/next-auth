'use client'
import { useSession } from 'next-auth/react'
import axios from '../axios'

export const useRefreshToken = () => {
    const { data: session } = useSession()

    const refreshToken = async () => {
        const { data } = await axios.post('/refresh-token', {
            refreshToken: session?.user?.refreshToken
        })

        if (session) session.user.accessToken = data?.result?.token
    }
    return refreshToken
}
