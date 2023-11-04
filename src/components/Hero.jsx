import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className='w-11/12 mx-automt-10 mt-2'> 
            <div class="mx-auto">
                <div class="flex items-center justify-center min-h-screen">
                    <div class="w-full py-3 px-3 bg-gray-300 grid grid-cols-6 gap-2">
                        <div class="relative row-span-2 col-span-4 bg-gray-100">
                            <div class="h-full w-full bg-red-200 absolute inset-0 opacity-75"></div>
                            <img src="/images/909640-vertical-zelda-link-wallpaper-3840x2160-xiaomi.jpg" alt='Latest News'
                            />
                            <div class="absolute bottom-0 px-5 pb-5 text-black">
                                <h2 class="uppercase text-xs font-light">Featured</h2>
                                <h1 class="text-xl pb-3 font-bold">Lollipop tootsie roll</h1>
                                <p class="text-xs">Marzipan sugar tiramisu biscuit cookie jujubes candy canes gummies. apple pie pudding dessert bonbon cotton candy wafer chocolate caramels. chocolate bar lollipop cotton candy croissantapple pie topping oat cake pudding sesame sugar jujubes candy cotton candy.gummies muffin sweet.</p>
                            </div>
                        </div>
                    <div class="relative bg-gray-200 col-span-2">
                        <img src="/images/909640-vertical-zelda-link-wallpaper-3840x2160-xiaomi.jpg"/>
                        <div class="h-full w-full bg-indigo-700 absolute inset-0 opacity-75"></div>
                        <div class="absolute bottom-0 px-5 pb-5 text-white">
                            <h2 class="uppercase text-xs font-light">Featured</h2>
                            <h1 class="text-s font-bold">Muffin sugar plum bear claw</h1>
                        </div>
                    </div>
                    <div class="relative bg-gray-300 col-span-2">
                        <img src="/images/909640-vertical-zelda-link-wallpaper-3840x2160-xiaomi.jpg"/>
                        <div class="h-full w-full bg-teal-700 absolute inset-0 opacity-75"></div>
                        <div class="absolute bottom-0 px-5 pb-5 text-white">
                            <h2 class="uppercase text-xs font-light">Featured</h2>
                            <h1 class="text-s font-bold">Lollipop chocolate gummi bears</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
