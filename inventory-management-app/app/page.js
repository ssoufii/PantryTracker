import {Box} from '@mui/material' //importing a box from material UI website

//page.js is similiar to app.js or index.html, this holds the main screen on the web application 

export default function Home() {
  return (
    <Box //this is how we create a flex box
      width = '100vw' //sets the width and height to fill entire screen
      height = '100vh'
      display = {'flex'}
      justifyContent = {'center'} //sets word to middle

      alignItems = {'center'}

      

    >Ello M8</Box>
  );
}
