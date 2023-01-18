import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Box } from "@mui/system"
import CampaignList from "./campaign/CampaignList"

function Campaign(){
    return(
        <>
        <Box sx={{bgcolor:'#eeeeee'}} height='100vh'>
        <Navbar/>
        <Box height={70}/>
        <Box sx={{ display: 'flex' }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <CampaignList/>
            </Box>  
        </Box>
        </Box>
        </>  
    )
}
export default Campaign