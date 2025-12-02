import { Outlet } from "react-router-dom";
import { Header } from "@/shared/components/Header";

export default function App() {
  return (
    <div className="flex relative flex-col w-full min-h-screen">
      <Header />

      <main className="min-h-dvh bg-[#ededed]">
        <div className="px-1 mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
