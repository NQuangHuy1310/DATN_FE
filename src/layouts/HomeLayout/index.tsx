import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default HomeLayout
