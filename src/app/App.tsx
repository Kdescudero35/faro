import { Outlet } from "react-router-dom";
import { Header } from "@/shared/components/Header";

export default function App() {
  return (
    <div className="flex relative flex-col w-full min-h-screen">
      <Header />

      <main className="min-h-dvh">
        <div className="px-4 mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>

      <footer className="mt-10 border-t">
        <div className="px-4 py-6 mx-auto max-w-6xl text-xs opacity-70"></div>
      </footer>
    </div>
  );
}
