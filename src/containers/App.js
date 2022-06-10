import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import AppRouter from "../routers/AppRouter";


function App() {
  const [loading, setLoading] = useState("true");

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  });
     
  if (loading) {
      return (
          <div className="App">
         <Loading/>
          </div>
      );
  } else {
      return (
          <div className="App">
              <AppRouter/>
          </div> 
      );
  }
}
export default App;
