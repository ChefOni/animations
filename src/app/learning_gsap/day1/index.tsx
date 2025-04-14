import { useState, useRef, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import gsap from "gsap";

const HeartAnimation = () => {
    const [liked, setLiked] = useState(false);
    const heartRef = useRef(null);

    useEffect(() => {
        // GSAP animation on click
        gsap.to(heartRef.current, {
            scale: 1.35,
            duration: 0.3,
            ease: "elastic.out(1, 0.8)",
            yoyo: true,
            repeat: 1
        });
    }, [liked]);

    // @ts-ignore
    return (
        <div className="flex justify-center items-center h-screen cursor-pointer">
            <FaHeart
                ref={heartRef}
                onClick={() => setLiked(!liked)}
                size={60}
                color={liked ? "purple" : "gray"}
                className="transition-colors duration-200"
            />
        </div>
    );
};

export default HeartAnimation;


export const BoxAnimation = () => {
    const cards = useRef([]);

    const addToRefs = (el, index) => {
        if (el) cards.current[index] = el;
    };

    const handleHover = () => {
        cards.current.forEach((card, index) => {
            gsap.to(card, {
                y: -10 * (index + 1),
                x: 20 * (index + 1),
                duration: 0.3,
                ease: "power2.out",
            });
        });
    };

    const handleMouseLeave = () => {
        cards.current.forEach((card) => {
            gsap.to(card, {
                y: 0,
                x: 0,
                duration: 0.5,
                ease: "back.out(1.2)",
            });
        });
    };

    return (
        <div className="relative flex justify-center items-center h-screen bg-gray-100">
            {[2, 1, 0].map((i) => (
                <div
                    key={i}
                    ref={(el) => addToRefs(el, i)}
                    className={`absolute w-60 h-80 rounded-xl  z-${10 + i} ${
                        i === 0
                            ? "bg-lime-300 cursor-pointer"
                            : i === 1
                                ? "bg-lime-200"
                                : "bg-lime-100"
                    }`}
                    style={{ left: "50%", transform: "translate(-50%, 0)" }}
                    {...(i === 0 && {
                        onMouseEnter: handleHover,
                        onMouseLeave: handleMouseLeave,
                    })}
                />
            ))}
        </div>
    );
};



