import { RiMailSendLine } from 'react-icons/ri'

import { Button } from '~/components/ui/button/Button'
import Input from '~/components/ui/input/Input'

const ForgotPassword = () => {
    return (
        <div className="relative h-screen">
            <div className="w-full max-w-[456px] h-auto p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white ">
                <div>
                    <h1 className="font-bold text-DSM text-center">Quên mật khẩu</h1>
                    <p className="my-5 text-center text-gray-400">Vui lòng nhập email để tiến hành lấy lại mật khẩu!</p>
                </div>
                <div className="flex justify-center">
                    <form action="" className="w-full">
                        <div className="w-full relative">
                            <Input type="email" className="w-full ps-10 pe-3" />
                            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2">
                                <RiMailSendLine className="text-callouts-background-primaryWeak" />
                            </div>
                        </div>

                        <div className="mt-5">
                            <Button variant={'primary'} className="w-full">
                                Gửi
                            </Button>
                        </div>
                        <div></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
