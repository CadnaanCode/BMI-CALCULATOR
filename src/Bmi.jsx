import { useState } from "react";

const Bmi = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [category, setCategory] = useState("");
  const [bmi, setBmi] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate height and weight to avoid unrealistic values
    if (height < 0.5 || height > 3) {
      setError("Please enter a valid height between 0.5m and 3m.");
      return;
    }
    if (weight <= 0) {
      setError("Please enter a valid weight.");
      return;
    }

    setError(""); // Clear previous errors

    const formulla = weight / (height * height);
    setBmi(formulla.toFixed(2));

    // Categorize based on BMI value
    if (formulla < 18.5) {
      setCategory("You are Underweight");
    } else if (formulla >= 18.5 && formulla < 24.9) {
      setCategory("You are Normal or Healthy Weight");
    } else if (formulla >= 25.0 && formulla < 29.9) {
      setCategory("You are Overweight");
    } else {
      setCategory("You are Obesity");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-700 to-yellow-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h4 className="text-center text-brown-700 text-2xl mb-6">
          BMI Calculator
        </h4>
        <div className="flex flex-col mb-4">
          <label className="text-sm text-gray-700 mb-2">
            Height (in meters)
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="Enter Height"
            onChange={(e) => setHeight(e.target.value)}
            required
            className="p-3 border border-brown-500 rounded-lg text-lg outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-sm text-gray-700 mb-2">Weight (in kg)</label>
          <input
            type="number"
            placeholder="Enter Weight"
            required
            onChange={(e) => setWeight(e.target.value)}
            className="p-3 border border-brown-500 rounded-lg text-lg outline-none"
          />
        </div>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="mb-6">
          <button type="submit" className="border-red-500 text-red">
            Calculate BMI
          </button>
        </div>
        <div className="mt-6 text-center p-4 border border-brown-500 rounded-lg bg-gray-100">
          <h3 className="text-xl font-semibold text-brown-700">
            Your BMI is: {bmi}
          </h3>
          <p className="text-lg text-gray-700">{category}</p>
        </div>
      </form>
    </div>
  );
};

export default Bmi;
