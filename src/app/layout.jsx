import Navbar from './components/Navbar'
import Provider from './Provider'
export const metadata = {
    title: 'Home',
    description: 'Home'
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <Navbar />
                    {children}
                </Provider>
            </body>
        </html>
    )
}
