import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CITIES from '../data.json'
import Card from '../components/Card'
const Home = () => {
  return (
    <>
        <Container>
            {CITIES.map((city, index) => (
                <>
                    <Typography
                        variant='h4'
                        component='h2'
                        marginBottom={3}
                        marginTop={index && 5}
                    >
                        Top {city.name} tours
                    </Typography>
                    <Grid container spacing={5}>
                        {city.tours.map((tour, tourIndex) => <Card tour={tour} key={tourIndex} />)}
                    </Grid>
                </>
            ))}
        </Container>
    </>
  )
}

export default Home