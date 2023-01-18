import React,{useEffect, useState} from 'react';
import {  IconButton } from '@mui/material';
import {Typography, Box} from '@mui/material';
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {updateDoc,getDocs,collection,doc,get} from "firebase/firestore"
import { db } from '../../firebaseconfig';
import Swal from "sweetalert2";
import { useAppStore } from '../../appStore';
import MenuItem from '@mui/material/MenuItem';

function EditUser({fid,closeEvent}){
    const [name, setName] = useState(fid.name);
    const [email, setEmail]=useState(fid.email);
    const [phnno, setPhnno]=useState(fid.phonenumber);
    const [campaignid, setcampaignid]=useState(fid.campaignid);
    const setRows = useAppStore((state)=>state.setRows);
    const camprows=useAppStore((state)=>state.camprows)

    const userCollectionRef = collection(db, "users");
    
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
        setcampaignid(event.target.value);
    }

    const createUser= async()=>{
        
        const userDoc = doc(db,"users",fid.id)
        const newField={
            name:name,
            email:email,
            phonenumber:Number(phnno),
            campaignid:campaignid,
        }
        await updateDoc(userDoc, newField);
        getUsers();
        closeEvent();
        Swal.fire("Submitted", "Your file has been submitted.", "success")

    }
    
    const getUsers = async ()=>{
        const data = await getDocs(userCollectionRef);
        setRows(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      }

    return(
        <>
            <Box sx={{m:2}}/>
            <Typography variant="h5" align="center">
                EDIT USER
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
                    <TextField id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    size="small" 
                    value={name}
                    onChange={handleNameChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="outlined-basic" 
                    label="Email Id" 
                    variant="outlined" 
                    type="email"
                    size="small"
                    value={email} 
                    onChange={handleEmailChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField id="outlined-basic" 
                    label="Phone Number" 
                    type="number"
                    variant="outlined" 
                    size="small" 
                    value={phnno}
                    onChange={handlePhnnoChange}
                    sx={{minWidth:"100%"}}/> 
                    </Grid>

                    <Grid item xs={12}>
                    <TextField 
                    id="standard-basic" 
                    label="select campaign" 
                    select
                    value={campaignid}
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

export default EditUser;