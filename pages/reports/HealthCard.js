import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
import { Box } from "@mui/system"
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';


function HealthCard(){
    const navigate=useNavigate()
    return(
        <>
        <Box sx={{ bgcolor:'#eeeeee',height:'110vh'}}>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{ display: 'flex' }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>HEALTH AND ACTIVITY CARD</h1>
            <h4>COMPONENTS</h4>
            <Grid container spacing={2}>
                    <Grid item xs={12} sx={{display:"flex"}}>
                    <h4>Vision</h4>
                    <TextField 
                    label
                    variant="standard"
                    size="small" 
                    //value={}
                    sx={{minWidth:"25%",marginLeft:"10%"}}/> 
                    </Grid>

                    <Grid item xs={12} sx={{display:"flex",margin:"0"}}>
                    <h4>Ears</h4>
                    <TextField 
                    label
                    variant="standard"
                    size="small" 
                    //value={}
                    sx={{minWidth:"25%",marginLeft:"10%"}}/> 
                    </Grid>

                    <Grid item xs={12} sx={{display:"flex",margin:"0"}}>
                    <h4>General Body Measurements</h4>
                    <TextField 
                    label
                    variant="standard"
                    size="small" 
                    //value={}
                    sx={{minWidth:"25%",marginLeft:"10%"}}/> 
                    </Grid>

                    <Grid item xs={12} sx={{display:"flex",margin:"0"}}>
                    <h4>Circumferences</h4>
                    <TextField 
                    label
                    variant="standard"
                    size="small" 
                    //value={}
                    sx={{minWidth:"25%",marginLeft:"10%"}}/> 
                    </Grid>

                    <Grid item xs={12} sx={{display:"flex",margin:"0"}}>
                    <h4>Health Status</h4>
                    <TextField 
                    label
                    variant="standard"
                    size="small" 
                    //value={}
                    sx={{minWidth:"25%",marginLeft:"10%"}}/> 
                    </Grid>
                    
                    <Grid item xs={12} sx={{display:"flex",margin:"0"}}>
                    <h4>Posture Evaluation</h4>
                    <TextField 
                    label
                    variant="standard"
                    size="small" 
                    //value={}
                    sx={{minWidth:"25%",marginLeft:"10%"}}/> 
                    </Grid>

                    <Grid item xs={12} sx={{display:"flex",margin:"0"}}>
                    <h4>Sporting Activities(HPE)</h4>
                    <TextField 
                    label
                    variant="standard"
                    size="small" 
                    //value={}
                    sx={{minWidth:"25%",marginLeft:"10%"}}/> 
                    </Grid>
                </Grid>
                    <Grid  sx={{display:"flex",justifyContent:"center"}}>
                    <Button variant="contained" onClick={()=>navigate('/adduserreport/healthandactivitycard1')} endIcon={<ArrowForwardIcon />}>
                        Next            
                    </Button>
                    </Grid>
                     
            </Box>
        </Box>
        </Box>
        </> 
    )
}
export default HealthCard