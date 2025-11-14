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
    <form onSubmit={handleSubmit}>
      <h4>BMI Calculator</h4>
      <div className="row">
        <label>Height (in meters)</label>
        <input
          type="number"
          step="0.01"
          placeholder="Enter Height"
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </div>
      <div className="row">
        <label>Weight (in kg)</label>
        <input
          type="number"
          placeholder="Enter Weight"
          required
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <div className="row">
        <button type="submit">Calculate BMI</button>
      </div>
      <div className="result-screen">
        <h3>Your BMI is: {bmi}</h3>
        <p>{category}</p>
      </div>
    </form>
  );
};

export default Bmi;
