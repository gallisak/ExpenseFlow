import { Plus } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between ml-30">
      <div className="flex flex-col p-5">
        <h1 className="font-black text-3xl">Dashboard</h1>
        <p className="font-medium text-gray-400">Hi Andrii, Good Morning!</p>
      </div>

      <div className="p-5">
        <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm active:scale-95">
          <Plus size={20} />
          <span>Add Transaction</span>
        </button>
      </div>
    </div>
  );
}
