import React from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import Navbar from "../../components/Navbar/Navbar";

function EditProfilePage() {
  return (
    <div>
      <Navbar />
      <div className="p-16">
        <EditProfile />
      </div>
    </div>
  );
}

export default EditProfilePage;
