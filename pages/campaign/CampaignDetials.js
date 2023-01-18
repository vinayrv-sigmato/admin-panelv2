import React,{useEffect, useState} from 'react';
import {  IconButton } from '@mui/material';
import {Typography, Box} from '@mui/material';
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import TextField from '@mui/material/TextField';


function CampaignDetials({fid,closeEvent}){
    const [name, setName] = useState("");
    const [description, setDescription]=useState("");
    const [noofdays, setNoofdays]=useState("");
    const [maxmemberslimit, setMaxmemberslimit]=useState("");
    const [phnno, setPhnno]=useState("");
    const [email, setEmail]=useState("");
    const [location, setLocation]=useState("");
    const [city, setCity]=useState("");
    const [doctorname, setDoctorname]=useState("");
    const [designation, setDesignation]=useState("");
    const [date, setDate]=useState("");
  
    useEffect(()=>{
        setName(fid.name);
        setEmail(fid.email);
        setPhnno(fid.phoneno);
        setDescription(fid.description);
        setNoofdays(fid.noofdays);
        setMaxmemberslimit(fid.maxmemberslimit);
        setLocation(fid.location);
        setCity(fid.city);
        setDoctorname(fid.doctorname);
        setDesignation(fid.designation);
        setDate(fid.date)

    })

    return(
        <>
            <Box sx={{m:2}}/>
            <Typography variant="h5" align="center" sx={{color:"#002984"}}>
                Campaign Details
            </Typography>
            <IconButton
                style={{position:"absolute", top:"0", right:"0"}}
                onClick={closeEvent}
                >
                    <CloseIcon/>
                </IconButton>
                <Box height={30}/>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Name" 
                    variant="standard" 
                    size="small" 
                    value={name}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField 
                    id="standard-multiline-flexible"
                    label="Description" 
                    variant="standard" 
                    size="small" 
                    value={description}
                    multiline
                    maxRows={4}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="No of days" 
                    variant="standard" 
                    size="small" 
                    value={noofdays}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="Max members limit" 
                    variant="standard" 
                    size="small" 
                    value={maxmemberslimit}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="Phonenumber" 
                    variant="standard" 
                    size="small" 
                    value={phnno}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="Date" 
                    variant="standard" 
                    size="small" 
                    value={date}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Email" 
                    variant="standard" 
                    size="small" 
                    value={email}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="Location" 
                    variant="standard" 
                    size="small" 
                    value={location}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="City" 
                    variant="standard" 
                    size="small" 
                    value={city}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Doctor name" 
                    variant="standard" 
                    size="small" 
                    value={doctorname}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Designation" 
                    variant="standard" 
                    size="small" 
                    value={designation}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    {/*<Grid item xs={12}>
                        <Typography varient="h5" align="center">
                        <Button variant="contained" >Submit</Button>
                        </Typography>
                    </Grid> */}
                </Grid>
                <Box sx={{m:4}}/>
        </>
    )
}

export default CampaignDetials;