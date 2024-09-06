import { ReactNode } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </div>
    )
}

export default AuthLayout
