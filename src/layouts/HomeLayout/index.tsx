import { ReactNode } from 'react'

import Header from '~/layouts/components/Header'
import Footer from '~/layouts/components/Footer'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <main className="min-h-screen mt-[75px] max-w-screen-xl  mx-auto px-3">{children}</main>
            <Footer />
        </div>
    )
}

export default HomeLayout
