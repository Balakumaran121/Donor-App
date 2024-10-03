import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout";
import PageNotFound from "../components/PageNotFound";

const RootRouter = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home />}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="404" element={<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RootRouter