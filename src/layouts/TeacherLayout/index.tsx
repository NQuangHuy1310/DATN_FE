import Header from '~/layouts/TeacherLayout/components/Header'
import Sidebar from '~/layouts/TeacherLayout/components/Sidebar'

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>
                <Sidebar />
                <div className="max-w-5xl pt-10 mb-18 ml-72">{children}</div>
            </main>
        </div>
    )
}

export default TeacherLayout
