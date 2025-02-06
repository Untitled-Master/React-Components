import { Textarea } from "@/components/ui/textarea";

function Textarea2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#09090B] p-4">
      <h1 className="text-white text-2xl font-semibold mb-4">Hello</h1>
      <Textarea 
        className="w-96 p-3 border border-gray-700 rounded-lg bg-[#1E1E20] text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none"
        placeholder="Type your message here..."
      />
    </div>
  );
}

export default Textarea2;