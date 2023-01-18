import React,{useState} from 'react';
import {  Button, IconButton,Grid } from '@mui/material';
import {Typography, Box} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { db } from '../../firebaseconfig';
import { collection, getDocs, query, where } from "firebase/firestore";
import Alert from '@mui/material/Alert';
import {  useNavigate } from 'react-router-dom';


function AddReports({closeEvent}){
    const [phonenumber,setPhonenumber]=useState("");
    const [error, setError]=useState("")
    const navigate= useNavigate();
    const handlePhnnoChange = (event)=>{
        setPhonenumber(event.target.value);
    }
    const userRef = collection(db, "users");

    let q;

    const phnnoCheck= async ()=>{
        q = query(userRef, where("phonenumber", "==", phonenumber));
        const user= await getDocs(q);

        if(phonenumber.length<10){
            setError("Phone number must contain 10 numbers")
        }else if(user.docs.length===0){
            setError("No user found")
        }
        else{navigate("/adduserreport")}
    }
   
     
    return(
        <>
        <Box sx={{m:2}}/>
            <Typography variant="h5" align="center" sx={{fontWeight:"bold",color:"#002984",top:"0"}}>
                ADD REPORT
            </Typography>
            <IconButton
                style={{position:"absolute", top:"0", right:"0"}}
                onClick={closeEvent}
                >
                    <CloseIcon/>
                </IconButton>
                <Box height={10}/>
                
                 {error &&
                    <Alert variant="standard" severity="error">
                        {error}
                    </Alert>}
                    <Box height={20}/>
                <TextField id="standard-basic" 
                    label="Phone Number" 
                    type="number"
                    variant="standard" 
                    size="small"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                      }}
                    
                    onChange={handlePhnnoChange}
                    sx={{minWidth:"100%"}}/> 
                    <Box height={10}/>
                    <Grid item xs={12}>
                        <Typography varient="h5" align="center">
                        <Button variant="contained" onClick={phnnoCheck}>ADD</Button>
                        </Typography>
                    </Grid>     
        </>
    )
}
export default AddReports