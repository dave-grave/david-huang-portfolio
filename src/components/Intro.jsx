import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-5xl 
            mb-1 md:mb-3 font-bold">David Huang</h1>
            <p className='text-base md:text-xl mb-3
            font-medium'>Computer Engineering @ UofM</p>
            <p className='text-sm max-w-xl
            mb-6 font-bold'>
                This is my bio.
                Feel free to check out my linkedin {' '}
                <a 
                    href="https://www.linkedin.com/in/djhuang0/"
                    target="_blank"
                    className="text-cyan-600 hover:underline font-bold
                    decoration-2 decoration-red-400"
                    rel="noreferrer noopener" 
                >
                here</a>.
            </p>
        </div>
    )
}

export default Intro;