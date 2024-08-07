import {Box,Stack, Typography} from '@mui/material' //importing a box from material UI website

//page.js is similiar to app.js or index.html, this holds the main screen on the web application 
//npm run dev allows you to view this page.js on localhost3000

const item = ['tomato', 'potato', 'mustard', 'ketchup', 'juice', 'watermelon', 'cucumbers', 'kale', 'hummus']


export default function Home() {
  return (
    <Box //this is how we create a flex box
      width = '100vw' //sets the width and height to fill entire screen
      height = '100vh'
      display = {'flex'}
      justifyContent = {'center'} //sets word to middle
      flexDirection = {'column'}
      alignItems = {'center'}
      border={'1px solid #333'}

    >
    <Box border={'1px solid #333'}>
    <Box width = "800px" height = '100px' bgcolor = {'#ADD8E6'} display = {'flex'} alignItems = {'center'} justifyContent = {'center'} border={'1px solid #333'}
    //CREATING A HEADER/
    > 
      <Typography variant = {'h2'}
                color = {'#333'}
                textAlign = {'center'}
                fontWeight = {'Bold'}>
                
      Pantry Items
      </Typography>



    </Box>
    <Stack width = '800px' height = '300px' spacing = {2} overflow = {'auto'} >
      {item.map((i) => (
            <Box //this is how we create a flex box here
            key = {i} //for each i in ..
            width = '100%' //sets the width and height to fill entire screen
            height = '300px'
            display = {'flex'}
            justifyContent = {'center'} //sets word to middle
            bgcolor = {"#f0f0f0"}
            alignItems = {'center'}>
            
                <Typography //editing the styling of the listed words
                variant = {'h3'}
                color = {'#333'}
                textAlign = {'center'}
                >
                
                  {
                    //capitalize the first letter of the item
                    i.charAt(0).toUpperCase() + i.slice(1) //slice the first letter of each word and capitalize it

                  }
                  
                </Typography>

            </Box>



      ))}


    </Stack>
    </Box>
    
    
    
    
    </Box>

    





  );
}
