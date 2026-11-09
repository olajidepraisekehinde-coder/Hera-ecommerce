import useData from "../utility/useData";
import { Link } from "react-router-dom";
import { useCart } from "../store/hooks/useCart";
import SkeletonCard from "./SkeletonCard";
import { useState } from "react";

export default function ProductCard() {
    const [data, loading] = useData(
        "https://fakestoreapi.com/products"
    );

    const { addToCart } = useCart();

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("all");

    const filteredProducts = data?.filter((pro) => {
        const matchesSearch = pro.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "all" ||
            pro.category === category;

        return matchesSearch && matchesCategory;
    });

    const categories = [
        "all",
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics"
    ]

    return (
        <div className="w-full">

            {/* SEARCH */}
            <div className="flex justify-center mt-6 px-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full md:w-1/2 border border-gray-300 rounded-md px-4 py-2 text-black" />
            </div>

            {/* FILTER BUTTONS */}
            {/* <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
                <button
                    onClick={() => setCategory("all")}
                    className={`px-4 py-2 rounded-md ${category === "all"
                        ? "bg-red-700 text-white"
                        : "bg-gray-200 text-black"}`}>All
                </button>

                <button
                    onClick={() => setCategory("electronics")}
                    className={`px-4 py-2 rounded-md ${category === "electronics"
                        ? "bg-red-700 text-white"
                        : "bg-gray-200 text-black"}`}>Electronics
                </button> */}
            {/* </div> */}


            <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
                <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
                    {categories.map((categoryName) => (
                        <button
                            key={categoryName}
                            onClick={() => setCategory(categoryName)}
                            className={`px-4 py-2 rounded-md ${category === categoryName
                                ? "bg-red-700 text-white"
                                : "bg-gray-200 text-black"}`}>{categoryName}
                        </button>
                    ))}
                </div>
            </div>

            {/* PRODUCTS */}
            <div div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-6 md:p-10" >

                {
                    loading ? (
                        Array(8).fill(0).map((_, index) => (<SkeletonCard key={index} />
                        ))
                    ) : (
                        filteredProducts?.map((pro) => (
                            <Link to={`/detail/${pro.id}`} key={pro.id}
                                className="bg-black text-white p-6 rounded-xl border border-gray-700 shadow-lg hover:bg-[#3C2F00] transition">

                                {/* IMAGE */}
                                <img
                                    src={pro.image} alt={pro.title} className="aspect-square w-full object-contain" />

                                {/* CATEGORY */}
                                <div className="mt-4">
                                    <span className="bg-red-700 text-xs px-3 py-1 rounded-full">
                                        {pro.category}
                                    </span>
                                </div>

                                {/* TITLE */}
                                <div className="mt-4">
                                    <h3 className="font-medium truncate">
                                        {pro.title}
                                    </h3>
                                </div>

                                {/* PRICE & BUTTON */}
                                <div className="flex justify-between items-center mt-6">
                                    <p className="font-bold">
                                        ${pro.price.toFixed(2)}
                                    </p>

                                    <button
                                        onClick={(e) => { e.preventDefault(); addToCart(pro, 1); }}
                                        className="bg-red-700 hover:bg-red-900 px-4 py-2 rounded-md"> Add
                                    </button>
                                </div>
                            </Link>
                        ))
                    )}
            </div>
        </div >
    );
}