import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Box } from "@mui/system"
import Report from "./reports/Report"
function Reports(){
    return(
        <>
        <Box sx={{ bgcolor:'#eeeeee',height:'100vh'}}>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{ display: 'flex' }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Report/>
            </Box>
        </Box>
        </Box>

        </> 
    )
}
export default Reports