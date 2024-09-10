import { HiStar } from 'react-icons/hi'

import { IReview } from '~/types/IReview'

const Review: React.FC<IReview> = ({ imageUrl, content, rating, usename, time }) => {
    return (
        <div className="border-t mt-2">
            <div className="flex gap-4 items-center p-2">
                <div>
                    <img src={imageUrl} className="w-8 h-8 rounded-full" alt="" />
                </div>
                <div>
                    <h4 className="text-TSM font-semibold">{usename}</h4>
                    <div className="flex gap-2 py-1">
                        <div className="flex items-center *:size-4">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <HiStar key={index} className={index < rating ? 'text-orange-500' : 'text-gray-300'} />
                            ))}
                        </div>
                        <span className="md:text-T2XS text-T3XS font-semibold">{time} ngày trước </span>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-TSM">{content}</p>
            </div>
        </div>
    )
}

export default Review
