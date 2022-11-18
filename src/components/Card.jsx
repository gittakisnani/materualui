import Grid from '@mui/material/Grid'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material'

export default function Card({ tour }) {
    return (
        <Grid item xs={3} md={4} lg={6}>
            <Paper className='paper' elevation={3}>
                <img className='img' src={tour.image} alt={tour.name} />
                <Box px={1}>
                    <Typography variant='subtitle1' component='h2'>{tour.name}</Typography>
                    <Box display='flex' alignItems='center'>
                        <AccessTimeIcon style={{ width: 12.5 }} />
                        <Typography variant='body2' component='p' marginLeft={.5}>{tour.duration} hours</Typography>
                    </Box>
                    <Box display='flex' alignItems='center' marginTop={3}>
                        <Rating 
                            name='size-small'
                            readOnly
                            size='small'
                            defaultValue={tour.rating}
                            precision={.25}
                        />

                        <Typography variant='body2' component='p' marginLeft={.5}>{tour.rating}</Typography>
                        <Typography variant='body3' component='p' marginLeft={1.5}>{tour.numberOfReviews} Reviews</Typography>
                    </Box>
                    <Typography variant='h6' component='h2' marginTop={0}>From C ${tour.price}</Typography>
                </Box>
            </Paper>
        </Grid>
    )
}