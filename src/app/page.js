import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Latestnews from '@/components/Latestnews'
import Mostpopular from '@/components/Mostpopular'
import Newsletter from '@/components/Newsletter'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between">
            <Header></Header>
            {/* Hero Section */}
            <Hero></Hero>
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-4 mt-10 mb-10'>
                <div className='col-span-2'>
                    <Latestnews></Latestnews>
                </div>
                <div className=''>
                    <Mostpopular></Mostpopular>
                    <Newsletter></Newsletter>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}
