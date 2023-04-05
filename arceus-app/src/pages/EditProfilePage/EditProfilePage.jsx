import React from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import Navbar from "../../components/Navbar/Navbar";
import editprofilebg from "../../assets/editprofilebg.jpg";
import {motion} from 'framer-motion'

function EditProfilePage() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className = "bg-cover h-full" style = {{backgroundImage: `url(${editprofilebg})` }}>
      <Navbar />
      <div className="p-16">
        <EditProfile />
      </div>
    </motion.div>
  );
}

export default EditProfilePage;
