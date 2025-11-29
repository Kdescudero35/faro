import { Skeleton } from "@/shared/components/Animated/skeleton";

export const SkeletonListPage = () => (
    <div className="flex overflow-hidden flex-col">
        <Skeleton className="h-[250px] w-full rounded-xl" />
        <div className="mt-5 space-y-3">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
        </div>
    </div>
)