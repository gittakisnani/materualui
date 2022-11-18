import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import ImageList from '../components/ImageList'
import React from 'react'
import CustomizedAccordions from '../components/Accordian'
import BasicModal from '../components/Modal'

const Tour = () => {
  return (
    <Container sx={900}>
        <Typography variant='h2' component='h1' my={3}>Immerse into the falls</Typography>
        <Box display='flex'>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
        />
        <ImageList />
        </Box>
        <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="paragraph" component="p" marginY={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          voluptates rem quos delectus debitis earum modi, ipsum veritatis.
          Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
          omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
          quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Exercitationem officiis commodi beatae
          animi incidunt necessitatibus aut provident ad ex. Saepe!
        </Typography>
      </Box>
      <Typography variant="h6" component="h4" marginBottom={3}>
        Frequently Asked Questions
      </Typography>
      <CustomizedAccordions />
      <Paper 
        sx={{ position: 'fixed', right: 0, left: 0, bottom: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
        >
        <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour