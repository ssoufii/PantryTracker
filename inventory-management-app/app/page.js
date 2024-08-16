"use client"; // explicitly tells next.js that we are using client side rendering and not server side

import { initializeApp } from "firebase/app";
import {
  Box,
  Stack,
  Typography,
  Button,
  Modal,
  TextField,
} from "@mui/material"; //importing a box from material UI website
import {
  getFirestore,
  collection,
  query,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
//page.js is similiar to app.js or index.html, this holds the main screen on the web application
//npm run dev allows you to view this page.js on localhost3000

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

const firebaseConfig = {
  apiKey: "AIzaSyADsARlt-jailCu6NtOLiRtrZdHO9b9EF8",
  authDomain: "pantry-tracker-1cd3a.firebaseapp.com",
  projectId: "pantry-tracker-1cd3a",
  storageBucket: "pantry-tracker-1cd3a.appspot.com",
  messagingSenderId: "752199321246",
  appId: "1:752199321246:web:c42f3a7c2db7fa29f75d8f",
  measurementId: "G-Z4SF4ZVYG7",
};
initializeApp(firebaseConfig);

export default function Home() {
  const [pantry, setPantry] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [itemName, setItemName] = useState("");

  const updatePantry = async () => {
    const firestore = getFirestore();
    const snapshot = query(collection(firestore, "pantry"));
    const docs = await getDocs(snapshot);
    const pantryList = [];
    docs.forEach((doc) => {
      pantryList.push({name: doc.id, ...doc.data()});
    });
    console.log(pantryList);
    setPantry(pantryList);
  };
  useEffect(() => {
    updatePantry();
  }, []);

  const addItem = async (item) => {
    const firestore = getFirestore();

    const docRef = doc(collection(firestore, "pantry"), item);
    
    //check if exists
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const {count} = docSnap.data()
      await setDoc(docRef, {count: count + 1});
      return
    }
    else{
      await setDoc(docRef, {count: 1});
    }
    await updatePantry();
  };

  const removeItem = async (item) => {
    const firestore = getFirestore();

    const docRef = doc(collection(firestore, "pantry"), item);
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const {count} = docSnap.data()
      if (count ===1) {
        await deleteDoc(docRef)
      }
      
    else{
      await setDoc(docRef, {count: count - 1});
    }
    
  }
  await updatePantry();

  
  };


  return (
    <Box //this is how we create a flex box
      width="100vw" //sets the width and height to fill entire screen
      height="100vh"
      display={"flex"}
      justifyContent={"center"} //sets word to middle
      flexDirection={"column"}
      alignItems={"center"}
      border={"1px solid #333"}
      gap={2} //putting a gap inbetween the pantry items header and the bottom
    >
      <Modal // A modal is like a popup display, this is the popup in which we'll add new items to the pantry
        //the modal dissapears once you touch outside of the box
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ADD ITEM
          </Typography>
          <Stack
            width="100%"
            direction={"row"}
            spacing={4}
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          >
            <TextField id="outlined-basic" label="Item" variant="outlined" />
            <Button
              variant="Outlined"
              onClick={() => {
                addItem(itemName);
                setItemName("");
                handleClose();
              }}
            >
              {" "}
              ADD
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Button variant="contained" onClick={handleOpen}>
        ADD
      </Button>

      <Box border={"1px solid #333"}>
        <Box
          width="800px"
          height="100px"
          bgcolor={"#ADD8E6"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid #333"}
          //CREATING A HEADER/
        >
          <Typography
            variant={"h2"}
            color={"#333"}
            textAlign={"center"}
            fontWeight={"Bold"}
          >
            Pantry Items
          </Typography>
        </Box>
        <Stack width="800px" height="300px" spacing={2} overflow={"scroll"}>
          {pantry.map(({name, count}) => (
            <Box //this is how we create a flex box here
              key={name} //for each i in ..
              width="100%" //sets the width and height to fill entire screen
              minHeight="200px"
              display={"flex"}
              justifyContent={"space-between"} //sets word to middle
              bgcolor={"#f0f0f0"}
              alignItems={"center"}
              paddingX={5}
            >
              <Typography //editing the styling of the listed words
                variant={"h3"}
                color={"#333"}
                textAlign={"center"}
              >
                {
                  //capitalize the first letter of the item
                  name.charAt(0).toUpperCase() + name.slice(1) //slice the first letter of each word and capitalize it
                }
              </Typography>

              <Typography variant={"h3"} color={'#333'} textAlign={'center'}>
              Quantity: {count}
              </Typography>
              
            <Button
              variant="Contained"
              onClick={() => {
                removeItem(name)}}>

                REMOVE</Button>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
