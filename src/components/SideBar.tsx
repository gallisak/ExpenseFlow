import {
  Wallet,
  House,
  Gauge,
  Activity,
  MessageSquareText,
  Trophy,
  Headset,
  Settings,
} from "lucide-react";

export default function SideBar() {
  return (
    <div className="fixed bg-violet-700 h-full w-30">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <Wallet className="mt-6" color="white" size={35} />
          <h1 className="text-white font-black mt-2">Expense Flow</h1>

          <div className="mt-10 p-1 bg-cyan-500 rounded-sm">
            <House color="white" size={35} />
          </div>

          <div className="mt-7 p-1 hover:bg-cyan-500 rounded-sm">
            <Gauge color="white" size={35} />
          </div>

          <div className="mt-7 p-1 hover:bg-cyan-500 rounded-sm">
            <Activity color="white" size={35} />
          </div>

          <div className="mt-7 p-1 hover:bg-cyan-500 rounded-sm">
            <MessageSquareText color="white" size={35} />
          </div>

          <div className="mt-7 p-1 hover:bg-cyan-500 rounded-sm">
            <Trophy color="white" size={35} />
          </div>
        </div>

        <div>
          <div className="mb-7 p-1 hover:bg-cyan-500 rounded-sm">
            <Headset color="white" size={35} />
          </div>

          <div className="mb-6 p-1 hover:bg-cyan-500 rounded-sm">
            <Settings color="white" size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
