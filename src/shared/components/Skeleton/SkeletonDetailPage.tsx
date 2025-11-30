import { Skeleton } from "@/shared/components/Animated/skeleton";

export const SkeletonDetailPage = () => (
    <div className="flex overflow-x-hidden relative flex-col mt-8 w-full h-auto min-h-screen group/design-root">
        <div className="flex flex-col h-full layout-container grow">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
                <Skeleton className="h-[450px] w-full rounded-xl" />
                <div className="flex flex-col gap-6">
                    <Skeleton className="h-4 w-[30%]" />
                    <Skeleton className="h-4 w-[80%]" />
                    <Skeleton className="h-4 w-[40%]" />
                    <Skeleton className="h-4 w-[60%]" />
                    <Skeleton className="h-4 w-[50%]" />
                    <Skeleton className="h-4 w-[40%]" />
                    <Skeleton className="h-4 w-[30%]" />
                    <Skeleton className="h-4 w-[20%]" />
                </div>
            </div>
        </div>
    </div>
)