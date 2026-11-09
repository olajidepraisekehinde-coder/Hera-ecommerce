import { useState } from "react";
import image from "../assets/collection.png"
// import { useForm, ValidationError } from "@formspree/react"

export default function Contact() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const formData = input

        try {
            const response = await fetch(
                "https://formspree.io/f/mrewbjdg",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(input),
                }
            );

            if (response.ok) {
                alert("Message sent successfully!");
                setInput({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });

            } else {
                alert("Something went wrong.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="border-b-4 w-20 pb-4 border-[#F2CA50] lg:m-10 m-5 md:m-10">
                <h1 className="text-3xl md:text-5xl font-bold text-[#F2CA50] w-64 md:w-96 lg:w-96">Connect With Us</h1>
            </div>

            <div className="max-w-7xl md:m-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                <div className="md:w-[550px]">

                    <img src={image}
                        alt="side_image"
                        className="w-full m-auto h-[650px] object-cover rounded-xl border border-gray-200 transition-all duration-300 hover:-translate-y-2" />
                </div>

                <div className="flex flex-col gap-20 py-6 px-6 md:-16 bg-black/50 rounded-md text-white ">
                    <div className="flex flex-col md:flex-row justify-between text-base/10">
                        <div>
                            <h2 className=" text-[#F2CA50] font-bold text-2xl">Address</h2>
                            <p>Zone 1 road 4</p>
                            <p>Lagos island</p>
                        </div>

                        <div>
                            <h2 className=" text-[#F2CA50] font-bold text-2xl">Direct Enquires</h2>
                            <p>08086157432</p>
                            <p>praisekehinde@gmail.com</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} method="post">
                        <div className=" md:grid-cols-2 gap-8">

                            <label>Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-700 py-4 outline-none text-white placeholder-gray-500" required />

                            </label>

                            <label>Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={input.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-700 py-4 outline-none text-white placeholder-gray-500" required />
                            </label>

                        </div>

                        <div className="grid md:grid-cols-1 gap-8">
                            <label>Subject:
                                <input
                                    type="text"
                                    name="subject"
                                    value={input.subject}
                                    onChange={handleChange}
                                    placeholder="SUBJECT"
                                    className="w-full bg-transparent border-b border-gray-700 py-4 mt-8 outline-none text-white" required />
                            </label>

                            <label>Message:
                                <textarea
                                    name="message"
                                    value={input.message}
                                    onChange={handleChange}
                                    rows="2"
                                    placeholder="MESSAGE"
                                    className="w-full bg-transparent border-b border-gray-700 py-4 mt-8 outline-none resize-none text-white" required />
                            </label>

                        </div>

                        <button type="submit" className="text-white bg-black py-5 rounded-md hover:bg-black/50 px-20">SEND INQUIRY</button>
                    </form>
                    {/* <p>Current values: {input.Name} {input.email}</p> */}
                </div>
            </div>

            <footer className=" grid md:grid-cols-3 px-6 grid-cols-2 gap-10 justify-items-center text-base/10 bg-black/50 w-full py-20 text-white mt-20">

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
            </footer>
        </div>
    )
}