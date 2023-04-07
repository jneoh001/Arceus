import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./LandingPage.css";
import Typewriter from "../../components/TypeWriter/Typewriter";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import TopRated from "../../components/RecipeCard/TopRated";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <motion.div
      className="grid grid-rows-2 grid-cols-1 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Parallax pages={2}>
        <Navbar />

        <ParallaxLayer
          factor={1}
          speed={0.5}
          offset={0}
          style={{ backgroundColor: "#000000" }}
        >
          <div className="grid grid-rows-1 grid-cols-2">
            <div id="typewriter" className="h-screen">
              <Typewriter />
            </div>

            <div className="h-screen text-white">
              {/* Options For Photo 
         Book                    
         https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbCUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&w=1000&q=80
         Plant 
         https://i.imgur.com/5dmBrx6.jpg
         Arceus 
         https://i.pinimg.com/originals/b9/12/e7/b912e737b9d67659271be6afc4011efc.jpg */}
              <div class="flex h-screen items-center justify-center bg-black pl-4 pr-6 mr-5">
                <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                  <img
                    src=" https://i.imgur.com/5dmBrx6.jpg"
                    alt=""
                    class="w-full overflow-hidden"
                  />
                  <div class="p-5">
                    <h2 className="font-bold text-gray-700 text-lg mb-2">About Us</h2>
                    <p class="text-lg mb-4 text-gray-700">
                      We aim to provide you with a one-stop solution for your
                      recipe needs!
                    </p>
                    <Link to="/login">
                      <button class="w-full rounded-md bg-gray-100 border border-black py-2 text-black hover:bg-yellow-500 hover:shadow-md duration-75">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer factor={1}
                   offset = {1}
    >
      <div id="gradient"></div>
    </ParallaxLayer> */}

        <ParallaxLayer offset={1} speed={0.5} factor={1} className="h-screen overflow-y-auto">
          <div className="LandingPage">
            <h1 className="landingpageheader">Top Rated</h1>
            <div className="recipecards">
              <TopRated />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </motion.div>
  );
};

export default LandingPage;
