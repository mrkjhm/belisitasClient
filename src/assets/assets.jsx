import belisitas_logo from './belisitas-logo.png';
import landing_img from './landing-img.png';
import landing_img2 from './landing-img2.png'
import landing_img3 from './landing-img3.png'
import landing_bg from './landing-bg.jpg'
import page_img from './page-img.png'
import chair_3 from './chair-3.png';
import placeholder from './img-placeholder.jpg'
import img_chair from './img_chair.png'
import img_chair_1 from './img_chair_1.png'
import img_chair_2 from './img_chair_2.png'
import made from './made.jpg'
import img from './img.png'
import landing_bg1 from './landing-bg1.jpg'

import landing_img_1 from './landing-img-1.jpg'
import landing_img_2 from './landing-img-2.jpg'
import landing_img_3 from './landing-img-3.jpg'

import banner_img from './banner.jpg'
import banner_img1 from './banner-img.png'


// Background
import background from './background.jpg'

// product-images
import product_img_1 from './product-img-1.jpg'
import product_img_2 from './product-img-2.jpg'

import image_1 from './image-1.jpg'

import product_1 from './product_1.png'
import product_2 from './product_2.png'
import product_3 from './product_3.png'
import product_4 from './product_4.png'
import product_5 from './product_5.png'
import product_6 from './product_6.png'
import product_7 from './product_7.png'
import product_8 from './product_8.png'
import product_9 from './product_9.png'
import product_10 from './product_10.png'

import product_1_jpg from './product_7.jpg'

import category_1 from './category_image.jpg'

import product_category_chair from './product_category_chair.png'
import product_category_basket from './product_category_basket.png'
import product_category_pendant_light from './product_category_pendant_light.png'
import product_category_table_lamp from './product_category_table_lamp.png'
import product_category_mirror from './product_category_mirror.png'
import product_category_hamper from './product_category_hamper.png'

// product category hover
import product_category_2_hover from './product_category_2_hover.png'
import product_category_mirror_hover from './product_category_mirror_hover.png'




export const assets = {
    belisitas_logo,
    landing_img,
    page_img,
    chair_3,
    placeholder,
    product_1,
    product_2,
    product_3,
    product_4,
    product_5,
    product_6,
    product_7,
    product_8,
    product_9,
    product_10,
    landing_img2,
    img_chair,
    img_chair_1,
    img_chair_2,
    landing_img3,
    landing_bg,
    made,
    img,
    product_1_jpg,
    landing_bg1,
    image_1,
    background,

//     product images
    product_img_1,
    product_img_2,

//     landing
    landing_img_1,
    landing_img_2,
    landing_img_3,

//     Banner
    banner_img,
    banner_img1,
}

export const product_list = [
    {
        _id: "1",
        name: "Product 1",
        image: product_1,
        price: 100,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus odio, lacinia et purus nec, elementum ullamcorper sapien. Duis malesuada dolor libero, quis elementum nisl semper eu. Pellentesque luctus libero augue, sit amet maximus eros feugiat quis. Nulla vel massa id orci efficitur rutrum. Vestibulum egestas augue nunc, non tincidunt tellus viverra vel. Aenean fermentum ac tortor non volutpat. Vivamus aliquet, urna a tincidunt hendrerit, lacus augue finibus lacus, a vestibulum quam dolor id libero. Nunc posuere sed magna luctus posuere.",
        category: "chair"
    }, {
        _id: "2",
        name: "Product 2",
        image: product_2,
        price: 200,
        description: "Lorem ipsum dolor sit amet.",
        category: "Chair"
    }, {
        _id: "3",
        name: "Product 3",
        image: product_3,
        price: 300,
        description: "Lorem ipsum dolor sit amet.",
        category: "Chair"
    }, {
        _id: "4",
        name: "Product 4",
        image: product_4,
        price: 400,
        description: "Lorem ipsum dolor sit amet.",
        category: "Pendant Light"
    }, {
        _id: "5",
        name: "Product 5",
        image: product_5,
        price: 500,
        description: "Lorem ipsum dolor sit amet.",
        category: "Basket"
    }, {
        _id: "6",
        name: "Product 6",
        image: product_6,
        price: 600,
        description: "Lorem ipsum dolor sit amet.",
        category: "Lamp"
    }, {
        _id: "7",
        name: "Product 7",
        image: product_7,
        price: 700,
        description: "Lorem ipsum dolor sit amet.",
        category: "Chair"
    }, {
        _id: "8",
        name: "Product 8",
        image: product_8,
        price: 800,
        description: "Lorem ipsum dolor sit amet.",
        category: "Pendant Light"
    }, {
        _id: "9",
        name: "Product 9",
        image: product_9,
        price: 900,
        description: "Lorem ipsum dolor sit amet.",
        category: "Hamper"
    }, {
        _id: "10",
        name: "Product 10",
        image: product_10,
        price: 1000,
        description: "Lorem ipsum dolor sit amet.",
        category: "Mirror"
    }
]

export const category_list = [
    {
        category_name: "Chair",
        category_image: category_1
    }, {
        category_name: "Mirror",
        category_image: category_1
    }, {
        category_name: "Hamper",
        category_image: category_1
    }, {
        category_name: "Basket",
        category_image: category_1
    }, {
        category_name: "Table Lamp",
        category_image: category_1
    }, {
        category_name: "Pendant Light",
        category_image: category_1
    },
]

export const product_category = [
    {
        product_category_name: "Chair",
        product_category_image: product_category_chair,
        hoverImage: product_category_pendant_light
    }, {
        product_category_name: "Pendant Light",
        product_category_image: product_category_pendant_light,
        // hoverImage:
    }, {
        product_category_name: "Basket",
        product_category_image: product_category_basket,
        // hoverImage: product_category_5
    }, {
        product_category_name: "Mirror",
        product_category_image: product_category_mirror,
        hoverImage: product_category_mirror_hover
    }, {
        product_category_name: "Table Lamp",
        product_category_image: product_category_table_lamp,
        // hoverImage:
    }, {
        product_category_name: "Hamper",
        product_category_image: product_category_hamper,
        // hoverImage:
    }
]

export const featured_product = [
    {
        featured_name: "Rattan 1",
        featured_image: product_8,
        featured_price: 200
    }, {
        featured_name: "Rattan 2",
        featured_image: product_8,
        featured_price: 200
    }, {
        featured_name: "Rattan 3",
        featured_image: product_8,
        featured_price: 200
    }, {
        featured_name: "Rattan 4",
        featured_image: product_8,
        featured_price: 200
    }, {
        featured_name: "Rattan 5",
        featured_image: product_8,
        featured_price: 200
    }, {
        featured_name: "Rattan 6",
        featured_image: product_8,
        featured_price: 200
    },
]