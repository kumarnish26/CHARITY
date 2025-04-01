import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import CampaignDetails from "./pages/CampaignDetails";
import TransactionHistory from "./pages/TransactionHistory";
import CharityApp from "./pages/CharityApp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      { index: true, element: <CharityApp/> },
      { path: '/dashboard', element: <Dashboard/> },
      { path: '/campaigns', element: <CampaignDetails/> },
      { path: '/transactions', element: <TransactionHistory/> },
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}