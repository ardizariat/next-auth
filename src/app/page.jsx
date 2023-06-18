import Link from 'next/link'

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/user">User</Link>
                </li>
            </ul>
        </div>
    )
}
