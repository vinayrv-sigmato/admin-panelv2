import { useEffect } from "react";
import Navbar from "../components/Navbar"
import { Box } from "@mui/system"
import Sidebar from "../components/Sidebar"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useAppStore } from '../appStore';
import Typography from '@mui/material/Typography';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CampaignSharpIcon from '@mui/icons-material/CampaignSharp';
import CountUp from 'react-countup';
import {getDocs,collection,doc} from "firebase/firestore";
import { db } from '../firebaseconfig';



function Home(){
    const setRows = useAppStore((state)=>state.setRows);
    const rows=useAppStore((state)=>state.rows)
    const camprows=useAppStore((state)=>state.camprows)
    const setCamprows = useAppStore((state)=>state.setCamprows);

    const campaignCollectionRef = collection(db, "campaigns")

    useEffect(()=>{
      getCampaigns();   
    },[])
  
    const getCampaigns = async ()=>{
      const data = await getDocs(campaignCollectionRef);
      setCamprows(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }


    const userCollectionRef = collection(db, "users")
  useEffect(()=>{
    getUsers();
  },[])

  const getUsers = async ()=>{
    const data = await getDocs(userCollectionRef);
    setRows(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
  }

    return(
        <>
        <Box sx={{ bgcolor:'#eeeeee',height:'100vh'}}>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{ display: 'flex'}}>  
        <Sidebar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box height={40}/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography  variant="h4" component="div">
                    Dashboard
                </Typography>
            </Grid>
            
            <Grid item xs={4} sx={{marginTop:10}}>
                <Card sx={{ maxWidth: 345}}>
                    <CardContent>
                        <PeopleAltIcon/>
                        <Typography gutterBottom variant="h3" component="div">
                        <CountUp start={0} end={rows.length} delay={0} duration={1}/>
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            Number of users
                        </Typography>
                    </CardContent>
                </Card> 
            </Grid>
            <Grid item xs={4} sx={{marginTop:10}}>
            <Card sx={{ maxWidth: 345,bgcolor:"#002984"}}>
                    <CardContent>
                        <CampaignSharpIcon sx={{color:"white",size:"large"}}/>
                        <Typography gutterBottom variant="h3" component="div" sx={{color:"white"}}>
                        <CountUp start={0} end={camprows.length} delay={0} duration={1}/>
                        </Typography>
                        <Typography variant="body2" color="white">
                            Number of Campaigns
                        </Typography>
                    </CardContent>
                </Card> 
            </Grid>
            <Grid item xs={4}>
                
            </Grid>
            <Grid item xs={8}>
                
            </Grid>
        </Grid>
        </Box>
        </Box>
        </Box>
        </>   
    )
}
export default Home