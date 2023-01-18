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
import MenuItem from '@mui/material/MenuItem';



function AddUser({closeEvent}){
    const [name, setName] = useState("");
    const [email, setEmail]=useState("");
    const [phnno, setPhnno]=useState("");
    const setRows = useAppStore((state)=>state.setRows);
    const setCamprows = useAppStore((state)=>state.setCamprows);
    const [campaignid, setCampaignId]=useState("");
    const [error, setError]=useState("");
    const camprows=useAppStore((state)=>state.camprows)
    

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

    const handlePhnnoChange = (event)=>{
        setPhnno(event.target.value);
    }
    const handleCampaignIdChange = (event)=>{
        setCampaignId(event.target.value);
    }

    const userCollectionRef = collection(db, "users");

    const campaignCollectionRef = collection(db, "campaigns")

    useEffect(()=>{
      getCampaigns();   
    },[])
  
    const getCampaigns = async ()=>{
      const data = await getDocs(campaignCollectionRef);
      setCamprows(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }

    const createUser= async()=>{
        if (phnno.length<10){
            setError("Phone number must contain 10 numbers")
        }
        else if (validator.isEmail(email)){
            await addDoc(userCollectionRef, {
                name:name,
                email:email,
                phonenumber:phnno,
                campaignid:campaignid,
            })
            getUsers();
            closeEvent();
            Swal.fire("Submitted", "Your file has been submitted.", "success")
        }else setError("Invalid Email")
    }
    
    const getUsers = async ()=>{
        const data = await getDocs(userCollectionRef);
        setRows(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      }

    return(
        <>
            <Box sx={{m:2}}/>
            <Typography variant="h5" align="center" sx={{fontWeight:"bold",color:"#002984"}}>
                ADD USER
            </Typography>
            <IconButton
                style={{position:"absolute", top:"0", right:"0"}}
                onClick={closeEvent}
                >
                    <CloseIcon/>
                </IconButton>
                <Box height={10}/>
                {error &&
                <Alert severity="error">
                    {error}
                </Alert>}
                <Box height={10}/>
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
                    <TextField id="standard-basic" 
                    label="Email Id" 
                    variant="standard" 
                    type="email"
                    size="small"
                    value={email} 
                    onChange={handleEmailChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
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

                    <Grid item xs={12}>
                    <TextField 
                    id="standard-basic" 
                    label="select campaign" 
                    select
                    defaultValue=""
                    onChange={handleCampaignIdChange}
                    variant="standard"
                    sx={{minWidth:"100%"}}
                    >
                        {camprows.map((camprow) => (
                        <MenuItem key={camprow.email} value={camprow.id}>
                          {camprow.name}
                        </MenuItem>
                      ))}
                    </TextField>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Typography varient="h5" align="center">
                        <Button variant="contained" onClick={createUser}>Submit</Button>
                        </Typography>
                    </Grid>  
                </Grid>
                <Box sx={{m:4}}/>
        </>
    )
}

export default AddUser;