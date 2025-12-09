"use client";

import { useState, useEffect, useCallback } from "react";

export default function SombreroGame() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(true);
  const [caught, setCaught] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const moveRandomly = useCallback(() => {
    if (caught) return;

    const newX = Math.random() * 85 + 5; // 5-90% to keep it visible
    const newY = Math.random() * 85 + 5;
    setPosition({ x: newX, y: newY });

    // Randomly hide/show to make it trickier
    if (Math.random() > 0.7) {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 500);
    }
  }, [caught]);

  useEffect(() => {
    if (caught) return;

    const interval = setInterval(moveRandomly, 1500 + Math.random() * 1000);
    return () => clearInterval(interval);
  }, [moveRandomly, caught]);

  const handleCatch = () => {
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
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border-4 border-amber-500 animate-bounce-once">
            <div className="text-6xl mb-4">🤠🎉</div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-red-800 mb-4">
              ¡FELICIDADES!
            </h2>
            <p className="text-xl text-stone-700 mb-2">
              ¡Atrapaste el sombrero!
            </p>
            <div className="bg-red-700 text-white rounded-xl p-4 my-6">
              <p className="text-lg font-bold">Tu premio:</p>
              <p className="text-2xl font-bold text-amber-400">
                2x1 EN CARNITAS
              </p>
              <p className="text-sm mt-2 opacity-90">
                Muestra esta pantalla en cualquier sucursal
              </p>
            </div>
            <p className="text-stone-600 text-sm mb-4">
              Código: <span className="font-mono font-bold">SOMBRERO2024</span>
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:3781397280"
                className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold transition-colors"
              >
                ¡Llamar para ordenar!
              </a>
              <button
                onClick={handleClose}
                className="text-stone-500 hover:text-stone-700 text-sm underline"
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
      className={`fixed z-[9997] cursor-pointer select-none transition-all duration-300 hover:scale-125 active:scale-90 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        fontSize: "2rem",
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
      }}
      aria-label="Atrapa el sombrero para ganar un premio"
      title="¡Atrápame!"
    >
      🤠
    </button>
  );
}
