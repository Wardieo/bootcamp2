import React from "react";

const Info = () => {
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
      </div>
    </div>
  );
};

export default Info;
