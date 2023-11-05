/* eslint-disable react/no-unescaped-entities */



const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src='https://i.ibb.co/VvGZP6t/b1.jpg'
          className="w-full rounded-xl"
        />
        <div className="absolute flex items-center h-full  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className='text-white w-1/2 space-y-5 pl-9'>
            <h2 className='text-4xl font-bold'>Meet, chat, and study with students Students Worldwide</h2>
            <p>Join the world's biggest student community online and bid farewell to motivation hurdles.</p>
            <button className='btn btn-primary'>Study Together Now</button>
            
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src='https://i.ibb.co/JQYpxpW/b2.jpg'
          className="w-full rounded-xl"
        />
        <div className="absolute flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className='text-white w-1/2 space-y-5 pl-9'>
          <h2 className='text-4xl font-bold'>Meet, chat, and study with students Students Worldwide</h2>
            <p>Join the world's biggest student community online and bid farewell to motivation hurdles.</p>
            <button className='btn btn-primary'>Study Together Now</button>
            
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src='https://i.ibb.co/p0z31v8/b3.jpg'
          className="w-full rounded-xl"
        />
        <div className="absolute flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className='text-white w-1/2 space-y-5 pl-9'>
          <h2 className='text-4xl font-bold'>Meet, chat, and study with students Students Worldwide</h2>
            <p>Join the world's biggest student community online and bid farewell to motivation hurdles.</p>
            <button className='btn btn-primary'>Study Together Now</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src='https://i.ibb.co/KqSwQPs/b4.jpg'
          className="w-full rounded-xl"
        />
        <div className="absolute flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className='text-white w-1/2 space-y-5 pl-9'>
          <h2 className='text-4xl font-bold'>Meet, chat, and study with students Students Worldwide</h2>
            <p>Join the world's biggest student community online and bid farewell to motivation hurdles.</p>
            <button className='btn btn-primary'>Study Together Now</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
