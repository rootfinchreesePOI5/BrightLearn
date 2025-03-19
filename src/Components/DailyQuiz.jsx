import React, { useState } from 'react'

function DailyQuiz() {

    let time = new Date();

        const weekly = () => {
            return
        };

        const monthly = () => {
            return
        }
        return (
            <div>
                {/* generate daily quiz and submit answer*/}
                <div className='flex flex-col md:flex-row bg-white items-center gap-8 md:gap-0 md:justify-between !p-4 rounded-sm'>
                    <div className='flex flex-col '>
                        <span className='flex items-center justify-center bg-cyan-200 text-sm !p-1 rounded-sm w-[50%]'>Daily Quiz</span>
                        <li className='!mt-3'>Create a calender using javascript.</li>
                        <h5 className='text-xs !mt-3 !ml-3 flex gap-3 items-center'>Remaining time: <span className='text-cyan-500 text-sm'>3hours.</span></h5>
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex items-center justify-center bg-yellow-200 text-sm !p-1 rounded-sm w-[50%]'>Weekly Quiz</span>
                        <li className='!mt-3'>Create a calender using javascript.</li>
                        <h5 className='text-xs !mt-3 !ml-3 flex gap-3 items-center'>Remaining time: <span className='text-yellow-500 text-sm'>2days.</span></h5>
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex items-center justify-center bg-emerald-200 text-sm !p-1 rounded-sm w-[50%]'>Monthly Quiz</span>
                        <li className='!mt-3'>Create a calender using javascript.</li>
                        <h5 className='text-xs !mt-3 !ml-3 flex gap-3 items-center'>Remaining time: <span className='text-emerald-500 text-sm'>15days.</span></h5>
                    </div>
                </div>
            </div>
        )
}

    export default DailyQuiz
