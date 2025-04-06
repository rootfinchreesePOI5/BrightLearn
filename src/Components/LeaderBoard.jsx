import React, { useContext, useState } from "react";
import { stair, platinumBadge, goldBadge, diamondBadge } from "../assets/images"; // Import only for top 3 badges
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

function LeaderBoard() {
    const { userData , setMenu } = useContext(AppContext);
    const navigate = useNavigate();
    const [leaderboard, setLeaderboard] = useState([
        { name: "John Doe", points: 250, badges: 95 },
        { name: "Chris", points: 200, badges: 85 },
        { name: "Alex", points: 170, badges: 65 },
        { name: "Abdiaziz", points: 120, badges: 2 },
        { name: "Jane Smith", points: 110, badges: 45 },
        { name: "Emma", points: 100, badges: 20 },
    ]);
    const getBadgeIcon = (index) => {
        if (index === 0) return platinumBadge;
        if (index === 1) return diamondBadge;
        if (index === 2) return goldBadge;
        return null;
    };

    return (
        <div className="w-full max-w-lg flex flex-col justify-between min-h-[75vh] mx-auto">
            <div>
                {/* Header */}
                <h1 className="flex items-center gap-2 text-md !mb-6 font-bold text-gray-900">
                    Leadership Board <img className="w-6" src={stair} alt="" />
                </h1>

                {/* Table Header */}
                <ul className="grid grid-cols-[50px_1fr_1fr_1fr] text-gray-900 font-light p-3 border-b border-gray-300 mt-4 text-xs">
                    <li className="text-left">#</li>
                    <li className="text-left">Student</li>
                    <li className="text-center">Points</li>
                    <li className="text-right">Badges</li>
                </ul>

                {/* Leaderboard Items */}
                {leaderboard.map((item, index) => {
                    const badgeIcon = getBadgeIcon(index);

                    return (
                        <div className="!py-3" key={index}>
                            <ul
                                className={`grid grid-cols-[50px_1fr_1fr_1fr] items-center text-sm font-mono ${userData.name === item.name ? 'bg-pink-400 text-white !p-1 !pr-3 rounded-full' : ''}`}
                            >
                                <li className={`${userData.name === item.name ? 'bg-black text-white w-5 h-5 flex items-center justify-center rounded-full' : ''} text-left`}>{index + 1}</li>
                                <li className="text-left flex items-center gap-2">
                                    {item.name}
                                    {badgeIcon && <img src={badgeIcon} alt="Badge" className="w-5 h-5" />}
                                </li>
                                <li className="text-center">{item.points}</li>
                                <li className="text-right">{item.badges}</li>
                            </ul>
                        </div>
                    );
                })}
            </div>
            <button onClick={() =>{navigate('/') , setMenu(false)}} className="bg-pink-400 h-[5vh] rounded-3xl text-white text-sm hover:bg-zinc-900 duration-700 transition-all cursor-pointer">Get more points to go up the ladder</button>
        </div>
    );
}

export default LeaderBoard;
