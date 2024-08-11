"use client" // explicitly tells next.js that we are using client side rendering and not server side

import { initializeApp } from "firebase/app";
import {Box,Stack, Typography, Button} from '@mui/material' //importing a box from material UI website
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';

import {useEffect, useState} from 'react';
//page.js is similiar to app.js or index.html, this holds the main screen on the web application 
//npm run dev allows you to view this page.js on localhost3000


const firebaseConfig = {
  apiKey: "AIzaSyADsARlt-jailCu6NtOLiRtrZdHO9b9EF8",
  authDomain: "pantry-tracker-1cd3a.firebaseapp.com",
  projectId: "pantry-tracker-1cd3a",
  storageBucket: "pantry-tracker-1cd3a.appspot.com",
  messagingSenderId: "752199321246",
  appId: "1:752199321246:web:c42f3a7c2db7fa29f75d8f",
  measurementId: "G-Z4SF4ZVYG7"
};
initializeApp(firebaseConfig);


export default function Home() {
  const [pantry, setPantry] = useState([])
  useEffect(() => {
    const updatePantry = async () => {
      const firestore = getFirestore()
      const snapshot = query(collection(firestore, 'pantry'))
      const docs = await getDocs(snapshot)
      const pantryList = []
      docs.forEach((doc) => {
 
        pantryList.push(doc.id)
      })
      console.log(pantryList)
      setPantry(pantryList)
    }
    updatePantry()
  }, [])
  return (
    <Box //this is how we create a flex box
      width = '100vw' //sets the width and height to fill entire screen
      height = '100vh'
      display = {'flex'}
      justifyContent = {'center'} //sets word to middle
      flexDirection = {'column'}
      alignItems = {'center'}
      border={'1px solid #333'}
      gap = {2}//putting a gap inbetween the pantry items header and the bottom
    >


    <Button variant="contained">ADD</Button>

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
      {pantry.map((i) => (
            <Box //this is how we create a flex box here
            key = {i} //for each i in ..
            width = '100%' //sets the width and height to fill entire screen
            minHeight = '200px'
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

