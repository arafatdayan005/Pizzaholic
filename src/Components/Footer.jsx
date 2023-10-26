import React from 'react'

function Footer() {
    return (
        <div className='bg-yellow-500/75 py-12'>
            <div className='w-full flex justify-center'>
                <div className='max-w-[90%]'>
                    <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
                        <div className='col-span-2 text-black'>
                            <div className="flex items-end">                              
                                <h1 className="tracking-widest text-3xl font-semibold align-middle whitespace-nowrap uppercase">PizzaHolic</h1>
                            </div>
                            <p className='my-4 text-xl'>Get mouth-watering Tasty pizza's right at your doorstep</p>
                        </div>
                        <div className='col-span-1 text-black'>
                            <h3 className='mb-6 font-medium text-xl'>About Us</h3>
                            <p>Items</p>
                            <p>Work</p>
                            <p>Latest News</p>
                            <p>Career</p>
                        </div>
                        <div className='col-span-1 text-black'>
                            <h3 className='mb-6 font-medium text-xl'>Product</h3>
                            <p>Prototype</p>
                            <p>Plan & Pricing</p>
                            <p>Customer</p>
                            <p>Integration</p>
                        </div>
                        <div className='col-span-1 text-black'>
                            <h3 className='mb-6 font-medium text-xl'>Support</h3>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                        </div>
                        <div className='col-span-1 text-black'>
                            <h3 className='mb-6 font-medium text-xl'>Contact</h3>
                            <p>524 Gulshan, Bangladesh</p>
                            <p>+880 11111111</p>
                        </div>
                    </div>
                    <hr className='border-t border-gray-950 dark:border-gray-100  border-opacity-40 my-8'></hr>
                    <div className='flex justify-between text-gray-500'>
                        <p>@2023 Pizzaholic. All Rights Reserved</p>
                        <p>Powered by Pizzaholic</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;