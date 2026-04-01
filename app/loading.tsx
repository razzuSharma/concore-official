import Container from "@/components/HomePage/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-transparent">
      <section className="border-b border-[#E2E8F0] bg-[#F6F7F2]">
        <Container className="grid min-h-[calc(100vh-7rem)] items-center gap-16 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-8 lg:py-16">
          <div className="max-w-[40rem]">
            <Skeleton className="h-24 w-[18rem] bg-[#DCE3E8] sm:h-28 sm:w-[24rem]" />
            <Skeleton className="mt-3 h-24 w-[20rem] bg-[#DCE3E8] sm:h-28 sm:w-[26rem]" />
            <Skeleton className="mt-3 h-24 w-[16rem] bg-[#CFEAE6] sm:h-28 sm:w-[22rem]" />

            <div className="mt-8 space-y-3 border-l border-[#D5DDE5] pl-5">
              <Skeleton className="h-4 w-full max-w-[31rem]" />
              <Skeleton className="h-4 w-full max-w-[28rem]" />
              <Skeleton className="h-4 w-[72%]" />
            </div>

            <div className="mt-6 border border-[#DCE3E8] bg-[#FBFCFA]/92 px-5 py-4">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="mt-3 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-[88%]" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Skeleton className="h-11 w-44 bg-[#CFEAE6]" />
              <Skeleton className="h-11 w-32 bg-[#E2E8F0]" />
            </div>
          </div>

          <div className="relative hidden min-h-[560px] lg:block">
            <div className="absolute inset-[10%] rotate-45 border border-[#E8EDF1]" />
            <div className="absolute inset-[24%] border border-[#EDF2F6]" />
            <div className="absolute left-1/2 top-[14%] h-[72%] w-px -translate-x-1/2 bg-[#D5DDE5]" />
            <div className="absolute left-[18%] top-1/2 h-px w-[64%] -translate-y-1/2 bg-[#D5DDE5]" />
            <Skeleton className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border border-[#94A3B8] bg-[#FBFCFA]" />
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E2E8F0] bg-[#F8F9F5] py-5 md:py-6">
        <Container>
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-40" />
          </div>
        </Container>
      </section>

      <section className="bg-[#F8F9F5] py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="mt-4 h-14 w-[24rem]" />
            <Skeleton className="mt-4 h-4 w-[34rem]" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border border-[#E2E8F0] bg-[#FFFFFF] p-6">
                <Skeleton className="h-8 w-40" />
                <Skeleton className="mt-5 h-3 w-20" />
                <Skeleton className="mt-2 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-[82%]" />
                <Skeleton className="mt-5 h-3 w-24" />
                <Skeleton className="mt-2 h-4 w-[78%]" />
                <Skeleton className="mt-5 h-3 w-16" />
                <Skeleton className="mt-2 h-4 w-[88%]" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
