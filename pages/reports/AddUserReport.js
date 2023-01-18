import React,{useEffect, useState} from 'react';
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
import { Box } from "@mui/system"
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';

function AddUserReports(){
    const [inputBox, setInputBox] = useState(false);
    const [typeofuser, setTypeOfUser]=useState("");
    const navigate=useNavigate();

    function onChange(event) {
        setTypeOfUser(event.target.value)
        typeUser();
      }
      function typeUser(){
        if(typeofuser==="student"){
            setInputBox(true)
        }else{
            setInputBox(false)
        }
      }
      useEffect(()=>{
        typeUser()
      })

      const options=[
        {
        name:"Student",
        value:"student"
      },
        {
        name:"Adult",
        value:"adult"
      }]

     
    return(
        <>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{ display: 'flex',bgcolor:'#eeeeee' }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
             <h1>HEALTH AND ACTIVITY CARD</h1>
             <h3>GENERAL INFORMATION</h3>
             <Box height={30}/>
             
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField 
                    id="standard-basic" 
                    label="Type of users" 
                    select
                    defaultValue=""
                    onChange={onChange}
                    variant="standard"
                    sx={{minWidth:"25%"}}
                    >
                        {options.map((option) => (
                        <MenuItem key={option.name} value={option.value}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                    </Grid>

                    <Grid item xs={12}>
                    <TextField 
                    id="standard-basic" 
                    label="Aadhar Card no. of Student(optional)" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField 
                    id="standard-multiline-flexible"
                    label="Name" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    multiline
                    maxRows={4}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Admissiotn No" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    {inputBox ? <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Class" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid> : null}

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Date Of Birth" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Blood Group" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>
                    
                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Mother's Name" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="YOB" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Weight" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Height" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Blood Group" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Adhaar Card  No" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Father's Name" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="YOB" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"75%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Weight" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"75%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Height" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"75%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Blood Group" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"75%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Adhaar Card  No" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Family Income" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>
                
                    <Grid item xs={12}>
                    <TextField 
                    id="standard-multiline-flexible"
                    label="Address" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    multiline
                    maxRows={4}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="Phone Number" 
                    variant="standard" 
                    type="number"
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>
                
                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="(M)" 
                    type="number"
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>

                    <Grid item xs={3}>
                    <TextField id="standard-basic" 
                    label="CWSN, Specify" 
                    variant="standard" 
                    size="small" 
                    //value={}
                    sx={{minWidth:"50%"}}/> 
                    </Grid>
                </Grid>
                <Box height={20}/>
                <Grid  sx={{display:"flex",justifyContent:"center"}}>
                <Button variant="contained" onClick={()=>navigate('/adduserreport/healthandactivitycard')} endIcon={<ArrowForwardIcon />}>
                    Next            
                    </Button>
                    </Grid>
            </Box>
            </Box>
        </>
    )
}


export default AddUserReports;