import { Outlet } from 'react-router-dom';
import { ShoppingBag } from "lucide-react"

import { LogoFaro } from "@/assets/logoFaro"
import { useCartStore } from '@/store/cartStore';
import { AnimatedThemeToggler } from "@/shared/components/Animated/animated-theme-toggler"

export default function App() {
  const items = useCartStore((s) => s.items);

  return (
    <div className="flex relative flex-col w-full min-h-screen">
      <header className="flex sticky top-0 z-50 justify-between items-center px-4 py-3 whitespace-nowrap border-b border-gray-200 backdrop-blur-sm dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 sm:px-6 lg:px-8">
        <div className="flex gap-2 items-center">
          <div className="size-6 text-primary">
            <LogoFaro />
          </div>
          <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-300">Faro</h2>
        </div>
        <div className="flex gap-2 items-center">
          <button className="relative p-2 rounded-full hover:bg-accent">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {items.length}
              </span>
            )}
            <ShoppingBag size={18} />
          </button>
          <AnimatedThemeToggler
            className="p-2 rounded-full hover:bg-accent"
            duration={500}
          />
        </div>
      </header>

      <main className="min-h-dvh">
        <div className="px-4 mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>

      <footer className="mt-10 border-t">
        <div className="px-4 py-6 mx-auto max-w-6xl text-xs opacity-70">
        </div>
      </footer>
    </div>
  );
}