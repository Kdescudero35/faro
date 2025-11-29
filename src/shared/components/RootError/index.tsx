import { CircleAlert, ArrowLeft } from "lucide-react"
import { useNavigate } from 'react-router-dom';

const RootError: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <div className="flex overflow-x-hidden relative flex-col w-full h-auto min-h-screen group/design-root">
            <div className="flex flex-col h-full layout-container grow">
                <main className="flex justify-center items-center px-4 py-8 grow sm:px-6 lg:px-8 md:py-12">
                    <div className="w-full max-w-md text-center">
                        <div className="flex justify-center items-center">
                            <span className="text-9xl font-extrabold tracking-tighter text-primary">4</span>
                            <CircleAlert size={100} className="mx-2 text-8xl text-slate-400 dark:text-slate-600" />
                            <span className="text-9xl font-extrabold tracking-tighter text-primary">4</span>
                        </div>
                        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Página no encontrada</h1>
                        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">Lo sentimos, no pudimos encontrar la página que buscas. Revisa la URL y vuelve a intentarlo.</p>
                        <div className="mt-8">
                            <button
                                onClick={handleNavigate}
                                className="inline-flex gap-2 justify-center items-center px-6 py-3 text-base font-bold text-white rounded-lg transition-colors bg-primary hover:bg-primary/90"
                            >
                                <ArrowLeft size={20} />
                                Volver al inicio
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RootError
