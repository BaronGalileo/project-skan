import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Layout from "./components/Layout";
import Notfoundpage from "./pages/Notfoundpage";
import Login from "./pages/Loginpage";
import Search from "./pages/Searchpage";
import Result from "./pages/Resultpage";
import Test from "./pages/test";
import { Examination } from "./store/examinationToken";


function App() {


  return (
    <div className="App">
      <Examination/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
        </Route>
        <Route path="/dom" element={<Test/>}/>
      </Routes>

    </div>
  );
}

export default App;
