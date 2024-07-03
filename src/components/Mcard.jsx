import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Mcard = () => {
  return (
    <div>
      <div>
    <Card style={{ marginTop: '5%', borderColor:'black',borderWidth:'5px',backgroundColor:'beige'}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Sitcom Series 
      </Typography>
      <Typography variant="h5" component="div">
        The big bang theory
        {/* be{bull}nev{bull}o{bull}lent */}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        year:2003
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  </div>
   <div>
   <Card style={{ marginTop: '5%', borderColor:'black',borderWidth:'5px',backgroundColor:'beige'}}>
   <CardContent>
     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Movie 
     </Typography>
     <Typography variant="h5" component="div">
       Shawshank Redemption
       {/* be{bull}nev{bull}o{bull}lent */}
     </Typography>
     <Typography sx={{ mb: 1.5 }} color="text.secondary">
       year:1994
     </Typography>
   </CardContent>
   {/* <CardActions>
     <Button size="small">Learn More</Button>
   </CardActions> */}
 </Card>
 </div>
 </div>
  )
}

export default Mcard