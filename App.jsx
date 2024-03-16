import { RouterProvider } from 'react-router-dom'
import {route} from "./routes/routes"
function App(){
    return (
        <>
        <RouterProvider router={route}></RouterProvider>
        </>
    )
}
export default App