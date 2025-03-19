import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { coin, goldBadge } from '../assets/images';

function PBC() {
    const { page, setPage, openMenu } = useContext(AppContext);
    const [points, setPoints] = useState(10);
    const [badges, setBadges] = useState(
        [
            { name: "Gold", score: 75, date: "2025-03-10" },
            { name: "Platinum", score: 95, date: "2025-02-28" },
        ]
    );
    const [cert, setCertificate] = useState(
        [
            { name: "React Js", score: 75, date: "2025-03-10" },
            { name: "Tailwind Css", score: 95, date: "2025-02-28" },
            { name: "Html", score: 75, date: "2025-03-10" },
            { name: "Javascript", score: 95, date: "2025-02-28" },
        ]
    );
    const navigate = useNavigate();
    return (
        <div className='flex items-center gap-3'>
            {/* points */}
            <div className='!p-2 rounded-sm border-gray-400 hover:bg-cyan-200  duration-500 transition-all text-gray-900 border-[1.5px] h-[6vh] max-w-[100%] cursor-pointer'>
                {
                    points < 1 ?
                        <button className='cursor-pointer text-xs md:text-sm   bg-transparent'>Get Points</button> :
                        <div className='flex items-center gap-1 text-sm' onClick={() => { setPage(2), openMenu() }} >
                            <span className='md:text-xl text-pink-500'>10</span>
                            <p >points</p>
                            <img src={coin} alt="" />
                        </div>
                }
            </div>
            {/* Badges*/}
            <div className='!p-2 rounded-sm border-gray-400 hover: text-gray-900 hover:bg-yellow-200  duration-500 transition-all border-[1.5px] h-[6vh] max-w-[100%] cursor-pointer'>
                {
                    badges.length <= 0 ?
                        <button className='cursor-pointer text-xs md:text-sm    bg-transparent'>Get A Badge</button> :
                        <div onClick={() => { setPage(2), openMenu() }} className='flex items-center gap-1'>
                            <span className=' md:text-xl text-pink-500'>{badges.length}</span>
                            <p>badges</p>
                            <img className='w-5' src={goldBadge} alt="" />
                        </div>
                }
            </div>
            {/* certificates */}
            <div className='!p-2 rounded-sm border-gray-400 hover:bg-emerald-200  duration-500 transition-all text-gray-900 border-[1.5px] h-[6vh] max-w-[100%] cursor-pointer'>
                {
                    cert <= 0 ?
                        <button className='cursor-pointer text-xs md:text-sm    bg-transparent'>Get your Cert</button> :
                        <div onClick={() => { setPage(2), openMenu() }} className='flex items-center gap-1'>
                            <span className='text-xl text-pink-500'>{cert.length}</span>
                            <img src="" alt="" />
                            <p>certs</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default PBC
