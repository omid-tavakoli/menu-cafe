import { useState } from 'react';
import data from '../public/data.json';

interface ProductComponent {
  name: string,
  price: number,
  img: string,
  description: string,
  discount: number
}
const products = data as Record<string, ProductComponent[]>;
const App = () => {
  
  const [category, setCateGory] = useState('hotDrinks')
  return (
    <main className='sm:products  md:h-[90vh]'>
      {/* header */}
      <header
        className="sticky top-0 md:fixed md:top-9 left-0 right-0 w-full md:w-[90%] mx-auto z-50 flex items-center  px-5 lg:px-7 xl:px-10  lg:py-5 bg-gray-500/50 dark:bg-black/50 backdrop-blur-[6px] h-20 md:h-28 md:rounded-3xl text-white">
        <div className="w-full flex  items-center tracking-tightest">
          <nav className="flex w-full items-center gap-x-5 xl:gap-x-9 justify-center h-16">
            <div className={`headerItem ${category === 'hotDrinks' ? 'bg-gray-100/10 rounded-md p-1' : ''}`} onClick={() => setCateGory('hotDrinks')}>
              <div className='flex justify-center items-center w-6 md:w-10 h-6 md:h-10 '>
                <img src='/hotdrink.svg' alt='hotDrink' />
              </div>
              <div className=' text-xs sm:text-sm md:text-xl tracking-tighter whitespace-nowrap'>نوشیدنی گرم</div>
            </div>
            <div className={`headerItem ${category === 'coldDrinks' ? 'bg-gray-100/10 rounded-md p-1' : ''}`} onClick={() => setCateGory('coldDrinks')}>
              <div className='flex justify-center items-center w-6 md:w-10 h-6 md:h-10 '>
                <img src='/coulddrink.svg' alt='coldDrinks' />
              </div>
              <div className=' text-xs sm:text-sm md:text-xl tracking-tighter whitespace-nowrap'>نوشیدنی سرد</div>
            </div>
            <div className={`headerItem ${category === 'desserts' ? 'bg-gray-100/10 rounded-md p-1' : ''}`} onClick={() => setCateGory('desserts')}>
              <div className='flex justify-center items-center w-6 md:w-10 h-6 md:h-10 '>
                <img src='/cake.svg' alt='desserts' />
              </div>
              <div className=' text-xs sm:text-sm md:text-xl tracking-tighter'>شیرینی</div>
            </div>
            <div className={`headerItem ${category === 'damnush' ? 'bg-gray-100/10 rounded-md p-1' : ''}`} onClick={() => setCateGory('damnush')}>
              <div className='flex justify-center items-center w-6 md:w-10 h-6 md:h-10 '>
                <img src='/hotdrink.svg' alt='damnush' />
              </div>
              <div className=' text-xs sm:text-sm md:text-xl tracking-tighter whitespace-nowrap'>دمنوش</div>
            </div>
            <div className={`headerItem ${category === 'sandwich' ? 'bg-gray-100/10 rounded-md p-1' : ''}`} onClick={() => setCateGory('sandwich')}>
              <div className='flex justify-center items-center w-6 md:w-10 h-6 md:h-10 '>
                <img src='/hamburger.svg' alt='sandwich' />
              </div>
              <div className=' text-xs sm:text-sm md:text-xl tracking-tighter'>ساندویج</div>
            </div>
            <div className={`headerItem ${category === 'breakfast' ? 'bg-gray-100/10 rounded-md p-1' : ''}`} onClick={() => setCateGory('breakfast')}>
              <div className='flex justify-center items-center w-6 md:w-10 h-6 md:h-10 '>
                <img src='/pan.svg' alt='breakfast' />
              </div>
              <div className=' text-xs sm:text-sm md:text-xl tracking-tighter'>صبحونه</div>
            </div>
          </nav>
        </div>
      </header>
      {/* ّItems */}
      <section className="pt-8 md:pt-24 lg:pt-48 pb-20 flex justify-center">
        <div className="container">
          <div className='flex  gap-x-10 justify-center flex-wrap gap-y-8'>
            {products[category].length ? products[category].map((product) => (
              <div className="product w-64 sm:w-72">
                <div className="relative mb-2 md:mb-5">
                  <img src={product.img} alt={product.name} className=" mx-auto md:w-auto rounded-3xl" loading="lazy" />
                  {product.discount != 0 &&
                    <span className="discount">{product.discount}%</span>
                  }
                </div>
                <div>
                  <h5
                    className="h-8 md:h-10  text-sm md:text-xl  dark:text-white text-zinc-700 line-clamp-2">
                    {product.name}
                  </h5>
                  <div className="h-10 md:h-14  text-sm md:text-md  dark:text-white/60 text-zinc-700 line-clamp-2">
                    <p>ترکیبات: {product.description}</p>
                  </div>
                </div>
                <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                  <div className="text-teal-600 dark:text-emerald-500 flex items-center">
                    <span className="font-DanaBold text-base md:text-xl">
                      {product.price - (product.price * (product.discount / 100))}
                    </span>
                    <span className="text-xs md:text-sm tracking-tighter">
                      تومان
                    </span>
                  </div>
                  {product.discount  !== 0 &&
                    <div className="offer flex items-center relative text-gray-400">
                      <span className="text-xs md:text-xl">
                        {product.price}
                      </span>
                      <span className="hidden lg:inline-block text-xs md:text-sm  tracking-tighter">
                        تومان
                      </span>
                    </div>
                  }
                </div>
              </div>
            )) : <p className='flex justify-center text-4xl p-10 text-white'>به زودی  ...</p>}
          </div>
        </div>
      </section>
      <div className='flex items-center justify-center static  w-44 sm:w-60 h-7 bg-yellow-800 rounded-l-full text-white text-xs sm:text-base'>
             ساخته شده توسط <a target='_blank' className='px-1 sm:px-2 text-yellow-100 text-[13px] mt-1' href='https://www.linkedin.com/in/omid-tavakoli-5938682b3/'>OmidTavakoli</a>
      </div>
    </main>
  )
}

export default App;

