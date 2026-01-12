import {
  ArrowBigDownDash,
  ArrowBigUpDash,
  CircleDollarSign,
} from "lucide-react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

import { ShoppingBag, Coffee, Home, ArrowUpRight } from "lucide-react";
import AreaChart from "../../components/AreaChart";

// Temporarily!
interface Transaction {
  id: number;
  name: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
  icon: any;
  iconBg: string;
  iconColor: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Groceries (Silpo)",
    category: "Food",
    date: "Today, 10:45 AM",
    amount: -450,
    type: "expense",
    icon: ShoppingBag,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: 2,
    name: "Freelance Project",
    category: "Work",
    date: "Yesterday, 14:30 PM",
    amount: 1200,
    type: "income",
    icon: ArrowUpRight,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    name: "Coffee & Cake",
    category: "Cafe",
    date: "Jan 10, 09:15 AM",
    amount: -120,
    type: "expense",
    icon: Coffee,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    name: "Rent Payment",
    category: "Home",
    date: "Jan 01, 10:00 AM",
    amount: -8000,
    type: "expense",
    icon: Home,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

// Temporarily

export default function HomePage() {
  return (
    <>
      <SideBar />
      <Header />
      <div className="grid grid-cols-6 grid-rows-1 gap-20 ml-30">
        <div className="col-span-2 row-span-2 bg-white rounded-2xl ml-15 p-5">
          <div className="flex gap-3 items-center">
            <span className="bg-violet-400 rounded-full p-1">
              <CircleDollarSign color="white" />
            </span>
            <p className="text-gray-500 text-sm font-medium">Total Balance</p>
          </div>

          <p className="mt-5 text-3xl font-bold">$45,500</p>
          <div className="flex gap-1 mt-2">
            <span className="bg-emerald-50 text-emerald-500 px-2 py-1 rounded-md text-sm font-semibold">
              +2.5%
            </span>
            <p>from last month</p>
          </div>
        </div>

        <div className="col-span-2 row-span-2 col-start-3 bg-white rounded-2xl p-5">
          <div className="flex gap-3 items-center">
            <span className="bg-emerald-400 rounded-full p-1">
              <ArrowBigUpDash color="white" />
            </span>
            <p className="text-gray-500 text-sm font-medium">Total Income</p>
          </div>

          <p className="mt-5 text-3xl font-bold">$12,500</p>
          <div className="flex gap-1 mt-2">
            <span className="bg-emerald-50 text-emerald-500 px-2 py-1 rounded-md text-sm font-semibold">
              +12%
            </span>
            <p>from last month</p>
          </div>
        </div>

        <div className="col-span-2 row-span-2 col-start-5 bg-white rounded-2xl mr-15 p-5">
          <div className="flex gap-3 items-center">
            <span className="bg-rose-400 rounded-full p-1">
              <ArrowBigDownDash color="white" />
            </span>
            <p className="text-gray-500 text-sm font-medium">Total Expense</p>
          </div>

          <p className="mt-5 text-3xl font-bold">$8,400</p>
          <div className="flex gap-1 mt-2">
            <span className="bg-rose-50 text-rose-500 px-2 py-1 rounded-md text-sm font-semibold">
              +10%
            </span>
            <p>from last month</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 ml-30 mt-5">
        <h3 className="ml-15 font-bold text-2xl">Transaction History</h3>
        {transactions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors pl-15 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full ${item.iconBg} ${item.iconColor}`}
              >
                <item.icon size={20} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>

            <div
              className={`font-bold ${
                item.type === "income" ? "text-green-600" : "text-gray-800"
              }`}
            >
              {item.type === "income" ? "+" : ""}
              {item.amount} $
            </div>
          </div>
        ))}
      </div>
      <div className="ml-30">
        <h3 className="ml-15 font-bold text-2xl mt-10">Balance</h3>
        <AreaChart />
      </div>
    </>
  );
}
