import React from 'react'
import Button from '../Button/Button'
import FreshFruits from "../../assets/images/fresh-fruits.png"

function Discount() {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className=' md:bg-transparent py-10 max-w-[1250px] mx-auto px-10 md:flex-row flex-col flex'>
                <span className='md:text-9xl  text-5xl text-orange-500 font-bold transform md:-rotate-90 md:justify-start h-fit md:self-center'>40%</span>
            <div className='max-w-[700px] b' >
                <h3 className='text-4xl md:text-7xl text-zinc-800 font-bold mt-2'>First Order Discount!</h3>
                <p className='text-zinc-600 my-6'>
                    Enjoy an exculsive first order discount on our grocery website! Shop fresh essential and save big on your first perchase. Fast deleviery and quality genrented.</p>
            <Button content="Get a Discount" />
            </div>

        </div>
    </section>
  )
}

export default Discount