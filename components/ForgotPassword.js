import React,{useRef,useState} from 'react';
import Button from '@mui/material/Button';
import Logo from '../images/logo.png'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UserAuth } from '../context/AuthContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import validator from 'validator';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetpassword } = UserAuth();
 
  const [error, setError] = useState('');
  const [message, setMessage] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    if (validator.isEmail(emailRef.current.value)) {
      try {
        setMessage("")
        setError('')
        await resetpassword(emailRef.current.value)
        setMessage("Check your inbox for further instructions")
        
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    } else {
      setError('Enter valid Email!')
    } 
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={Logo} alt="logo"/>
          <Typography component="h1" variant="h5">
           RESET PASSWORD
          </Typography>

          <Box height={20}/>
          {error &&
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>}
          {message &&
          <Alert severity="success">{message}</Alert>}
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              inputRef={emailRef}
              autoComplete="email"
              autoFocus
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Reset
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}