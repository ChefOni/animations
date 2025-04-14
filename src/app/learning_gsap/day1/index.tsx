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
