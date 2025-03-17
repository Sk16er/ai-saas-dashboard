import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [result, setResult] = useState("");
  const handleGenerate = async () => {
    const { data } = await axios.post("/api/generate", { prompt: "Create something awesome" });
    setResult(data.result);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <button onClick={handleGenerate} className="px-6 py-3 bg-blue-500 text-white rounded">Generate AI Content</button>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{result}</p>
      </div>
    </div>
  );
}
