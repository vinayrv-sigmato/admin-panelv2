import React ,{useState}from 'react';
import AddReports from './AddReports';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import {Box} from '@mui/material';
import AddCircleIcon from "@mui/icons-material/AddCircle";
 
function Report(){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };
      
    const handleOpen = () => setOpen(true);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return(
        <>
        <Box height={30}/>
        <Button variant="contained" onClick={handleOpen} endIcon={<AddCircleIcon />}>
              Add report
            </Button>
              <Modal
                open={open}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
              <Box sx={style}>
                <AddReports closeEvent={handleClose}/>
                </Box>
              </Modal>

        </>
    )
}

export default Report;