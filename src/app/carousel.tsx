// src/components/InfiniteRedSquareCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import './OfferCard.css';

const RedSquareCarousel: React.FC = () => {
  const squares = Array.from({ length: 3 }, (_, i) => i);
  const [squareWidth, setSquareWidth] = useState(0);

  useEffect(() => {
    setSquareWidth(window.innerWidth - 16);
  }, []);

  const offers = [
    {
      id: 1,
      badge: "-20%",
      title: "Προσφορά Σαββάτου",
      description: "Κάθε Σάββατο απόγευμα, από 18:00 - 22:00, έκπτωση 20% σε όλα τα σουβλάκια.",
    },
    {
      id: 2,
      badge: "2+1",
      title: "Δώρο για Ομάδες",
      description: "Για παραγγελίες άνω των 10 σουβλακιών, το 11ο δώρο!",
    },
    {
      id: 3,
      badge: "2+4",
      title: "Δώρο για Ομάδες παλι",
      description: "Για παραγγελίες άνω των 10 σουβλακιών, το 11ο δώρο!",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const transitionDuration = 500; // ms
  const pauseDuration = 2000; // ms

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentIndex = 0;
    const totalSquares = squares.length;

    const move = () => {
      currentIndex++;
      container.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      container.style.transform = `translateX(-${currentIndex * (squareWidth)}px)`;

      if (currentIndex === totalSquares) {
        setTimeout(() => {
          container.style.transition = "none";
          currentIndex = 0;
          container.style.transform = `translateX(0px)`;
        }, transitionDuration);
      }
    };

    const interval = setInterval(move, transitionDuration + pauseDuration);
    return () => clearInterval(interval);
  }, [squares.length, squareWidth]);

  return (
    <div
    className="w-screen"
    style={{
        backgroundImage: "url('/souvlakiBG2.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}
    >
    {/* Static Title */}
    <div className="text-white text-3xl font-bold text-center py-12 z-10 relative">
        Προσφορές
    </div>

    {/* Carousel Wrapper */}
    <div className="overflow-hidden w-screen relative">
        <div
        ref={containerRef}
        className="flex gap-4"
        style={{ width: `${offers.length * 2 * squareWidth}px` }}
        >
        {[...offers, ...offers].map((offer, idx) => (
            <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center text-white text-3xl font-bold"
            style={{
                width: `${squareWidth - 16}px`,
                height: `auto`,
                padding: '20px 0',
                backgroundColor: "transparent",
            }}
            >
            <div className="offer-card">
                <div className="offer-card-header">
                    <div className="offer-badge">
                    {offer.badge}
                    </div>
                    <h3 className="offer-title">{offer.title}</h3>
                </div>
                <p className="offer-description">{offer.description}</p>
                <button className="offer-button">Δες περισσότερα →</button>
                </div>
            </div>
        ))}
        </div>
    </div>
    </div>

);

};

export default RedSquareCarousel;


