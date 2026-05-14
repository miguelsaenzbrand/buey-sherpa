"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

export default function PropuestasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // En una app real, esto vendría de una variable de entorno
  // o se validaría en el servidor. Para este MVP usamos una simple.
  const MASTER_PASSWORD = "cerro-nahuel-pan";

  useEffect(() => {
    const auth = localStorage.getItem("buey_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MASTER_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("buey_auth", "true");
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!isAuthenticated ? (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-buey-dark text-buey-white flex items-center justify-center p-6"
        >
          <div className="max-w-md w-full space-y-12 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4">
                <Lock size={24} className="text-buey-orange" />
              </div>
              <h2 className="text-3xl font-serif italic font-light tracking-tight">Acceso Exclusivo</h2>
              <p className="text-sm opacity-40 uppercase tracking-[0.3em]">Contenido Confidencial</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresar contraseña"
                className="w-full bg-transparent border-b border-white/20 py-4 text-center outline-none focus:border-buey-orange transition-colors placeholder:text-white/10"
                autoFocus
              />
              {error && (
                <p className="text-xs text-red-500 font-mono tracking-widest uppercase italic">Contraseña incorrecta</p>
              )}
              <button
                type="submit"
                className="w-full bg-white text-buey-dark py-4 uppercase tracking-[0.3em] text-[10px] font-black hover:bg-buey-orange transition-colors"
              >
                Validar Identidad
              </button>
            </form>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
