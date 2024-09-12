import Input from '~/components/ui/input/Input'
import { Button } from '~/components/ui/button/Button'

const Profile = () => {
    return (
        <div className="">
            <div className="rounded-lg md:rounded-e text-TSM border mx-auto mb-5">
                <div className="border-b text-center p-5">
                    <h3 className=" font-bold md:text-DMD  text-DSM">Hồ sơ của tôi</h3>
                    <p>Thêm thông tin về bản thân</p>
                </div>

                <div className="p-5 max-w-[660px] mx-auto">
                    <form>
                        <div className="grid grid-cols-12 gap-4 my-3">
                            <div className="col-span-12 md:col-span-6">
                                <label htmlFor="fullName">Họ và tên</label>
                                <Input type="text" className="w-full mt-2" name="fullName" id="fullName" />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <label htmlFor="email">Email</label>
                                <Input type="text" className="w-full mt-2" name="email" id="email" />
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 my-3">
                            <div className="col-span-12 md:col-span-6">
                                <label htmlFor="phone">Số điện thoại</label>
                                <Input type="text" className="w-full mt-2" name="phone" id="phone" />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <label htmlFor="address">Địa chỉ</label>
                                <Input type="text" className="w-full mt-2" name="address" id="address" />
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 my-3">
                            <div className="col-span-12 md:col-span-6">
                                <label htmlFor="education" className="block text-sm">
                                    Trình độ học vấn
                                </label>
                                <select
                                    id="education"
                                    name="education"
                                    className="border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md h-[40px] text-TMD text-black font-normal focus:border-interactive-stroke-primaryFocus w-full mt-2"
                                >
                                    <option value="">Đại học</option>
                                    <option value="cao_dang">Cao đẳng</option>
                                    <option value="thac_si">Thạc sĩ</option>
                                    <option value="tien_si">Tiến sĩ</option>
                                </select>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <label htmlFor="experience">Kinh nghiệm</label>
                                <Input type="text" name="experience" id="experience" className="w-full mt-2" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="bio" className="block">
                                Tiểu sử
                            </label>
                            <textarea
                                rows={4}
                                id="bio"
                                name="bio"
                                className="w-full block p-2.5 text-sm rounded-lg border-[1px] border-neutral-stroke-primary focus:border-interactive-stroke-primaryFocus mt-2"
                            ></textarea>
                        </div>
                        <Button className="my-5">Lưu thay đổi</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
