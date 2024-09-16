import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'
import { zodResolver } from '@hookform/resolvers/zod'

import config from '~/config'
import Input from '~/components/ui/input/Input'
import { Button } from '~/components/ui/button/Button'
import { LoginFormFields, loginSchema } from '~/validations/auth'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors }
    } = useForm<LoginFormFields>({ resolver: zodResolver(loginSchema) })
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
        // handle login
    }

    return (
        <div className="max-w-[450px] mx-auto mt-40 rounded-xl border shadow p-10">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-start gap-1 w-full">
                    <h1 className="text-DXS font-semibold">Đăng nhập tài khoản</h1>
                    <p className="text-TMD text-back">Sử dụng email hoặc dịch vụ khác để đăng nhập</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full flex-col flex items-center justify-center gap-4"
                >
                    <div className="w-full">
                        <Input
                            {...register('email')}
                            type="text"
                            placeholder="Email"
                            name="email"
                            id="email"
                            className="w-full"
                            disabled={isSubmitting}
                            autoFocus
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
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-1">
                            <Input
                                type="checkbox"
                                className="size-3 bg-gray-100 border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                id="agree"
                            />
                            <label htmlFor="agree" className="text-TSM text-slate-500 font-medium cursor-pointer">
                                Ghi nhớ tài khoản
                            </label>
                        </div>
                        <div>
                            <Link
                                to={config.routes.forgotPassword}
                                className="text-callouts-background-primary font-medium text-TSM"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </div>
                    <Button disabled={isSubmitting} className="w-full">
                        Đăng nhập
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
                            Bạn chưa có tài khoản?{' '}
                            <Link to={config.routes.register} className="text-callouts-background-primary">
                                Đăng ký
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
