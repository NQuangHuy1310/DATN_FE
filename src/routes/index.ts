import config from '../config'
import AuthLayout from '../layouts/AuthLayout'
import HomeLayout from '../layouts/HomeLayout'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Verify from '../pages/Auth/Verify'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

// Routes không cần đăng nhập vẫn vào được
export const publicRoutes = [
    { path: config.routes.home, layout: HomeLayout, element: Home },
    { path: config.routes.login, layout: AuthLayout, element: Login },
    { path: config.routes.register, layout: AuthLayout, element: Register },
    { path: config.routes.forgotPassword, layout: AuthLayout, element: ForgotPassword },
    { path: config.routes.verify, layout: AuthLayout, element: Verify },
    { path: config.routes.profile, layout: HomeLayout, element: Profile }
]

// Route cần đăng nhập mới vào được
export const privateRoutes = []
