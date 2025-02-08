import { Badge } from "@/components/ui/badge"

function Card({ imageUrl, title, description, tags }) {
    return (
        <div className="max-w-md bg-[#18181B] text-[#FAFAFA] p-4 rounded-lg shadow-lg">
            <img 
                src={imageUrl || "https://camo.githubusercontent.com/630132b33c6e64c8f88ab4fd9d12d2ed7be624cd31fc3f711be7906771b91579/68747470733a2f2f692e70696e696d672e636f6d2f31323030782f66662f64362f38612f66666436386138646366653136313338356635376531643339613965613934622e6a7067"}
                alt={title || "Project Title"}
                className="w-full h-70 object-cover rounded-md"
            />
            <div className="mt-4">
                <h1 className="text-xl font-semibold">{title || "Estin-SRC"}</h1>
                <p className="text-sm text-gray-400">{description || "Description of the project"}</p>
                <div className="mt-2">
                    {tags ? (
                        <span ><Badge className="bg-white text-[black] hover:text-[white]">{tags}</Badge></span>
                    ) : (
                        <span className="text-gray-500 text-xs">No tags available</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
