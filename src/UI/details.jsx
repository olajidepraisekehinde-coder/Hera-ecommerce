import useData from '../utility/useData'
import { useParams } from 'react-router-dom';
import SkeletonDetail from './SkeletonDetail';

export default function Detail() {
 
    const { id } = useParams();

    const [data, loading] = useData('https://fakestoreapi.com/products');
    console.log('URL id:', id)

    const fetchData = data?.find((item) => item.id === Number(id))

    console.log('Fetched product:', fetchData)

    return (
            <div className="text-white p-8 md:p-10">

                {loading ? (
                    <SkeletonDetail />
                ) : (
                    fetchData && (
                    <div className=" flex flex-col lg:flex-row lg:justify-around">
    
                        <div className="border-2 border-solid border-black/50 md:w-96 h:64  m-auto md:h-96 bg-black hover:bg-black/50 rounded-md p-5">
                            <img src={fetchData.image} alt={fetchData.title} className="aspect-square w-80 h-full display: block" />
                        </div>

                        <div className="flex flex-col pt-4">
                            <h3 className='text-5xl font-bold lg:w-[600px] text-[#F2CA50]'>{fetchData.title}</h3>
                            <p className='lg:w-96 mt-5'>{fetchData.description}</p>
                            <p className='mt-5 text-2xl font-bold text-[#F2CA50]'> Cost: ${fetchData.price.toFixed(2)}</p>
                        </div>
                    </div>
                    )
                )}
            </div>
    )
}

