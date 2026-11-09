import image from "../assets/product.jpeg"
import wool from "../assets/wool.png"
import machine from "../assets/machine.png"
import cutting from "../assets/cutting.png"
import { Link } from "react-router"

function About() {
    return (
        <section>
            <div className="flex mt-[5rem] md:justify-center lg:justify-around gap-5 flex-col lg:flex-row m-3">

                <div className="lg:w-[600px] lg:pl-[8rem] pl-5 mt-2 lg:mt-[8rem]">
                    <h1 className="text-5xl text-white font-bold">The Art of </h1>
                    <h1 className="text-5xl text-[#F2CA50] pt-3 pb-3 font-bold"><i>Hera</i></h1>
                    <p>A sanctuary where luxury meets a profound commitment to the earth. Hera is more than a label; it is a movement toward intentional existence, crafted for those who demand uncompromising elegance.</p>

                    <div className="mt-7">
                        <Link to="/product" ><button className="bg-yellow-500 text-black px-10 py-[10px] rounded-xl hover:bg-yellow-400">Discover More</button></Link>
                    </div>

                </div>

                <img src={image} alt="model" className="md:h-[850px] lg:h-[600px] hover:scale-105 transition shadow-2xl brightness-50 rounded-xl" />

            </div>

            <main className="bg-black text-white h-full px-[30px] py-20 flex flex-col gap-10 md:flex-row justify-between mt-8">

                <h1 className="text-4xl text-[#F2CA50] md:pl-1 lg:pl-20 ">Our Philosophy</h1>

                <div className="flex flex-col lg:flex-col gap-10 md:w-[400px] lg:w-[500px]">
                    <div>
                        <h1 className="text-4xl pb-4 hover:text-[#F2CA50]">Conscious Luxury</h1>
                        <p>We believe that true luxury is found in the transparency of the process.</p>
                        Every fiber, every stitch, and every decision is measured against its impact on our world.
                        <p>Our materials are ethically sourced, ensuring that the beauty we create does not come at the cost of the environment.</p>
                    </div>

                    <div>
                        <h1 className="text-4xl pb-4 hover:text-[#F2CA50]">Timeless Narratives</h1>
                        <p>Trends are fleeting; style is eternal. Hera designs are conceived as heirlooms—pieces meant to be lived in, loved, and eventually passed down.</p>
                        <p>We reject the culture of disposability in favor of silhouettes that remain relevant through the decades.</p>
                    </div>

                    <div>
                        <h1 className="text-4xl pb-4 hover:text-[#F2CA50]">Radical Integrity</h1>
                        <p>Honesty is our finest garment. From the fair wages paid to our master artisans to the carbon-neutral shipping of our final products, we hold ourselves to a standard of radical integrity that defines the HERA name.</p>
                    </div>
                </div>

            </main>

            <section>
                <h1 className="text-center mt-10 font-bold text-5xl text-[#F2CA50]">WorkRoom</h1>
            </section>

            <article className="flex flex-col lg:flex-row md:flex-row justify-center gap-5 mt-5 p-5">

                <img src={machine} alt="machine" className="md:w-[500px] md:h-[700px] lg:w-[500px] lg:h-[700px] rounded-xl hover:scale-105 transition"></img>

                <div className="flex flex-col gap-4 ">
                    <img src={cutting} alt="cutting" className="lg:w-[300px] lg:h-[300px] rounded-xl hover:scale-105 transition"></img>
                    <img src={wool} alt="wool" className="lg:w-[300px] lg:h-[300px] rounded-xl hover:scale-105 transition"></img>
                </div>

            </article>

            <div className="text-center text-[#F2CA50] py-10 lg:p-40">
                <p className="text-[#F2CA50]">We do not simply make clothes. We architect experiences of tactile grace.</p>
                <p>— HERA-SHOPPING, CREATIVE DIRECTOR</p>
            </div>

            <section className="text-center mt-5 bg-black/70 md:h-96 w-full p-[2rem] md:pt-[8rem]">
                <h1 className="text-2xl md:text-5xl text-white hover:text-[#F2CA50]">Experience the Hera Collection</h1>
                <Link to="/"><button className="px-10 py-2 mt-5 rounded-md bg-yellow-500 hover:bg-yellow-400">Shop the lastest</button></Link>
            </section>

            {/* <footer className="flex md:flex-row lg:flex-row text-base/8 py-20 lg:justify-around"> */}

            <footer className="grid md:grid-cols-3 grid-cols-2 justify-items-center text-base/8 bg-black/50 w-full text-white mt-20 py-20 gap-10">

                {/* <div className=" flex justify-center gap-20 "> */}
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-[#F2CA50]">Explore</h1>
                    <p>Sustainability</p>
                    <p>Our story</p>
                    <p>Archive</p>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-[#F2CA50]">Service</h1>
                    <p>Shipping & Return</p>
                    <p>Size Guide</p>
                    <p>Contact Us</p>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-[#F2CA50]"> Legal</h1>
                    <p>Privacy Policy</p>
                    <p>Terms of services</p>
                </div>
            {/* </div> */}

            </footer>
        </section>
    )
}

export default About