import React from 'react'
import { ICategory } from '~/types'

const Category: React.FC<ICategory> = ({ title, image, slug }) => {
    return (
        <div className="border shadow-sm pt-4 px-3 group cursor-pointer">
            <div className="flex justify-center">
                <img src={image} className="w-24 h-24 group-hover:scale-110 duration-200" alt={slug} />
            </div>
            <div>
                <h2 className="lg:text-TLG md:text-TMD text-TSM font-semibold py-2">{title}</h2>
            </div>
        </div>
    )
}

export default Category
