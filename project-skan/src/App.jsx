import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Homepage";
import Layout from "./components/Layout/Layout";
import Notfoundpage from "./pages/NotFoundPage/Notfoundpage";
import Login from "./pages/LoginPage/Loginpage";
import Search from "./pages/SearchPage/Searchpage";
import Result from "./pages/ResultPage/Resultpage";
import { Test } from "./pages/TestPage/Test";
import { Examination } from "./store/examinationToken";
import { useForm, FormProvider } from "react-hook-form";


function App() {

  const methods = useForm({
    mode: 'onBlur',
  })

  return (
    <div className="App">
      <FormProvider {...methods}>
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
      </FormProvider>
    </div>
  );
}

export default App;
