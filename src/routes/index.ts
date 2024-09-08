import config from '~/config'
import HomeLayout from '~/layouts/HomeLayout'
import ProfileLayout from '~/layouts/AuthLayout/ProfileLayout'

import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Login from '~/pages/Auth/Login'
import Verify from '~/pages/Auth/Verify'
import Register from '~/pages/Auth/Register'
import ForgotPassword from '~/pages/Auth/ForgotPassword'

// Routes không cần đăng nhập vẫn vào được
export const publicRoutes = [
    { path: config.routes.home, layout: HomeLayout, element: Home },
    { path: config.routes.login, layout: HomeLayout, element: Login },
    { path: config.routes.register, layout: HomeLayout, element: Register },
    { path: config.routes.forgotPassword, layout: HomeLayout, element: ForgotPassword },
    { path: config.routes.verify, layout: HomeLayout, element: Verify },
    { path: config.routes.profile, layout: ProfileLayout, element: Profile }
]

// Route cần đăng nhập mới vào được
export const privateRoutes = []
