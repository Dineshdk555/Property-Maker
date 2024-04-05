import { useEffect, useState } from "react";
import LogIn from "./components/auth/LogIn";

const App = () => {
  const [data, setData] = useState(null);

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
    <>
    <div id="main-app">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <LogIn />
    </div>
    </>
  );
};

export default App;
