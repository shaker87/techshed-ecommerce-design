import badge from "../image/badge.webp";
import bg1 from "../image/bg1.webp";
import bg2 from "../image/bg2.webp";
import bg3 from "../image/bg3.webp";
import brand1 from "../image/brand1.webp";
import brand2 from "../image/brand2.webp";
import brand3 from "../image/brand3.webp";
import brand4 from "../image/brand4.webp";
import brand5 from "../image/brand5.webp";
import card1 from "../image/card1.webp";
import choose1 from "../image/choose1.png";
import choose2 from "../image/choose2.png";
import choose3 from "../image/choose3.png";
import choose4 from "../image/choose4.png";
import drone from "../image/drone.webp";
import drone1 from "../image/drone1.webp";
import dronebg from "../image/dronebg.webp";
import headphone1 from "../image/headphone1.webp";
import headset from "../image/headset.webp";
import iphone1 from "../image/iphone1.webp";
import journeyGlass from "../image/journey-glass.webp";
import laptopSpeaker from "../image/laptop-speaker.webp";
import laptopWatch from "../image/laptop-watch.webp";
import laptop from "../image/laptop.webp";
import laptop1 from "../image/laptop1.webp";
import laptop3 from "../image/laptop3.webp";
import mobile from "../image/mobile.webp";
import mobile1 from "../image/mobile1.webp";
import mobile2 from "../image/mobile2.webp";
import noise from "../image/noise.webp";
import pay1 from "../image/pay1.webp";
import pay2 from "../image/pay2.webp";
import pay3 from "../image/pay3.webp";
import pay4 from "../image/pay4.webp";
import pay5 from "../image/pay5.webp";
import pay6 from "../image/pay6.webp";
import pay7 from "../image/pay7.webp";
import pay8 from "../image/pay8.webp";
import securityCamera from "../image/security-camera.webp";
import smartwatch from "../image/smartwatch.webp";
import speaker from "../image/speaker.webp";
import speaker1 from "../image/speaker1.webp";
import speaker2 from "../image/speaker2.webp";
import tablet from "../image/tablet.webp";
import tv from "../image/tv.webp";
import watch from "../image/watch.webp";
import watch1 from "../image/watch1.webp";

export const heroBackgrounds = [bg1, bg2, bg3];

export const featureCards = [
  {
    tag: "Holiday Deals",
    title: "Up to 30% off",
    text: "Selected smartphone brands",
    image: iphone1,
  },
  {
    tag: "Just In",
    title: "Take Your Sound Anywhere",
    text: "Top headphone brands",
    image: headphone1,
  },
];

export const benefits = [
  { icon: choose1, title: "Curb-side pickup" },
  { icon: choose2, title: "Free shipping on orders over $50" },
  { icon: choose3, title: "Low prices guaranteed" },
  { icon: choose4, title: "Available to you 24/7" },
];

export const bestSellers = [
  { name: "Fitboot Inspire Fitness Tracker With Heart Rate Tracking", image: watch, oldPrice: "$85.00", price: "$70.00", sale: true },
  { name: 'JP Gaming Laptop 15.6" Laptop 256GB', image: laptop, oldPrice: "$85.00", price: "$70.00", sale: true },
  { name: "HKI Tech Quadcopter Drone With 360 Camera & Controller", image: drone, oldPrice: "$85.00", price: "$70.00", sale: false },
  { name: "Smartphone Z Pixel Max 128GB Unlocked", image: mobile, oldPrice: "$85.00", price: "$70.00", sale: true },
  { name: "In-ear Noise Cancelling & Isolating Wireless Earbuds", image: noise, oldPrice: "$85.00", price: "$70.00", sale: true },
  { name: "Safay GEN 2 256GB VR Headset With Touch Controllers", image: headset, oldPrice: "$85.00", price: "$70.00", sale: false },
];

export const categories = [
  { name: "Computers", image: laptop1 },
  { name: "Mobile", image: mobile1 },
  { name: "Drones & Cameras", image: drone1 },
  { name: "Sale", image: card1 },
  { name: "Tablets", image: tablet },
  { name: "Best Sellers", image: badge },
  { name: "TV & Home Cinema", image: tv },
  { name: "Wearable Tech", image: watch1 },
  { name: "Speakers", image: speaker },
  { name: "Headphones", image: speaker1 },
];

export const saleProducts = [
  { name: "Space Moon Smartwatch With Charger", image: smartwatch, oldPrice: "$85.00", price: "$70.00" },
  { name: "OVE Light Space 5G, 128GB", image: mobile2, oldPrice: "$85.00", price: "$70.00" },
  { name: 'Pilates 16" Touch Screen Laptop 24GB Memory', image: laptop3, oldPrice: "$85.00", price: "$70.00" },
  { name: "Turn5 Portable Bluetooth Speaker", image: speaker2, oldPrice: "$85.00", price: "$70.00" },
  { name: "Journey Glass XD Virtual Reality Headset", image: journeyGlass, oldPrice: "$85.00", price: "$70.00" },
  { name: "H1C Indoor Wireless 1080p Network Security Camera", image: securityCamera, oldPrice: "$85.00", price: "$70.00" },
];

export const brands = [brand1, brand2, brand3, brand4, brand5];

export const paymentMethods = [pay1, pay2, pay3, pay4, pay5, pay6, pay7, pay8];

export const promoImages = {
  laptopSpeaker,
  laptopWatch,
  dronebg,
};
