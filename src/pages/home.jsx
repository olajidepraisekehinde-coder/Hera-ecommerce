import useData from '../utility/useData'
import { Link } from "react-router-dom"
import image from "../assets/heroImag.jpeg"
import SkeletonCard from "../UI/SkeletonCard"

export default function Home() {

    const [data, loading] = useData('https://fakestoreapi.com/products?limit=4');
    console.log(data)
    return (
        <div>
            <section className='relative'>

                <header className='w-full'>

                    <img src={image} alt="hera" className='w-full h-screen brightness-50 display-block' />
                    {/* <div className='absolute inset-0 md:text-left lg:text-left mt-[7rem] pl-8 md:pt-[10rem]'></div> */}
                    <div className='absolute inset-0 pl-10 flex  flex-col justify-center 2xl:justify-center md:items-center lg:justify-start lg:items-start lg:pt-64'>
                        <h2 className='text-[#F2CA50] text-xl font-bold'> Limited Edition Series</h2>
                        <h1 className='text-bold text-4xl md:text-5xl text-white'>The Golden Hour Collection</h1>

                        <div className='mt-5 text-white'>
                            <p>Experience the pinnacle of craftsmanship with our 2026 bespoke archive.</p>
                            <p>Designed for the discerning individual.</p>
                        </div>
                        <div className='flex'>
                            <Link to="/product"><button className='bg-[#3C2F00] mt-5 text-white  px-9 py-3 hover:bg-black rounded-xl '>Explore Our Collections</button></Link>
                        </div>
                    </div>
                </header>
            </section>  

            <h1></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-white p-10">

                {loading ? (
                    Array(4).fill(0).map((_, index) => <SkeletonCard key={index} />)
                ) : (
                    data && data.map((pro) => (
                    <Link to={`/detail/${pro.id}`} key={pro.id} className="hover:bg-[#3C2F00] w-full shadow-2xl shadow-gray border-2 border-solid border-black 
                    text-align: center xs:w-1/2 md:w-1/1 lg: w-1/1 bg-black p-6 rounded-xl ">

                        <div className="">
                            <img src={pro.image} alt={pro.title} className="aspect-square w-full h-full display: block" />
                        </div>

                        <div className="text-center pt-5">
                            <h3>{pro.title}</h3>
                            <p className=''>${pro.price.toFixed(2)}</p>
                        </div>
                    </Link>
                ))
                )}

            </div>

            <div className='flex justify-center text-center'>
                <Link to="/product"><button className='bg-[#3C2F00] text-md text-white m-auto px-9 py-3 hover:bg-black rounded-xl '>View All Products</button></Link>
            </div>
        </div>
    )

}


// function Show(){
//   const [product] = useData('https://fakestoreapi.com/products');
//   console.log(product);

//   return (
//     <div>
//       {product ? product.map((pro) => (
//         <div key={pro.id}>
//           <h2>{pro.title}</h2>
//         </div>
//       )): <p>No Product Available</p>}
//     </div>
//   )
// }