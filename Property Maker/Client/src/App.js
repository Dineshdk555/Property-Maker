import { useEffect, useState } from "react";
import LogIn from "./components/auth/LogIn";
import LandingPage from "./pages/LandingPage";
import { Route, Routes,Router, Navigate } from "react-router-dom";
import Register from "./components/auth/Register";
const App = () => {
  const [data, setData] = useState(null);
  console.log("data",data)
    useEffect(() => {
        // Fetch data from the backend when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/data");
            console.log("DK Response:",response);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
  return (
    <div className="mx-auto max-w-screen-xl">
    <Routes >
       <Route path="/" element={<LandingPage/>} />
       <Route path="/login" element={<LogIn/>} />
       <Route path="/register" element={<Register/>} />
    </Routes>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
};

export default App;
