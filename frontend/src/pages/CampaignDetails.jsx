import { useState } from "react";

export default function CampaignDetails() {

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

    return (
        <div className="container mx-auto p-10 flex flex-col items-start w-full">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                Support Flood Relief Efforts
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
                Contribute to provide essential aid to flood victims. Vote on fund allocation and track its impact in real-time.
            </p>
            <div className="flex flex-col w-full max-w-xl">
                <input
                    placeholder="Enter amount in ETH"
                    className="mt-4 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded w-full sm:w-80"
                    value={initialbalance}
                    onChange={typingInputbalance}
                    onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
                            e.preventDefault();
                        }
                    }}
                />
                <button className="w-full sm:w-80 cursor-pointer mt-4 bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded">
                    Donate & Vote with MetaMask
                </button>
            </div>
        </div>
    );
};