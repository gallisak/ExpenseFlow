import {
  ArrowBigDownDash,
  ArrowBigUpDash,
  CircleDollarSign,
} from "lucide-react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

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
    </>
  );
}
