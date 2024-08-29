import config from '../config'
import HomeLayout from '../layouts/HomeLayout'
import Home from '../pages/Home'

// Routes không cần đăng nhập vẫn vào được
export const publicRoutes = [{ path: config.routes.home, layout: HomeLayout, element: Home }]

// Route cần đăng nhập mới vào được
export const privateRoutes = []
