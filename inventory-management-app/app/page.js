import {Box,Stack} from '@mui/material' //importing a box from material UI website

//page.js is similiar to app.js or index.html, this holds the main screen on the web application 


const item = ['tomato', 'potato', 'mustard', 'ketchup', 'juice', 'watermelon']


export default function Home() {
  return (
    <Box //this is how we create a flex box
      width = '100vw' //sets the width and height to fill entire screen
      height = '100vh'
      display = {'flex'}
      justifyContent = {'center'} //sets word to middle

      alignItems = {'center'}

    >
    
    <Stack width = '800px' height = '600px' spacing = {2} >
      {item.map((i) => (
        <Box //this is how we create a flex box
        key = {i}
        width = '100%' //sets the width and height to fill entire screen
        height = '100px'
        display = {'flex'}
        justifyContent = {'center'} //sets word to middle
        bgcolor = {"#f0f0f0"}
        alignItems = {'center'}

        >{i}
          
        </Box>



      ))}


    </Stack>
    
    
    
    
    </Box>

    





  );
}
