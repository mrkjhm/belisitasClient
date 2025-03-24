import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function ProductList() {
  const { categoryName } = useParams(); // Get category from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]); // ✅ Store categories


  const categoryFromURL = searchParams.get("category") || "all";
  const pageFromURL = parseInt(searchParams.get("page")) || 1; // ✅ Get page from URL

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [currentPage, setCurrentPage] = useState(pageFromURL); // ✅ Set state from URL
  const [product, setProduct] = useState([]);

  const productsPerPage = 6;

  const filteredList =
      selectedCategory === "all"
          ? product
          : product.filter((item) => item.category?._id === selectedCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredList.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.max(1, Math.ceil(filteredList.length / productsPerPage));


  const URL = import.meta.env.VITE_URL;






  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${URL}/categories`);
      if (response.data.success) {
        setCategories(response.data.categories);

      } else {
        toast.error("Error fetching categories");
      }
    } catch (error) {
      toast.error("Failed to load categories");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);



  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`${URL}/products/`);
        if (response.data.success) {
          setProduct(response.data.data);
        } else {
          toast.error("Error fetching products");
        }
      } catch (error) {
        toast.error("Server Error");
      }
    };

    fetchList();
  }, []);

  // ✅ Update category state when URL changes
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "all");
    setCurrentPage(parseInt(searchParams.get("page")) || 1);
  }, [searchParams]); // ✅ Reacts to URL changes


  // ✅ Change category and reset page to 1
  const handleCategoryChange = (newCategory) => {
    setSearchParams({ category: newCategory, page: 1 });
  };

  // ✅ Change page and update URL
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams({ category: selectedCategory, page: newPage }); // ✅ Preserve category in URL
  };

  return (
      <>
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start from bottom
            animate={{ opacity: 1, y: 0 }} // Move up
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="bg-[#EDEDED] flex justify-center"
        >

          <div className="items-center custom-padding grid lg:grid-cols-2 md:grid-rows-1 lg:mt-20 lg:gap-10 lg:pb-0 pb-10 lg:pt-5 pt-30">
            <div className="container mx-auto rounded-2xl flex lg:justify-start justify-center items-center">
              <div className="lg:py-40 md:py-15 py-10 lg:text-start text-center">
                <h1 className="text-5xl font-bold mb-5 text-[#0D2893]">Products Category</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="flex justify-center items-center lg:px-0 sm:px-33 px-[15px]">
              <img src={assets.page_img} alt="Category" />
            </div>
          </div>
        </motion.div>

        {/*   <div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
          <p className='text-white hidden xl:block'>xl screen</p>
          <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
          <p className='text-white lg:hidden md:block hidden'>md screen</p>
          <p className='text-white md:hidden sm:block hidden'>sm screen</p>
          <p className='text-white sm:hidden block'>xs screen</p>
        </div>*/}


        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="custom-padding py-20 w-full overflow-hidden"
        >
          <div className="mx-auto container flex sm:flex-row flex-col gap-10 ">
            {/* Sidebar - Category Filters */}
            {/* Responsive Category Selection */}
            {/* Category List - Sidebar */}
            <div className="md:w-1/5 sm:w-1/3 sm:block hidden text-sm">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="flex sm:flex-col flex-wrap gap-3">
                <button
                    className={`px-4 py-2 text-left transition-all rounded-lg ${selectedCategory === "all" ? "bg-gray-400 text-white font-semibold" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    onClick={() => handleCategoryChange("all")}
                >
                  All Categories
                </button>

                {categories
                    .map((category) => (
                        <button
                            key={category._id}
                            className={`px-4 py-2 text-left transition-all rounded-lg ${selectedCategory === category._id ? "bg-gray-400 text-white font-semibold" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            onClick={() => handleCategoryChange(category._id)}
                        >
                          {category.name}
                        </button>
                    ))}

              </div>
            </div>




            {/* Product List */}
            <div className="sm:w-3/4 w-full">
              <div className="flex justify-between items-center pb-5">
                <h2 className="text-4xl font-semibold">
                  {selectedCategory === "all"
                      ? "All Categories"
                      : categories.find((cat) => cat._id === selectedCategory)?.name || "Unknown Category"}
                </h2>

              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
                {currentProducts.length > 0 ? (
                    currentProducts.map((item, index) => (
                        <div key={index} className="bg-white p-3 pb-5 flex flex-col w-full hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-lg"> {/* Added w-full */}
                          {item.images?.length > 0 && (
                              <img
                                  src={item.images[0]?.url}
                                  alt={item.name}
                                  onClick={() => navigate(`/product/${item._id}`)}
                                  className="cursor-pointer bg-gray-100 mb-5"
                              />
                          )}

                          <p className="font-semibold text-2xl mb-1">{item.name}</p>
                          <div className="flex justify-between">
                            <p className="font-bold text-blue">₱ {item.price}.00</p>
                            <p className="text-sm">Code: {item.code}</p>

                          </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 text-xl py-10">No products found.</div>
                )}
              </div>
              {filteredList.length > productsPerPage && (
                  <div className="flex justify-center mt-20">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 mx-2 disabled:opacity-50"
                    >
                      <i className="ri-arrow-left-s-line"></i>
                    </button>

                    <span className="px-4 py-2">{currentPage} / {totalPages}</span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 mx-2 disabled:opacity-50"
                    >
                      <i className="ri-arrow-right-s-line"></i>
                    </button>
                  </div>
              )}

            </div>
          </div>
        </motion.div>

      </>
  );
}