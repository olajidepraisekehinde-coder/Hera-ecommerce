import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonDetail() {
  return (
    <div className="text-white p-8 md:p-10">
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="border-2 border-solid border-black/50 md:w-96 h-64 md:h-96 m-auto bg-black rounded-md p-5">
          <Skeleton height={400} width={320} />
        </div>
        <div className="flex flex-col pt-4">
          <div className="lg:w-[600px] mb-5">
            <Skeleton height={50} count={2} />
          </div>
          <div className="lg:w-96 mt-5 mb-5">
            <Skeleton count={5} height={20} />
          </div>
          <div className="mt-5">
            <Skeleton height={30} width={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
