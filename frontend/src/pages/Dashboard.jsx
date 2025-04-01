export default function Dashboard() {
    const campaigns = [
        { id: 1, title: "Flood Relief Fund", amountRaised: "3.5 ETH", goal: "10 ETH" },
        { id: 2, title: "Education for Underprivileged Kids", amountRaised: "1.2 ETH", goal: "5 ETH" },
    ];
  
    return (
        <div className="container mx-auto p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                Ongoing Charity Campaigns
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
                Vote on fund allocation and track impact in real-time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {campaigns.map((campaign) => (
                    <div 
                        key={campaign.id} 
                        className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {campaign.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Raised: {campaign.amountRaised} / {campaign.goal}
                        </p>
                        <div className="mt-4 flex gap-4">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                                Donate
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                                Vote
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
