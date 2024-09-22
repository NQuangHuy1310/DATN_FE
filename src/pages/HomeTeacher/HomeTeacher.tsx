import { Button } from '~/components/ui/button/Button'
import Input from '~/components/ui/input/Input'

interface CourseCardProps {
    image: string
    title: string
    description: string
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, description }) => (
    <div className="flex items-center justify-between border border-black/50 rounded-md shadow-md px-12 pt-8 pb-4 gap-8">
        <div className="flex-shrink-0 w-[42%] flex items-center justify-center">
            <img src={image} alt={title} />
        </div>
        <div className="flex-1 flex flex-col gap-4 items-start">
            <h5 className="text-DXS font-semibold">{title}</h5>
            <p>{description}</p>
            <button className="text-TMD text-interactive-primary-default font-semibold hover:text-interactive-primary-hover hover:underline">
                Bắt đầu
            </button>
        </div>
    </div>
)

const HomeTeacher: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-5">
            <h3 className="text-DMD font-semibold">Khoá học</h3>
            <div className="flex items-center justify-between w-full">
                <Input placeholder="Tìm kiếm khoá học" className="w-[400px]" />
                <Button variant="primary" size="lg" className="text-white">
                    Thêm khoá học mới
                </Button>
            </div>
            <div className="flex flex-col gap-10">
                <CourseCard
                    image="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
                    title="Tạo khoá học thu hút"
                    description="Dù đã giảng dạy nhiều năm hay mới dạy lần đầu, bạn vẫn có thể tạo nên một khóa học hấp dẫn. Chúng tôi đã biên soạn các tài nguyên và phương pháp hay nhất để giúp bạn tiến bộ, bất kể vạch xuất phát của bạn ở đâu."
                />
                <div className="flex items-center justify-center gap-4">
                    <CourseCard
                        image="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg"
                        title="Bắt đầu tạo video"
                        description="Bài giảng video chất lượng có thể giúp khóa học của bạn trở nên khác biệt. Hãy sử dụng tài nguyên của chúng tôi để tìm hiểu thông tin cơ bản."
                    />
                    <CourseCard
                        image="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg"
                        title="Xây dựng đội ngũ học viên của bạn"
                        description="Bài giảng video chất lượng có thể giúp khóa học của bạn trở nên khác biệt. Hãy sử dụng tài nguyên của chúng tôi để tìm hiểu thông tin cơ bản."
                    />
                </div>
                <CourseCard
                    image="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg"
                    title="Tham gia Thử thách giảng viên mới!"
                    description="Tham khảo các bí quyết và tài nguyên dành riêng cho bạn, được thiết kế để giúp bạn ra mắt khóa học đầu tiên nhanh hơn! Những giảng viên đủ điều kiện xuất bản khóa học đầu tiên đúng thời hạn sẽ nhận được lời chúc mừng là một phần thưởng đặc biệt. Hãy bắt đầu ngay hôm nay!"
                />
            </div>
        </div>
    )
}

export default HomeTeacher
