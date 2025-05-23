import { useState } from 'react';
import data from '../public/data/data.json';

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
      <div className='flex sm:block'>
        {/* header */}
        <header
          className="sticky top-0 sm:fixed sm:top-9 sm:left-0 right-0 bottom-0 h-[100vh] w-24 sm:w-[90%] mx-auto z-50 flex sm:items-center  px-1 lg:px-7 xl:px-10  lg:py-5 bg-gray-500/50 dark:bg-[#493628] backdrop-blur-[6px] sm:h-28 sm:rounded-3xl text-white">
          <div className="w-full flex  items-center tracking-tightest py-10">
            <nav className="flex flex-col justify-between sm:flex-row w-full items-center gap-y-5 gap-x-5 xl:gap-x-9 sm:justify-center h-full  overflow-y-scroll  overflow-x-hidden">
              <div className={`headerItem ${category === 'hotDrinks' ? 'bg-[#ffe3c2] text-zinc-800 rounded-md p-1' : ''}`} onClick={() => setCateGory('hotDrinks')}>
                <div className={`headerItemParentImage ${category === 'hotDrinks' ? 'invert-0' : 'invert'}`}>
                  <img src='/icon/hotdrinks.png' alt='hotDrink' />
                </div>
                <div className='headerText'>نوشیدنی گرم</div>
              </div>
              <div className={`headerItem ${category === 'coldDrinks' ? 'bg-[#ffe3c2] rounded-md p-1 text-zinc-800' : ''}`} onClick={() => setCateGory('coldDrinks')}>
                <div className={`headerItemParentImage ${category === 'coldDrinks' ? 'invert-0' : 'invert'}`}>
                  <img src='/icon/colddrinks.png' alt='coldDrinks' />
                </div>
                <div className='headerText'>نوشیدنی سرد</div>
              </div>
              <div className={`headerItem ${category === 'desserts' ? 'bg-[#ffe3c2]  rounded-md p-1 text-zinc-800' : ''}`} onClick={() => setCateGory('desserts')}>
                <div className={`headerItemParentImage ${category === 'desserts' ? '' : 'text-gray-300'}`}>
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="clipPath623">
                        <path d="M 0,24 H 24 V 0 H 0 Z" />
                      </clipPath>
                    </defs>
                    <g transform="matrix(1.3333333,0,0,-1.3333333,0,32)">
                      <g clipPath="url(#clipPath623)">
                        <g transform="translate(3,8)">
                          <path d="m 0,0 c -2,0 -2,2 -2,2 0,4.971 4.925,9 11,9 6.075,0 11,-4.029 11,-9 0,0 0,-2 -2,-2" />
                        </g>
                        <g transform="translate(14,21)">
                          <path d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2 z" />
                        </g>
                        <g transform="translate(8,9)">
                          <path d="m 0,0 c 0,-1.104 0.896,-2 2,-2 1.104,0 2,0.896 2,2" />
                        </g>
                        <g transform="translate(12,9)">
                          <path d="m 0,0 c 0,-1.104 0.896,-2 2,-2 1.104,0 2,0.896 2,2" />
                        </g>
                        <g transform="translate(16,9)">
                          <path d="m 0,0 c 0,-1.104 0.896,-2 2,-2 1.104,0 2,0.896 2,2" />
                        </g>
                        <g transform="translate(4,9)">
                          <path d="m 0,0 c 0,-1.104 0.896,-2 2,-2 1.104,0 2,0.896 2,2" />
                        </g>
                        <g transform="translate(20,8)">
                          <path d="M 0,0 H 1 L 0.049,-5.351 C -0.121,-6.305 -0.951,-7 -1.92,-7 h -12.159 c -0.969,0 -1.799,0.695 -1.969,1.649 L -17,0 h 1" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className=' text-xs sm:text-sm md:text-xl tracking-tighter'>شیرینی</div>
              </div>
              <div className={`headerItem ${category === 'damnush' ? 'bg-[#ffe3c2] rounded-md p-1 text-zinc-800' : ''}`} onClick={() => setCateGory('damnush')}>
                <div className={`headerItemParentImage ${category === 'damnush' ? 'invert-0' : 'invert'}`}>
                  <img src='/icon/damnush.png' alt='damnush' />
                </div>
                <div className='headerText'>دمنوش</div>
              </div>
              <div className={`headerItem ${category === 'machabar' ? 'bg-[#ffe3c2] text-zinc-800 rounded-md p-1' : ''}`} onClick={() => setCateGory('machabar')}>
                <div className={`headerItemParentImage ${category === 'machabar' ? 'invert-0' : 'invert'}`}>
                  <img src='/icon/hotdrinks.png' alt='hotDrink' />
                </div>
                <div className='headerText'>ماچا  بار</div>
              </div>
              <div className={`headerItem ${category === 'smoothie' ? 'bg-[#ffe3c2] rounded-md p-1 py-3 text-zinc-800' : ''}`} onClick={() => setCateGory('smoothie')}>
                <div className={`headerItemParentImage ${category === 'smoothie' ? 'invert-0' : 'invert'}`}>
                  <img src='/icon/smoothie.png' alt='smoothie' />
                </div>
                <div className='headerText'>اسموتی</div>
              </div>
              <div className={`headerItem ${category === 'macktail' ? 'bg-[#ffe3c2] rounded-md p-1 text-zinc-800' : ''}`} onClick={() => setCateGory('macktail')}>
                <div className={`headerItemParentImage ${category === 'macktail' ? 'invert-0' : 'invert'}`}>
                  <img src='/icon/macktail.png' alt='macktail' />
                </div>
                <div className='headerText'>ماکتل</div>
              </div>
              <div className={`headerItem ${category === 'shake' ? 'bg-[#ffe3c2] rounded-md p-1 text-zinc-800' : ''}`} onClick={() => setCateGory('shake')}>
                <div className={`headerItemParentImage ${category === 'shake' ? 'invert-0' : 'invert'}`}>
                  <img src='/icon/shake.png' alt='shake' />
                </div>
                <div className='headerText'>شیک</div>
              </div>
              <div className={`headerItem ${category === 'sandwich' ? 'bg-[#ffe3c2] rounded-md p-1 text-zinc-800' : ''}`} onClick={() => setCateGory('sandwich')}>
                <div className={`headerItemParentImage ${category === 'sandwich' ? '' : 'text-gray-300'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="m24,13.5c0-.817-.394-1.544-1.002-2h.002v-2c0-4.687-3.813-8.5-8.5-8.5h-5C4.813,1,1,4.813,1,9.5v2h.002c-.608.456-1.002,1.183-1.002,2v.171c0,.81.393,1.55,1,2.008v3.821c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5v-4h-.002c.608-.456,1.002-1.183,1.002-2ZM2,9.5c0-4.136,3.364-7.5,7.5-7.5h5c4.136,0,7.5,3.364,7.5,7.5v1.55c-.162-.033-.329-.05-.5-.05H2.5c-.171,0-.338.017-.5.05v-1.55Zm20,10c0,1.378-1.121,2.5-2.5,2.5H4.5c-1.379,0-2.5-1.122-2.5-2.5v-3.382c.011.002.021.004.032.006,1.741.285,3.365,1.046,4.696,2.202.514.445,1.143.668,1.771.668s1.258-.223,1.771-.668c1.729-1.5,3.94-2.327,6.229-2.327h5c.171,0,.338-.017.5-.05v3.55Zm-.5-4.5h-5c-2.529,0-4.974.913-6.885,2.572-.646.561-1.584.561-2.23,0-1.472-1.278-3.267-2.12-5.19-2.435-.681-.111-1.194-.742-1.194-1.466v-.171c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5ZM9,5c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm-3,3c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    />
                  </svg>
                </div>
                <div className=' text-xs sm:text-sm md:text-xl tracking-tighter'>ساندویج</div>
              </div>
              <div className={`headerItem  ${category === 'breakfast' ? 'bg-[#ffe3c2] rounded-md p-1 text-zinc-800' : ''}`} onClick={() => setCateGory('breakfast')}>
                <div className={`headerItemParentImage ${category === 'breakfast' ? '' : 'text-gray-300'} `}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="m23.97,22.556l-5.375-5.375c1.502-1.817,2.405-4.145,2.405-6.681C21,4.71,16.29,0,10.5,0S0,4.71,0,10.5s4.71,10.5,10.5,10.5c2.536,0,4.864-.904,6.681-2.405l5.375,5.375,1.414-1.414Zm-13.47-3.556c-4.687,0-8.5-3.813-8.5-8.5S5.813,2,10.5,2s8.5,3.813,8.5,8.5-3.813,8.5-8.5,8.5Zm.5-9c0,1.105-.895,2-2,2s-2-.895-2-2,.895-2,2-2,2,.895,2,2Zm3.027-3.284c-1.017-1.71-2.677-2.716-4.527-2.716-3.033,0-5.5,2.467-5.5,5.5v.5c0,3.86,3.14,7,7,7,2.228,0,4.077-1.547,4.381-3.613.986-.722,1.619-1.918,1.619-3.137,0-1.688-1.245-3.128-2.973-3.534Zm-.056,5.199l-.542.33v.612c0,1.282-1.256,2.143-2.429,2.143-2.757,0-5-2.243-5-5v-.5c0-1.93,1.57-3.5,3.5-3.5,1.232,0,2.348.771,2.984,2.062l.245.496.55.056c.846.087,1.721.723,1.721,1.636,0,.661-.433,1.361-1.029,1.665Z" fill="currentColor" />
                  </svg>
                </div>
                <div className='text-xs sm:text-sm md:text-xl tracking-tighter'>صبحونه</div>
              </div>
              <div className={`headerItem ${category === 'syrup' ? 'bg-[#ffe3c2] rounded-md p-1 py-3 text-zinc-800' : ''}`} onClick={() => setCateGory('syrup')}>
                <div className={`headerItemParentImage ${category === 'syrup' ? 'invert-0' : 'invert'}`}>
                  <img src='/icon/syrup.png' alt='syrup' />
                </div>
                <div className='headerText'>سیروپ</div>
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
                    <img src={product.img ? product.img : "/images/logo/logoitem.png"} alt={product.name} className=" mx-auto md:w-auto rounded-md" loading="lazy" />
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
                      <span className="font-RokhBold   text-base md:text-xl">
                        {product.price - (product.price * (product.discount / 100))}
                      </span>
                      <span className="text-xs md:text-sm tracking-tighter">
                        تومان
                      </span>
                    </div>
                    {product.discount !== 0 &&
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
      </div>
      <div className='flex items-center justify-center static  w-44 sm:w-60 h-7 bg-yellow-800 rounded-l-full text-white text-xs sm:text-base'>
        ساخته شده توسط <a target='_blank' className='px-1 sm:px-2 text-yellow-100 text-[13px] mt-1' href='https://www.linkedin.com/in/omid-tavakoli-5938682b3/'>OmidTavakoli</a>
      </div>
    </main>
  )
}

export default App;

