import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';

import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';

const Watch = () => {
    const router = useRouter()
    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);

    return(
        <div className='h-screen w-screen bg-black'>
            <nav className='fied w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
                <AiOutlineArrowLeft onClick={()=>router.push('/')} className='text-white cursor-pointer' size={40}/>
                <p className='text-white text-xl md:text-3xl font-bold'>
                    <span className='font-light'>Watching:</span> {data?.title}
                </p>
            </nav>
            <video 
                autoPlay
                controls
                src={data?.videoUrl}
                className='w-full h-full'
            >

            </video>
        </div>
    )
}

export default Watch