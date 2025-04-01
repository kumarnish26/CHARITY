import earthIcon from "../assets/earth-icon.png"

export default function Home() {
    return (
        <div className="container mx-auto px-5 flex flex-col pt-10">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <img src={earthIcon} className="sm:w-10 h-10" />
                    <h1 className="text-4xl font-bold">Charity Voting & Impact Tracking</h1>
                </div>
                <ul className="flex flex-col items-start justify-start gap-3 pl-5">
                    <li className="text-md">
                        🔹 <strong>Transparent Donations</strong> – Every contribution is securely recorded on the blockchain for accountability.
                    </li>
                    <li className="text-md">
                        🔹 <strong>Decentralized Voting</strong> – Donors and communities can vote on fund allocation for greater impact.
                    </li>
                    <li className="text-md">
                        🔹 <strong>Real-Time Impact Tracking</strong> – Monitor how donations are used with on-chain verification.
                    </li>
                    <li className="text-md">
                        🔹 <strong>Global & Secure</strong> – Support causes worldwide with direct, trustless transactions.
                    </li>
                </ul>
            </div>
            <p className="mt-4 text-lg">Empower change with transparency and community-driven decisions.</p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 transition-all text-white px-6 py-3 rounded-lg shadow-md cursor-pointer w-40">
                Connect Wallet
            </button>
        </div>
    );
};