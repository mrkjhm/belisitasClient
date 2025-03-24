import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { product_category } from "../assets/assets.jsx";

export default function ProductCategory() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const URL = import.meta.env.VITE_URL; // Your backend URL

    // **Define the 6 categories you want to show**
    const selectedCategories = ["Chair", "Pendant Light", "Basket", "Mirror", "Table Lamp", "Hamper"];

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${URL}/categories`);
                if (response.data.success) {
                    setCategories(response.data.categories);
                } else {
                    console.error("Error fetching categories");
                }
            } catch (error) {
                console.error("Failed to load categories", error);
            }
        };

        fetchCategories();
    }, []);

    // **Filter only the selected categories**
    const filteredCategories = categories.filter((category) =>
        selectedCategories.includes(category.name)
    );

    return (
        <div className="custom-padding md:my-20 my-10">
            <div className="container mx-auto">
                <div className="grid grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {filteredCategories.map((category) => {
                        // Find matching category from assets
                        const matchedCategory = product_category.find(
                            (item) => item.product_category_name === category.name
                        );

                        return (
                            <div
                                key={category._id}
                                className="bg-white p-5 flex flex-col items-start hover:shadow-xl transition-all duration-600 ease-in-out transform hover:-translate-y-1"
                                onClick={() => navigate(`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`)}
                            >
                                {/* Show default image if no match found */}
                                <img
                                    className="w-full px-10 hover:-translate-y-1 transition-all duration-600 ease-in-out transform -mt-10 mb-5"
                                    src={matchedCategory ? matchedCategory.product_category_image : "/default-image.png"}
                                    alt={category.name}
                                />

                                <p className=" sm:text-2xl text-[20px] font-semibold">
                                    {category.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
