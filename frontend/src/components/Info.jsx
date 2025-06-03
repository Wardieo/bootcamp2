import React, { useEffect, useState } from "react";

const Info = ({ username }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to calculate age from birthday string (YYYY-MM-DD)
  const calculateAge = (birthday) => {
    if (!birthday) return "";
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch(`http://localhost:5000/user/${username}`);
        const data = await res.json();
        if (res.ok) {
          setUserInfo(data);
          setError(null);
        } else {
          setError(data.error || "Failed to fetch user info");
        }
      } catch (err) {
        setError("Failed to fetch user info");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [username]);

  if (loading) return <p>Loading user info...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!userInfo) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center text-black bg-white p-6">
      {/* Image top right */}
      {userInfo.image && (
        <img
          src={userInfo.image}
          alt={`${userInfo.name}'s profile`}
          className="absolute top-6 right-6 w-32 h-32 object-cover rounded-full border border-gray-300"
        />
      )}

      {/* Info in the center */}
      <div className="text-center max-w-md space-y-4">
        <h1 className="text-3xl font-bold">{userInfo.name}</h1>
        <p className="text-xl">
          <strong>Age:</strong> {calculateAge(userInfo.birthday)}
        </p>
        <p className="text-xl">
          <strong>Address:</strong> {userInfo.address}
        </p>
      </div>
    </div>
  );
};

export default Info;
