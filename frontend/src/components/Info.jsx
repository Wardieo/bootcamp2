import React from "react";
import { useNavigate } from "react-router-dom";
const Info = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const calculateAge = (birthdate) => {
    const birth = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear user info from storage
    navigate("/"); // redirect to login page
  };

  if (!user) return <div>No user info found.</div>;

  return (
    <div className="min-h-screen flex items-center">
      <div className="absolute top-15 right-10">
        {user.image && (
          <img
            src={user.image}
            alt="User"
            className="w-32 h-32 object-cover border border-black"
          />
        )}
      </div>
      <div className="absolute left-150">
        <h2 className="text-xl font-bold mb-4">{user.name}</h2>
        <p className="text-xl">{calculateAge(user.birthday)} years old</p>
        <p className="text-xl">{user.address}</p>
        <button
          onClick={handleLogout}
          className="mt-6 px-4 py-2 text-black rounded "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Info;
