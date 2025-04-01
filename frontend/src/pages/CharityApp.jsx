import CampaignDetails from "./CampaignDetails";
import Dashboard from "./Dashboard";
import Dpl from "./dpl";
import Home from "./Home";
import TransactionHistory from "./TransactionHistory";

export default function CharityApp() {
    return (
        <div>
            <Home/>
            <Dpl raised={0} />
            <Dashboard/>
            <CampaignDetails/>
            <TransactionHistory/>
        </div>
    )
}