import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./src/Components/Home";
import Profile from "./src/Components/Profile";


function AppRouter() {

return(

<BrowserRouter>
<Routes>
    
    <Route path = "/" element = { <Home />}>
    <Route path = "/profile" element = {<Profile />} />

    </Route>
</Routes>


</BrowserRouter>


)


}

export default AppRouter;