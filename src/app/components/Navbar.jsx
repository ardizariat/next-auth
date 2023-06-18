'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import styles from './style.css'

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <div className={styles.navbar}>
            {session?.user ? (
                <div className={styles.login}>
                    <p>{session?.user?.name}</p>
                    <button onClick={() => signOut()}>Logout</button>
                </div>
            ) : (
                <div className={styles.login}>
                    <button onClick={() => signIn()}>Login</button>
                </div>
            )}
        </div>
    )
}

export default Navbar
