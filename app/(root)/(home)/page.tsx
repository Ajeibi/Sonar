import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react';

const Home = () => {
    const currentTime = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = currentTime.toLocaleDateString(undefined, options);
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    return (
        <section className='flex size-full flex-col gap-10 text-white'>
            <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
                <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-5 lg:p-11'>
                    <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30 pm</h2>
                    <div className='flex flex-col gaap-2'>
                        <h1 className='text-4xl font-extrabold lg:text-7xl'>{formattedTime}</h1>
                        <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{formattedDate}</p>
                    </div>
                </div>
            </div>

            <MeetingTypeList />
        </section>
    );
};

export default Home;
