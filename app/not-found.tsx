// app/comingsoon.tsx
import Image from 'next/image';
import React from 'react';
import srccomingsoon from '@/public/not-foundpage/com.gif';
import Link from 'next/link';

const ComingSoon: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <Image
                    src={srccomingsoon}
                    alt='Coming Soon'
                    width={600}
                    height={90}
                    className='bg-center flex justify-center md:h-[200px] lg:h-[350px] max-w-full mx-auto'
                />
                <p className="my-4 mx-4 text-lg text-gray-600">Kami sedang mempersiapkan sesuatu yang luar biasa untuk Anda!</p>
                <Link
                    className='bg-slate-700 hover:bg-slate-500 duration-500 transition-all text-white rounded-md px-6 py-2'
                    href="/">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;