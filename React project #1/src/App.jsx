import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Orders from "./components/Orders";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const banner = {
  heading: "Subscribe our newsletter",
  description:
    "Browse local restaurants and businesses for delivery by entering your address blow.",
};
const cards = [
  [
    {
      icon: "🍕",
      name: "Pizza",
    },
    {
      icon: "🍔",
      name: "Burger",
    },
    {
      icon: "🍣",
      name: "Sushi",
    },
  ],
  [
    {
      icon: "🍝",
      name: "Pasta",
    },
    {
      icon: "🥗",
      name: "Salad",
    },
    {
      icon: "🍰",
      name: "Desserts",
    },
  ],
  [
    {
      index: "01",
      icon: "📍",
      name: "Choose your location",
    },
    {
      index: "02",

      icon: "🙇🏻‍♂️",
      name: "Choose what to eat ",
    },
    {
      index: "03",

      icon: "🍔",
      name: "May your first order",
    },
    {
      index: "04",

      icon: "🏠",
      name: "Now! Your food in way",
    },
  ],
];

const testimonials = {
  quote:
    "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”",
  heading: [
    "Our Clients Feedback",
    "The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.",
  ],
};
const App = () => {
  return (
    <div className=" w-full h-max">
     <div className="w-full px-10">
     <Header />
     <Hero />
     </div>
      <Orders cards1={cards[0]} cards2={cards[1]} />
      <Process cards={cards[2]} heading="How To Order?" />
      <Testimonials content={testimonials} />
      <Banner content={banner} />
      <Footer />
    </div>
  );
};

export default App;
