
import PersistentDrawerLeft from "./components/leftDrawer";

import Layout from "./layout/wrapper";
import {Routes,Route} from "react-router-dom";
import CustomizedTreeView from "./components/chart";
import EmployeeData from "./components/employeeData";
// import useDebounce from "./components/useDebounce";
function App() {
  // const [text,setText]=useState("");
  // console.log(text);
  // const debounceTerm=useDebounce(text)
  // console.log("DEBOUNCE",debounceTerm);


  // function changeHandler(e){
  //   setText(e.target.value)
  // }
  return (
    <div className="App">
    <Layout>
      <Routes>
        <Route path="/" element={<PersistentDrawerLeft/>} />
        <Route path="/table" element={<PersistentDrawerLeft/>}/>
        <Route path="/chart" element={<CustomizedTreeView/>}/>
        <Route path="/employee-detail/:employeeId" element={<EmployeeData />}/>
      </Routes>
    </Layout>
      {/* <input type="text" 
        value={text} 
        onChange={changeHandler}/> */}
    </div>
  );
}

export default App;
