import { TextField, Typography } from "@material-ui/core";
import { useState } from "react";

export default function Circle() {
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(null);
  const handleChange = (e) => {
    const r = parseFloat(e.target.value);
    setValue(r);
    setResult(r * 2);
  };
  return (
    <div>
      <h2>Circle diameter</h2>
      <TextField
        value={value || null}
        onChange={handleChange}
        placeholder="Please type a radius"
      />
      <p>Circle diameter is</p>
      <Typography>{result || "Unknown Please type a radius"}</Typography>
    </div>
  );
}
