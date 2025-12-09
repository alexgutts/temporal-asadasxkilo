"use client";

import { useState, useEffect, useRef } from "react";

export default function SombreroGame() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [caught, setCaught] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Only render on client to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || caught) return;

    const moveToNewPosition = () => {
      const newX = Math.random() * 70 + 15; // 15-85%
      const newY = Math.random() * 60 + 20; // 20-80%
      setPosition({ x: newX, y: newY });
    };

    // Initial position
    moveToNewPosition();

    // Move every 1.5-2 seconds
    intervalRef.current = setInterval(() => {
      moveToNewPosition();
    }, 1500 + Math.random() * 500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [mounted, caught]);

  const handleCatch = () => {
    if (caught) return;
    setCaught(true);
    setShowConfetti(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleClose = () => {
    setCaught(false);
    setShowConfetti(false);
  };

  // Don't render anything on server
  if (!mounted) {
    return null;
  }

  if (caught) {
    return (
      <>
        {/* Confetti */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${(i * 3.3) % 100}%`,
                  top: `-30px`,
                  fontSize: `${20 + (i % 3) * 5}px`,
                  animation: `fall ${2 + (i % 3)}s ease-in forwards`,
                  animationDelay: `${(i % 10) * 0.2}s`,
                }}
              >
                {["🎉", "🎊", "🥳", "🤠", "🥩", "🔥", "⭐"][i % 7]}
              </div>
            ))}
          </div>
        )}

        {/* Winner Modal */}
        <div
          className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl border-4 border-amber-500">
            <div className="text-5xl mb-4">🤠🎉</div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-red-800 mb-3">
              ¡FELICIDADES!
            </h2>
            <p className="text-lg text-stone-700 mb-2">
              ¡Atrapaste el sombrero!
            </p>
            <div className="bg-red-700 text-white rounded-xl p-4 my-4">
              <p className="text-base font-bold">Tu premio:</p>
              <p className="text-xl font-bold text-amber-400">
                2x1 EN CARNITAS
              </p>
              <p className="text-xs mt-2 opacity-90">
                Muestra esta pantalla en cualquier sucursal
              </p>
            </div>
            <p className="text-stone-600 text-sm mb-4">
              Código: <span className="font-mono font-bold">SOMBRERO2024</span>
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:3781397280"
                className="bg-red-700 text-white px-6 py-3 rounded-full font-bold block"
              >
                ¡Llamar para ordenar!
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="text-stone-500 text-sm underline py-2"
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
    <div
      onClick={handleCatch}
      onTouchStart={handleCatch}
      role="button"
      tabIndex={0}
      className="fixed z-[9997] cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        transition: "left 0.4s ease-out, top 0.4s ease-out",
        WebkitTapHighlightColor: "transparent",
        touchAction: "manipulation",
      }}
    >
      <span
        className="block text-4xl sm:text-5xl select-none"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
          animation: "wiggle 0.6s ease-in-out infinite",
        }}
      >
        🤠
      </span>
    </div>
  );
}
