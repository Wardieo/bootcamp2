import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    birthday: '',
    address: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        alert('Registered successfully!');
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black">
      <div className="border border-white p-10 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
          <div className='flex items-center gap-4'>
            <label className="block mb-1">Profile Image:</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} className="text-black" />
          </div>
          <div className='flex items-center gap-4 mb-20'>
            <label className="block mb-1">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-2 py-1 border border-black bg-transparent" required />
          </div>
          <div className='flex items-center gap-4'>
            <label className="block mb-1">Birthday:</label>
            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} className="w-full px-2 py-1 border border-black bg-transparent" required />
          </div>
          <div className='flex items-center gap-4'>
            <label className="block mb-1">Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-2 py-1 border border-black bg-transparent" required />
          </div>
          <div className='flex items-center gap-4'>
            <label className="block mb-1">Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full px-2 py-1 border border-black bg-transparent" required />
          </div>
          <div className='flex items-center gap-4'>
            <label className="block mb-1">Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-2 py-1 border border-black bg-transparent" required />
          </div>
          <button type="submit" className="mt-4 bg-white absolute bottom-10 right-260 text-black px-4 py-2 rounded hover:bg-gray-300 transition">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
