export default function TransactionHistory() {
    const transactions = [
        { hash: "0x1234...abcd", amount: "0.5 ETH", date: "March 27, 2025", campaign: "Flood Relief Fund" },
        { hash: "0x5678...efgh", amount: "1.0 ETH", date: "March 28, 2025", campaign: "Education for Kids" },
    ];

    return (
        <div className="container mx-auto p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Transaction History</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Track your donations and their impact.</p>
            <div className="mt-6 space-y-4">
                {transactions.map((tx, index) => (
                    <div key={index} className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                        <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Campaign:</span> {tx.campaign}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Tx:</span> {tx.hash}
                        </p>
                        <p className="font-semibold text-lg text-gray-800 dark:text-gray-100">{tx.amount}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{tx.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};