import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'

import config from '~/config'
import Input from '~/components/ui/input/Input'
import { Button } from '~/components/ui/button/Button'
import { RegisterFormFields, registerSchema } from '~/validations/auth'

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors }
    } = useForm<RegisterFormFields>({ resolver: zodResolver(registerSchema) })
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
        // handle register
    }

    return (
        <div className="max-w-[450px] mx-auto mt-40 rounded-xl border shadow p-10">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-start gap-1 w-full">
                    <h1 className="text-DXS font-semibold">Đăng ký tài khoản</h1>
                    <p className="text-TMD text-back">Sử dụng email hoặc dịch vụ khác để đăng ký</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full flex-col flex items-center justify-center gap-4"
                >
                    <div className="w-full">
                        <Input
                            {...register('username')}
                            type="text"
                            placeholder="Họ và tên"
                            name="username"
                            id="username"
                            className="w-full"
                            disabled={isSubmitting}
                            autoFocus
                        />
                        {errors.username && <div className="text-red-500 text-TSM">{errors.username.message}</div>}
                    </div>
                    <div className="w-full">
                        <Input
                            {...register('email')}
                            type="text"
                            placeholder="Email"
                            name="email"
                            id="email"
                            className="w-full"
                            disabled={isSubmitting}
                        />
                        {errors.email && <div className="text-red-500 text-TSM">{errors.email.message}</div>}
                    </div>
                    <div className="w-full relative">
                        <Input
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="Mật khẩu"
                            className="w-full"
                            disabled={isSubmitting}
                            autoComplete="current-password"
                        />
                        {errors.password && <div className="text-red-500 text-TSM">{errors.password.message}</div>}
                        {showPassword ? (
                            <IoEyeOffSharp
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1 transform translate-y-1/2 cursor-pointer text-gray-500"
                            />
                        ) : (
                            <IoEyeSharp
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1 transform translate-y-1/2 cursor-pointer text-gray-500"
                            />
                        )}
                    </div>
                    <div className="w-full relative">
                        <Input
                            {...register('confirmPassword')}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="Nhập lại mật khẩu"
                            className="w-full"
                            disabled={isSubmitting}
                            autoComplete="current-password"
                        />
                        {errors.confirmPassword && (
                            <div className="text-red-500 text-TSM">{errors.confirmPassword.message}</div>
                        )}
                    </div>
                    <div className="text-right w-full">
                        <Link
                            to={config.routes.forgotPassword}
                            className="text-callouts-background-primary font-medium text-TSM"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <Button disabled={isSubmitting} className="w-full">
                        Đăng ký
                    </Button>
                </form>

                <hr className="w-full my-2" />

                <div className="w-full">
                    <div className="flex gap-5">
                        <button
                            disabled={isSubmitting}
                            className="flex flex-1 items-center justify-center gap-3 border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md cursor-pointer hover:bg-interactive-background-primaryHoverWeak hover:transition-all"
                        >
                            <FcGoogle className="text-callouts-background-primary size-6" />
                            <span className="text-TMD font-semibold">Google</span>
                        </button>
                        <button
                            disabled={isSubmitting}
                            className="flex flex-1 items-center justify-center gap-3 border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md cursor-pointer hover:bg-interactive-background-primaryHoverWeak hover:transition-all"
                        >
                            <FaFacebook className="text-callouts-background-primary size-6" />
                            <span className="text-TMD font-semibold">Facebook</span>
                        </button>
                    </div>
                    <div className="text-center mt-5">
                        <p className="text-gray-500">
                            Bạn đã có tài khoản?{' '}
                            <Link to={config.routes.login} className="text-callouts-background-primary">
                                Đăng nhập
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
