import {useRef,useEffect} from "react";
import gsap from 'gsap'

interface MovingCardsProps {
    direction?: "left" | "right";
}

const Cards = () => {
    return (
        <div className="w-[300px] h-18 bg-teal-100 p-3 flex flex-col rounded-xl flex-shrink-0">
            <p className="text-teal-800 font-bold text-lg">Yayy</p>
            <p className="text-teal-600 text-sm">Get it for free</p>
        </div>
    )
}

export const MovingCards = ({ direction = "left" }: MovingCardsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Create cards array with direction-based ordering
    const baseCards = Array.from({ length: 5 });
    const duplicatedCards = direction === 'left'
        ? [...baseCards, ...baseCards]  // Default: left-to-right scroll
        : [...baseCards.reverse(), ...baseCards.reverse()];

    // @ts-ignore
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const items = Array.from(container.children) as HTMLElement[];
        if (!items.length) return;

        const totalWidth = items[0].offsetWidth * items.length + (16 * (items.length - 1));
        const movement = direction === 'left' ? -totalWidth/2 : totalWidth/2;

        gsap.set(items, {
            x: (i) => (direction === 'left' ? i * (items[0].offsetWidth + 16) : -i * (items[0].offsetWidth + 16) )
        });

        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "none" }
        });

        tl.to(items, {
            x: `+=${movement}`,
            duration: 20,
            modifiers: {
                x: (x) => {
                    const xNum = parseFloat(x);
                    const wrapWidth = totalWidth/2;
                    return (xNum % wrapWidth) + 'px';
                }
            }
        });

        return () => tl.kill();
    }, [direction]);

    return (
        <div className="relative overflow-hidden">
            <div
                ref={containerRef}
                className="flex gap-4 py-4"
            >
                {duplicatedCards.map((_, index) => (
                    <Cards key={index} />
                ))}
            </div>
        </div>
    );
};



const AbodeCards = () =>{
    return (
        <div className=" w-[500px]  bg-amber-100 p-6 rounded-xl flex flex-col  justify-between items-stretch ">
            <div className="flex items-center justify-center gap-6">
                <img
                    src="https://img.freepik.com/premium-vector/cute-elements-abstract-geometric-shapes-message-creative-composition-funny-decoration-with-smiling-circle-stars-creative-concept-colored-flat-vector-illustration-isolated-white-background_198278-22657.jpg?ga=GA1.1.2044537627.1741001111&semt=ais_hybrid&w=740"
                     alt={"Image"}
                    className="h-52 w-80 object-cover rounded-xl"
                />
            </div>
            <div className="flex flex-col  h-[30%] gap-2 w-full my-4">
                <MovingCards/>
                <MovingCards direction={"right"}/>
            </div>

        </div>
    )
}

export default AbodeCards
