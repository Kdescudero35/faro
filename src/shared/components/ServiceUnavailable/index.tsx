import { CloudOff } from "lucide-react"

const reload = () => {
    window.location.reload();
}

export const ServiceUnavailable = () => (
    <section className="flex flex-col flex-1 justify-center items-center py-16 text-center">
        <div className="flex flex-col gap-6 items-center px-4 py-6">
            <div className="flex justify-center items-center text-slate-400 dark:text-slate-500">
                <CloudOff size={96} />
            </div>
            <div className="flex flex-col gap-2 items-center max-w-lg">
                <p className="text-2xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Servicio no disponible actualmente</p>
                <p className="text-base font-normal leading-normal text-slate-600 dark:text-slate-400">Actualmente estamos teniendo problemas para conectarnos a nuestros servicios. Nuestro equipo está consciente del problema y está trabajando para solucionarlo. Por favor, espere unos momentos e intente de nuevo.</p>
            </div>
            <button
                onClick={reload}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Intentar de nuevo</span>
            </button>
        </div>
    </section>
)