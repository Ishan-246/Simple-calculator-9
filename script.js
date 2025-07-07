import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Use with caution
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Simple Calculator</h2>
      <input style={styles.input} type="text" value={input} readOnly />
      <div style={styles.buttonGrid}>
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "+", "-", "*", "/", "."].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} style={styles.button}>
            {btn}
          </button>
        ))}
        <button onClick={handleClear} style={styles.button}>C</button>
        <button onClick={handleCalculate} style={styles.button}>=</button>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "40px" },
  input: { fontSize: "24px", padding: "10px", width: "80%", marginBottom: "10px" },
  buttonGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", padding: "10px" },
  button: { padding: "15px", fontSize: "20px", cursor: "pointer" }
};

export default App;
