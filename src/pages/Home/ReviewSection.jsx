// ReviewSection.js


const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      img: 'https://i.ibb.co/FX44mPP/i1.jpg',
      author: 'John Doe',
      rating: 5,
      text: 'I love this platform! It has helped me connect with students from around the world and made studying so much more enjoyable.',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/VQycxDY/13.jpg',
      author: 'Jane Smith',
      rating: 4,
      text: 'The study groups feature is fantastic. I\'ve found study partners easily and aced my exams thanks to this platform.',
    },
    {
      id: 3,
      img: 'https://i.ibb.co/prM2QCD/i2.jpg',
      author: 'Mike Johnson',
      rating: 5,
      text: 'This website has transformed my study routine.',
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-3xl  font-bold mb-6">User Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="bg-white shadow-lg rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src={review.img} // Replace with the actual profile image URL
                alt={review.author}
                className="w-10 h-10 rounded-full mr-2"
              />
              <p className="text-xl font-semibold">{review.author}</p>
              
            </div>
            
            <div className="flex items-center space-x-2">
        
              {/* <span className="text-yellow-500 text-xl">★</span> */}
              {/* <span>{review.rating}</span> */}
            </div>
            
          </div>
          <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
          <p className="text-gray-700">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;

