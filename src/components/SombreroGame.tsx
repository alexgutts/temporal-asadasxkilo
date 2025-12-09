"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function SombreroGame() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(true);
  const [caught, setCaught] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const jumpTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const moveRandomly = useCallback(() => {
    if (caught) return;

    // Trigger jump animation
    setIsJumping(true);

    // Clear any existing timeout
    if (jumpTimeoutRef.current) {
      clearTimeout(jumpTimeoutRef.current);
    }

    // Move to new position after a brief moment
    jumpTimeoutRef.current = setTimeout(() => {
      const newX = Math.random() * 80 + 10; // 10-90% to keep it visible on mobile
      const newY = Math.random() * 70 + 15; // 15-85% avoid top nav and bottom button
      setPosition({ x: newX, y: newY });
      setIsJumping(false);
    }, 150);

    // Randomly hide/show to make it trickier (less often on mobile)
    if (Math.random() > 0.85) {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 400);
    }
  }, [caught]);

  useEffect(() => {
    if (caught) return;

    // Move faster and more frequently for better mobile experience
    const interval = setInterval(moveRandomly, 1200 + Math.random() * 800);
    return () => {
      clearInterval(interval);
      if (jumpTimeoutRef.current) {
        clearTimeout(jumpTimeoutRef.current);
      }
    };
  }, [moveRandomly, caught]);

  const handleCatch = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCaught(true);
    setShowConfetti(true);

    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleClose = () => {
    setCaught(false);
    setShowConfetti(false);
  };

  if (caught) {
    return (
      <>
        {/* Confetti */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-20px`,
                  fontSize: `${Math.random() * 20 + 15}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              >
                {["🎉", "🎊", "🥳", "🤠", "🥩", "🔥", "⭐"][Math.floor(Math.random() * 7)]}
              </div>
            ))}
          </div>
        )}

        {/* Winner Modal */}
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl border-4 border-amber-500 animate-bounce-once">
            <div className="text-5xl sm:text-6xl mb-4">🤠🎉</div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-red-800 mb-4">
              ¡FELICIDADES!
            </h2>
            <p className="text-lg sm:text-xl text-stone-700 mb-2">
              ¡Atrapaste el sombrero!
            </p>
            <div className="bg-red-700 text-white rounded-xl p-4 my-6">
              <p className="text-base sm:text-lg font-bold">Tu premio:</p>
              <p className="text-xl sm:text-2xl font-bold text-amber-400">
                2x1 EN CARNITAS
              </p>
              <p className="text-xs sm:text-sm mt-2 opacity-90">
                Muestra esta pantalla en cualquier sucursal
              </p>
            </div>
            <p className="text-stone-600 text-sm mb-4">
              Código: <span className="font-mono font-bold">SOMBRERO2024</span>
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:3781397280"
                className="bg-red-700 hover:bg-red-600 active:bg-red-800 text-white px-6 py-3 rounded-full font-bold transition-colors"
              >
                ¡Llamar para ordenar!
              </a>
              <button
                onClick={handleClose}
                className="text-stone-500 hover:text-stone-700 active:text-stone-900 text-sm underline py-2"
              >
                Cerrar y seguir jugando
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <button
      onClick={handleCatch}
      onTouchEnd={handleCatch}
      className={`fixed z-[9997] select-none touch-manipulation ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isJumping ? "scale-150" : "scale-100"}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        fontSize: "2.5rem",
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
        transition: isJumping ? "transform 0.15s ease-out" : "left 0.3s ease-out, top 0.3s ease-out, transform 0.15s ease-out, opacity 0.2s ease",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        padding: "0.5rem",
      }}
      aria-label="Atrapa el sombrero para ganar un premio"
    >
      <span
        className={`inline-block ${isJumping ? "animate-ping" : ""}`}
        style={{
          display: "inline-block",
          animation: isJumping ? "none" : "wiggle 0.5s ease-in-out infinite",
        }}
      >
        🤠
      </span>
    </button>
  );
}
