import Header from '~/layouts/components/Header'
import Footer from '~/layouts/components/Footer'

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <div className="">{children}</div>
            <Footer />
        </div>
    )
}

export default ProfileLayout
