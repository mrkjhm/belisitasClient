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

  const categoryFromURL = searchParams.get("category") || "all";
  const pageFromURL = parseInt(searchParams.get("page")) || 1; // ✅ Get page from URL

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [currentPage, setCurrentPage] = useState(pageFromURL); // ✅ Set state from URL
  const [list, setList] = useState([]);

  const productsPerPage = 6;

  const filteredList =
      selectedCategory === "all"
          ? list
          : list.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredList.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.max(1, Math.ceil(filteredList.length / productsPerPage));


  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`${URL}/products/`);
        if (response.data.success) {
          setList(response.data.data);
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
            <div className="w-full sm:hidden">
              <label className="block text-lg font-semibold mb-2">Select Category:</label>
              <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200"
              >
                <option value="all">All Categories</option>
                {Array.from(new Set(list.map((item) => item.category))).map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sidebar - Show only on sm screens and up */}
            <div className="md:w-1/5 sm:w-1/3 sm:block hidden">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="flex sm:flex-col flex-row gap-3">
                <button
                    className={`px-4 py-2 text-left transition-all ${
                        selectedCategory === "all" ? "bg-gray-200 text-blue font-semibold" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    onClick={() => handleCategoryChange("all")}
                >
                  All Categories
                </button>
                {Array.from(new Set(list.map((item) => item.category))).map((category) => (
                    <button
                        key={category} // ✅ Use category instead of index
                        className={`px-4 py-1 text-left transition-all ${selectedCategory === category ? "text-blue font-semibold" : ""}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                ))}
              </div>
            </div>



            {/* Product List */}
            <div className="sm:w-3/4 w-full">
              <div className="flex justify-between items-center pb-5">
                <h2 className="text-4xl font-semibold">
                  {selectedCategory === "all" ? "All Categories" : selectedCategory}
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
                {currentProducts.length > 0 ? (
                    currentProducts.map((item, index) => (
                        <div key={index} className="bg-white p-5 flex flex-col w-full hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-lg"> {/* Added w-full */}
                          {item.images?.length > 0 && (
                              <img
                                  src={item.images[0]}
                                  alt={item.name}
                                  onClick={() => navigate(`/product/${item._id}`)}
                                  className="cursor-pointer bg-gray-100 mb-5"
                              />
                          )}

                          <div>
                            <p className="font-semibold text-2xl mb-1">{item.name}</p>
                            <p className="font-bold text-blue">₱ {item.price}.00</p>
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
                        className="px-4 py-2 bg-gray-300 rounded-md mx-2 disabled:opacity-50"
                    >
                      <i className="ri-arrow-left-s-line"></i>
                    </button>

                    <span className="px-4 py-2">{currentPage} / {totalPages}</span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 rounded-md mx-2 disabled:opacity-50"
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


/*
*
olds Code
* import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function ProductList() {
  const { categoryName } = useParams(); // Get category from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoryFromURL = searchParams.get("category") || "all";
  const pageFromURL = parseInt(searchParams.get("page")) || 1; // ✅ Get page from URL

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [currentPage, setCurrentPage] = useState(pageFromURL); // ✅ Set state from URL
  const [list, setList] = useState([]);

  const productsPerPage = 6;

  const filteredList =
      selectedCategory === "all"
          ? list
          : list.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredList.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredList.length / productsPerPage);

  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(${URL}/products/);
        if (response.data.success) {
          setList(response.data.data);
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
    setSelectedCategory(categoryFromURL);
    setCurrentPage(pageFromURL); // ✅ Also update page number from URL
  }, [categoryFromURL, pageFromURL]);

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

        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start from bottom
            animate={{ opacity: 1, y: 0 }} // Move up
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="custom-padding py-20 w-full overflow-hidden"
        >
          <div className="mx-auto container">
            <div className="pb-10">
              <div className="flex sm:flex-row flex-col justify-between">
                <div className="sm:mb-0 mb-5">
                  <h2 className="text-2xl font-semibold">
                    Category by: {selectedCategory === "all" ? "All Categories" : selectedCategory}
                  </h2>
                </div>
                <div className="flex items-center gap-2 select-category">
                  <p>Sort by: </p>
                  <div>
                    <select
                        className="px-5 border py-2 focus:outline-none"
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                      <option value="all">All Categories</option>
                      {Array.from(new Set(list.map((item) => item.category))).map((category, index) => (
                          <option key={index} value={category} >
                            {category}
                          </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              {currentProducts.length > 0 ? (
                  <div
                      className={grid gap-10 ${
                          currentProducts.length === 2
                              ? "grid-cols-3"
                              : "lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
                      }}
                  >
                    {currentProducts.map((item, index) => (
                        <div key={index} className="bg-white p-5">
                          {item.images.length > 0 && (
                              <img
                                  src={${URL}/images/${item.images[0]}}
                                  alt={Product ${index + 1}}
                                  onClick={() => navigate(/product/${item._id})}
                                  className="cursor-pointer bg-gray-100 mb-5 hover:-translate-y-2 transition-transform duration-300"
                              />
                          )}
                          <div>
                            <p className="font-semibold text-2xl mb-1">{item.name}</p>
                            <p className="font-bold text-blue">₱ {item.price}.00</p>
                          </div>
                        </div>
                    ))}
                  </div>
              ) : (
                  // ✅ Show message when no products are found
                  <div className="text-center text-gray-500 text-xl py-10">
                    No products found.
                  </div>
              )}
            </div>


            {filteredList.length > productsPerPage && (
                <div className="flex justify-center mt-20">
                  <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-gray-300 rounded-md mx-2 disabled:opacity-50"
                  >
                    <i className="ri-arrow-left-s-line"></i>
                  </button>

                  <span className="px-4 py-2">{currentPage} / {totalPages}</span>

                  <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-gray-300 rounded-md mx-2 disabled:opacity-50"
                  >
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
            )}
          </div>
        </motion.div>
      </>
  );
}
* */