import { useRef } from 'react'

import Input from '~/components/ui/input/Input'
import { Button } from '~/components/ui/button/Button'

const Photo = () => {
    const fileInputRef = useRef<HTMLInputElement>(null)

    return (
        <div className="">
            <div className="rounded-lg text-TSM border  mx-auto mb-5">
                <div className='border-b text-center p-5'>
                    <h3 className=" font-bold md:text-DMD  text-DSM">Ảnh</h3>
                    <p>Thêm một bức ảnh đẹp về bản thân bạn cho hồ sơ của bạn.</p>
                </div>
                <div className="p-5">
                    <form className="max-w-[660px] mx-auto">
                        <div className="text-center border p-5  rounded border-black">
                            <img
                                src="https://picsum.photos/200"
                                className="mx-auto"
                                alt="Profile"
                            />
                        </div>
                        <div className="flex-grow mt-5">
                            <Input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="*" />
                            <div className="">
                                <label htmlFor="" className='font-medium'>Thêm ảnh</label>
                                <Input type='file' className='w-full mt-2 mb-5' />
                            </div>
                        </div>
                        <Button>Tải lên</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Photo