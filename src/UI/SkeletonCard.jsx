import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonCard() {
  return (
    <div className="bg-black border-2 border-solid border-black rounded-xl p-6 shadow-2xl shadow-gray">
      <div className="aspect-square w-full mb-5">
        <Skeleton height={300} />
      </div>
      <div className="text-center pt-5">
        <div className="mb-3">
          <Skeleton count={2} height={20} />
        </div>
        <div className="flex justify-around items-center pt-10 gap-2">
          <Skeleton width={60} height={20} />
          <Skeleton width={120} height={40} />
        </div>
      </div>
    </div>
  )
}
