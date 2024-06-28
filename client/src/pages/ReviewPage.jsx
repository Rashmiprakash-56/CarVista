import React from 'react'
import ReviewCard from '../components/ReviewCard'
import reviews from '../data/reviews'

function ReviewPage() {
  return (
    <div className="w-screen h-auto min-h-screen flex justify-center items-center">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {reviews.map((review)=>(
              <ReviewCard key={review.id} {...review}/>
          ))};
      </div>
    </div>
  )
}

export default ReviewPage