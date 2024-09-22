import Header from '~/layouts/TeacherLayout/components/Header'
import Sidebar from '~/layouts/TeacherLayout/components/Sidebar'

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>
                <Sidebar />
                <div className="pt-10 mb-18 mx-60 flex-1">{children}</div>
            </main>
        </div>
    )
}

export default TeacherLayout
