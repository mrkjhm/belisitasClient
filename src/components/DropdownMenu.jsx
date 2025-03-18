import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function DropdownMenu({ selectedCategory, setSelectedCategory, list }) {
  // Extract unique categories from the product list
  const categories = ["All Categories", ...new Set(list.map((item) => item.category))];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-48 justify-between px-4 py-2 text-lg font-medium text-black border border-gray-400 rounded-md">
          {selectedCategory === "all" ? "All Categories" : selectedCategory}
          <ChevronDownIcon className="w-5 h-5 ml-2" />
        </Menu.Button>
      </div>
      <Menu.Items className="absolute left-0 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
        {categories.map((category) => (
          <Menu.Item key={category}>
            {({ active }) => (
              <button
                onClick={() => setSelectedCategory(category === "All Categories" ? "all" : category)}
                className={`w-full px-4 py-2 text-left text-black ${
                  active ? "bg-gray-800 text-white" : ""
                }`}
              >
                {category}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
