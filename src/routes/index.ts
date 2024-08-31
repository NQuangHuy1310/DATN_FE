import config from '../config'
import AuthLayout from '../layouts/AuthLayout'
import HomeLayout from '../layouts/HomeLayout'
import Login from '../pages/Auth/Login'
import Home from '../pages/Home'

// Routes không cần đăng nhập vẫn vào được
export const publicRoutes = [
    { path: config.routes.home, layout: HomeLayout, element: Home },
    { path: config.routes.login, layout: AuthLayout, element: Login }
]

// Route cần đăng nhập mới vào được
export const privateRoutes = []
