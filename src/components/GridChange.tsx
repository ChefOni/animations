import { useState } from "react";

const GridChange = () => {
    const [activeView, setActiveView] = useState("list"); // Track the active button

    return (
        <div className="space-y-8">
            <h1 className="font-bold text-4xl">Grids</h1>

            {/* Buttons for Grid Selection */}
            <div className="flex items-center gap-4">
                {["list", "card", "pack"].map((view) => (
                    <button
                        key={view}
                        onClick={() => setActiveView(view)}
                        className={`px-5 py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out
                        ${activeView === view ? "bg-blue-400 text-white shadow-lg scale-105" : "bg-gray-100 hover:bg-gray-200"}
                        `}
                    >
                        {view.charAt(0).toUpperCase() + view.slice(1)} View
                    </button>
                ))}
            </div>

            {/* Cards Display */}
            <div
                className={`flex items-center gap-4 transition-all duration-500 ${
                    activeView === "list" ? "flex-col" : "flex-row"
                }`}
            >
                {[0, 1, 2].map((index) => (
                    <div
                        key={index}
                        className={`shadow-lg rounded-md transition-all duration-500 ${
                            activeView === "list"
                                ? "w-[100px] h-[100px]" // Shrink in list view
                                : "w-[150px] h-[150px]" // Default size
                        } ${
                            activeView === "pack"
                                ? `absolute left-${index * 8} top-${index * 5} rotate-${index * 5}`
                                : "relative"
                        }`}
                        style={{
                            backgroundColor: activeView === "pack" ? getRandomColor(index) : "#e2e8f0",
                            transform: activeView === "pack" ? `rotate(${index * 10}deg)` : "rotate(0deg)",
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

// Function to generate different colors for the Pack View
const getRandomColor = (index:any) => {
    const colors = ["#F87171", "#34D399", "#60A5FA"]; // Red, Green, Blue shades
    return colors[index % colors.length];
};

export default GridChange;
