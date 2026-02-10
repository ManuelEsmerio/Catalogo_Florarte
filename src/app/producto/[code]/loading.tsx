import { Skeleton } from '@/components/ui/skeleton';

export default function ProductLoading() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-card p-4 sm:p-8 rounded-2xl shadow-lg border">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-left">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-4 w-1/4 mt-4" />
          </div>
          <div className="my-8 flex-1 space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-right">
              <Skeleton className="h-10 w-1/3 ml-auto" />
              <Skeleton className="h-4 w-1/4 ml-auto mt-1" />
            </div>
            <Skeleton className="h-12 w-full mt-2" />
            <Skeleton className="h-12 w-full mt-2" />
          </div>
        </div>
      </div>
      <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Skeleton className="h-8 w-1/2 mx-auto" />
              <Skeleton className="h-6 w-3/4 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="aspect-[4/5] w-full rounded-xl" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                ))}
            </div>
          </div>
      </section>
    </div>
  );
}
