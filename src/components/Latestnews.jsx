import Image from 'next/image'
import React from 'react'

export default function Latestnews() {
  return (
    <section>
        <div className="w-full bg-black text-white p-4 text-2xl font-bold">
            Latest News
        </div>

        <div className='grid grid-cols-3 gap-2 m-5'>
            <div class="mx-auto w-full transform overflow-hidden rounded-lg">
                <img class="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Product Image" />
                <div class="p-4 bg-slate-400">
                    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                    <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
