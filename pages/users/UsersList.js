import  React,{useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import {getDocs,collection,deleteDoc,doc} from "firebase/firestore"
import { db } from '../../firebaseconfig';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import AddUser from './AddUsers';
import EditUser from "./EditUser"
import { useAppStore } from '../../appStore';



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



export default function UsersList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [formid,setFormid]=useState('')
  const [editopen, setEditOpen]=useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen=() =>setEditOpen(true)
  const handleEditClose=()=>setEditOpen(false)
  const setRows = useAppStore((state)=>state.setRows);
  const rows=useAppStore((state)=>state.rows)


  const userCollectionRef = collection(db, "users")
  useEffect(()=>{
    getUsers();
  },[])

  const getUsers = async ()=>{
    const data = await getDocs(userCollectionRef);
    setRows(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      getUsers();
    }
  };

  const editData = (name, email,phonenumber,campaignid)=>{
    const data = {
      name:name,
      email:email,
      phonenumber:phonenumber,
      campaignid : campaignid,
    };
    setFormid(data);
    handleEditOpen();
  };

  return (
    <>
    <Box height={10}/>
    <Button variant="contained" onClick={handleOpen} endIcon={<AddCircleIcon />}>
              Add users
            </Button>
            <Box height={20}/>
              <Modal
                open={open}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
              <Box sx={style}>
                <AddUser closeEvent={handleClose}/>
                </Box>
              </Modal>
      {rows.length > 0 && (
        <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px",bgcolor:"" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "10px" ,color:"#212121",fontWeight:"bold"}}
          >
            USERS LIST
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Users" />
              )}
            />
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            
          </Stack>
          <Box height={10} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead >
                <TableRow sx={{bgcolor:"#eeeeee"}}>
                  <TableCell align="left" style={{ minWidth: "100px",fontSize: "17px",color:"#002984",fontWeight:"bold" }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px",fontSize: "17px" ,color:"#002984",fontWeight:"bold"}}>
                    Email
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px",fontSize: "17px",color:"#002984",fontWeight:"bold" }}>
                    PhoneNumber
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px",fontSize: "17px",color:"#002984",fontWeight:"bold" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
              
                        <TableCell align="left" sx={{color:"#212121",fontWeight:"600"}}>{row.name}</TableCell>
                        <TableCell align="left" sx={{color:"#212121",fontWeight:"600"}}>{row.email}</TableCell>
                        <TableCell align="left" sx={{color:"#212121",fontWeight:"600"}}>{row.phonenumber}</TableCell>
                        
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              onClick={()=>{
                                editData(row.name,row.email,row.phonenumber,row.campaignid)
                              }}
                            />
                            <Modal
                              open={editopen}
                                //onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box sx={style}>
                                <EditUser closeEvent={handleEditClose} fid={formid}/>
                                    </Box>
                              </Modal>
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id); 
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
    
  