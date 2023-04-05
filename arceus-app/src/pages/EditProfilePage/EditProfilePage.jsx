import React from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import Navbar from "../../components/Navbar/Navbar";
import editprofilebg from "../../assets/editprofilebg.jpg";

function EditProfilePage() {
  return (
    <div className = "bg-cover h-full" style = {{backgroundImage: `url(${editprofilebg})` }}>
          <Navbar />
          <div className="p-16">
            <EditProfile />
          </div>
    </div>
  );
}

export default EditProfilePage;
