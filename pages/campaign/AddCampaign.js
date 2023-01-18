import React,{useEffect, useState} from 'react';
import {  IconButton } from '@mui/material';
import {Typography, Box} from '@mui/material';
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {addDoc,getDocs,collection} from "firebase/firestore"
import { db } from '../../firebaseconfig';
import Swal from "sweetalert2";
import { useAppStore } from '../../appStore';
import validator from 'validator';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';




function AddCampaign({closeEvent}){
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
    const setCamprows = useAppStore((state)=>state.setCamprows);
    const [error, setError]=useState("");
    const camprows=useAppStore((state)=>state.camprows)
    

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }
    const handleDescriptionChange = (event)=>{
        setDescription(event.target.value);
    }

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

    const handlePhnnoChange = (event)=>{
        setPhnno(event.target.value);
    }
    const handleNoofdaysChange = (event)=>{
        setNoofdays(event.target.value);
    }
    const handleMaxmemberlimitChange=(event)=>{
        setMaxmemberslimit(event.target.value)
    }
    const handleLocationChange=(event)=>{
        setLocation(event.target.value)
    }
    const handleCityChange=(event)=>{
        setCity(event.target.value)
    }
    const handleDoctornameChange=(event)=>{
        setDoctorname(event.target.value)
    }
    const handleDesignationChange=(event)=>{
        setDesignation(event.target.value)
    }
    const handleDateChange=(event)=>{
        setDate(event.target.value)
    }

    const campaignCollectionRef = collection(db, "campaigns")

    useEffect(()=>{
      getCampaigns();
        
    },[])
  
    const getCampaigns = async ()=>{
      const data = await getDocs(campaignCollectionRef);
      setCamprows(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }

    const createCampaign= async()=>{
        if (validator.isEmail(email)){
            await addDoc(campaignCollectionRef, {
                name:name,
                email:email,
                phoneno:phnno,
                city:city,
                date:date,
                description:description,
                doctorname:doctorname,
                location:location,
                maxmemberslimit:maxmemberslimit,
                noofdays:noofdays,
                designation:designation
            })
            getCampaigns();
            closeEvent();
            Swal.fire("Submitted", "Your file has been submitted.", "success")
        }else setError("Invalid Email")
    }
    

    return(
        <>
            <Box minWidth={500}>
            <Typography variant="h5" align="center" sx={{fontWeight:"bold",color:"#002984"}}>
                ADD CAMPAIGN
            </Typography>
            <IconButton
                style={{position:"absolute", top:"0", right:"0"}}
                onClick={closeEvent}
                >
                    <CloseIcon/>
                </IconButton>
                <Box height={5}/>
                {error &&
                <Alert severity="error">
                    {error}
                </Alert>}
                <Box height={5}/>
                <Grid container spacing={2}>
                
                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Name" 
                    variant="standard" 
                    size="small" 
                    value={name}
                    onChange={handleNameChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-multiline-flexible" 
                    label="Description" 
                    variant="standard" 
                    size="small" 
                    multiline
                    maxRows={4}
                    value={description}
                    onChange={handleDescriptionChange}
                    sx={{minWidth:"100%"}} />
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="No of days" 
                    variant="standard" 
                    size="small" 
                    value={noofdays}
                    onChange={handleNoofdaysChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="Max members limit" 
                    variant="standard" 
                    size="small" 
                    value={maxmemberslimit}
                    onChange={handleMaxmemberlimitChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>
                    
                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="Phone Number" 
                    type="number"
                    variant="standard" 
                    size="small"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                      }}
                    value={phnno}
                    onChange={handlePhnnoChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="Date" 
                    variant="standard" 
                    size="small" 
                    value={date}
                    onChange={handleDateChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Email Id" 
                    variant="standard" 
                    type="email"
                    size="small"
                    value={email} 
                    onChange={handleEmailChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="Location" 
                    variant="standard" 
                    type="text"
                    size="small"
                    value={location} 
                    onChange={handleLocationChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="standard-basic" 
                    label="City" 
                    variant="standard" 
                    type="text"
                    size="small"
                    value={city} 
                    onChange={handleCityChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Doctor" 
                    variant="standard" 
                    type="email"
                    size="small"
                    value={doctorname} 
                    onChange={handleDoctornameChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    label="Designation" 
                    variant="standard" 
                    type="email"
                    size="small"
                    value={designation } 
                    onChange={handleDesignationChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Typography varient="h5" align="center">
                        <Button variant="contained" onClick={createCampaign}>Submit</Button>
                        </Typography>
                    </Grid>
                    
                </Grid>
                </Box>
        </>
    )
}

export default AddCampaign;