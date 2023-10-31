// local imports
import shippingIcon from "./assets/free-shiping-icon.svg";
import paymentIcon from "./assets/quick-payment-icon.svg";
import supportIcon from "./assets/support-icon.svg";
import productOneIcon from "./assets/product-one.png";
import productTwoIcon from "./assets/produc-two.png";
import productThreeIcon from "./assets/product-three.png";
import plantIcon from "./assets/plant-icon.svg";
import sunIcon from "./assets/sun-icon.svg";
import waterIcon from "./assets/water-icon.svg";
import temperatureIcon from "./assets/temperature-icon.svg";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

import Tree1 from "./assets/Tree1.jpg";
import Tree2 from "./assets/Tree2.jpg";
import Tree3 from "./assets/Tree3.jpg";
import Tree4 from "./assets/Tree4.jpg";
import Tree5 from "./assets/Tree5.jpg";

import user1Image from './assets/profileimage/user1.jpg';
import user2Image from './assets/profileimage/user2.jpeg';
import user3Image from './assets/profileimage/user3.jpg';
import user4Image from './assets/profileimage/user4.jpg';
import user5Image from './assets/profileimage/user1.jpg';

// data for herosection
export const heroTitle = "Elevate Your Space with Elegance";
export const heroSubtitle =
  "Discover Timeless Furniture Pieces Tailored for Your Home";

// data for servicessection
export const services = [
  {
    title: "Free Shipping",
    subtitle: "No charge for your delivery",
    icon: shippingIcon,
  },
  {
    title: "Quick Payment",
    subtitle: "100% secure",
    icon: paymentIcon,
  },
  {
    title: "24/7 Support",
    subtitle: "Don't hesitate to contact us",
    icon: supportIcon,
  },
];

// data for productsection
export const productsTitle = "Best Selling Products";
export const productsBtnText = "See Colection";

export const products = [
  {
    title: "Armchair (Red)",
    price: "25,000 BDT",
    img: productOneIcon,
  },
  {
    title: "Armchair (Black)",
    price: "25,500 BDT",
    img: productTwoIcon,
  },
  {
    title: "Armchair (Yellow)",
    price: "25,000 BDT",
    img: productThreeIcon,
  },
];

// data for referencesection
export const referenceTitle = " Gallery of Timeless Elegance";
export const referenceSubtitle = "Immerse Yourself in the Beauty of Furnished Living Spaces";

// data for caresection
export const careTitle = "Preserve the Beauty, Embrace the Longevity";
export const careSubtitle = "Expert Guidance to Nurture Your Furniture and Enrich Your Living Spaces";

export const careList = [
  {
    title: "Regular Cleaning",
    subtitle:
      "Dust and clean your furniture regularly to maintain its shine and prevent buildup. ",
    img: waterIcon,
  },
  {
    title: "Avoid Sunlight Exposure",
    subtitle:
      "Keep furniture away from direct sunlight to prevent fading and damage. ",
    img: sunIcon,
  },
  {
    title: "Use Coasters and Mats",
    subtitle:
      "Place coasters under glasses and mats under hot dishes to protect surfaces from heat and moisture.",
    img: plantIcon,
  },
 
];

// data for active slider
export const ServiceData = [
  {
    icon: RxCrop,
    title: "Chair 1",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Tree1,
  },
  {
    icon: RxPencil2,
    title: "Chair 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: Tree2,
  },
  {
    icon: RxDesktop,
    title: "Chair 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: Tree3,
  },
  {
    icon: RxReader,
    title: "Chair 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: Tree4,
  },
  {
    icon: RxAccessibility,
    title: "Lamp 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: Tree5,
  },
];

// data for estimonial section
export const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ',
    image: user1Image,
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ',
    image: user2Image,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ',
    image: user3Image,
  },
  {
    id: 4,
    name: 'Bob Brown',
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ',
    image: user4Image,
  },
  {
    id: 5,
    name: 'Eva Wilson',
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ',
    image: user5Image,
  }
];

// data for footer section
export const newsletter = "Newsletter";

export const footerLinksColumnOne = [
  {
    title: "Support",
    links: ["About Us", "Careers", "Blog"],
  },
  
];

export const footerLinksColumnTwo = [
  {
    title: "Our Menu",
    links: ["Best Product", "Categories"],
  },
  {
    title: "Address",
    links: [
      "SRR Tower , House no. 50, Block C, Rd No-12, Banani, Dhaka-1213, Bangladesh",
      "contact@farniturefusion.com",
    ],
  },
];






