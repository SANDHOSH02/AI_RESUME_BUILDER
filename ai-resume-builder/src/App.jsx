import React, { useState } from 'react';

const App = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    education: '',
    experience: '',
  });

  const handleInputChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to generate the resume here
    console.log(resumeData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">AI Resume Builder</h1>
      <form onSubmit={handleSubmit} className="mt-8">
        <input
          type="text"
          name="name"
          value={resumeData.name}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-4"
          placeholder="Enter your name"
        />
        <input
          type="text"
          name="education"
          value={resumeData.education}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-4"
          placeholder="Enter your education"
        />
        <input
          type="text"
          name="experience"
          value={resumeData.experience}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-4"
          placeholder="Enter your experience"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Generate Resume</button>
      </form>
    </div>
  );
};

export default App;
