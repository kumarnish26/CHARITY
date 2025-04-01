import { faSackDollar, faTrophy, faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Dpl({ raised }) {

    const [initialbalance, setInitialbalance] = useState("");
    function typingInputbalance(e) {
        let value = e.target.value;
        // Allow only numbers
        if (!/^\d*$/.test(value)) return;
        // Prevent leading zero
        if (value.startsWith("0") && value.length > 1) {
            value = value.replace(/^0+/, ""); 
        }
        setInitialbalance(value);
    }

    const goal = 10;
    const progress = (raised / goal) * 100;

    return (
        <div className="container mx-auto p-5 mt-10 flex flex-col xl:flex-row flex-wrap items-center justify-between gap-6">
            
            {/* Donate Section */}

            <div className="flex flex-col items-center justify-center w-full h-[300px] max-w-xl shadow-xl bg-gray-100 dark:bg-slate-700 rounded-xl p-5 gap-4">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faSackDollar} className="text-blue-600 scale-125" />
                    <p className="font-semibold text-xl dark:text-gray-100">Donate</p>
                </div>
                <input
                    placeholder="Enter amount"
                    className="p-2 border border-gray-400 rounded-md w-full outline-none dark:bg-gray-800 dark:text-gray-200"
                    value={initialbalance}
                    onChange={typingInputbalance}
                    onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
                            e.preventDefault();
                        }
                    }}
                />
                <button onClick={() => setInitialbalance("")} className="bg-blue-600 hover:bg-blue-700 transition-all p-2 rounded-md font-semibold cursor-pointer w-full text-white">
                    Donate
                </button>
                <div className="w-full bg-gray-300 dark:bg-slate-600 h-3 rounded-md overflow-hidden">
                    <div className="bg-blue-500 h-full transition-all" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{raised} ETH raised out of {goal} ETH goal</p>
            </div>

            {/* Voting Section */}
            
            <div className="flex flex-col items-center justify-center w-full h-[300px] max-w-xl shadow-xl bg-gray-100 dark:bg-slate-700 rounded-xl p-5 gap-4">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faVoteYea} className="text-green-600 scale-125" />
                    <p className="font-semibold text-xl dark:text-gray-100">Vote for a Project</p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    {[
                        { name: "Clean Water Initiative", votes: 51 },
                        { name: "Education For All", votes: 0 },
                        { name: "Healthcare for Children", votes: 53 },
                        { name: "Tree Plantation Drive", votes: 0 },
                    ].map((project, index) => (
                        <button key={index} className="w-full flex items-center justify-between bg-green-600 p-2 rounded-md font-semibold text-white px-3">
                            <p>{project.name} -</p>
                            <p className="font-bold">Votes: {project.votes}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Leaderboard Section */}

            <div className="flex flex-col items-center justify-center w-full h-[300px] max-w-xl shadow-xl bg-gray-100 dark:bg-slate-700 rounded-xl p-5 gap-4">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faTrophy} className="text-amber-500 scale-125" />
                    <p className="font-semibold text-xl dark:text-gray-100">Voting Leaderboard</p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    {[
                        { name: "Clean Water Initiative", votes: 51 },
                        { name: "Education For All", votes: 0 },
                        { name: "Healthcare for Children", votes: 53 },
                        { name: "Tree Plantation Drive", votes: 0 },
                    ].map((project, index) => (
                        <button key={index} className="w-full flex items-center justify-between bg-amber-400 dark:bg-amber-500 p-2 rounded-md font-semibold text-white px-3">
                            <p>{project.name} -</p>
                            <p className="font-bold">Votes: {project.votes}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};