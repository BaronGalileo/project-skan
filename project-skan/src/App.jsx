import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Homepage";
import Layout from "./components/Layout/Layout";
import Notfoundpage from "./pages/NotFoundPage/Notfoundpage";
import Login from "./pages/LoginPage/Loginpage";
import Search from "./pages/SearchPage/Searchpage";
import Result from "./pages/ResultPage/Resultpage";
import { Test } from "./pages/TestPage/Test";
import { Examination } from "./store/examinationToken";


function App() {


  return (
    <div className="App">
      <Examination/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login />}/>
          <Route path="search" element={<Search/>}/>
          <Route path="result" element={<Result/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
          <Route path="test" element={<Test/>}/>
        </Route>
        <Route path="/dom" element={<Test/>}/>
      </Routes>

    </div>
  );
}

export default App;
