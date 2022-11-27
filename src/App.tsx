import { useState, useEffect } from 'react'
import { Box, CircularProgress, Container, Typography } from '@mui/material'
import { ProductsList } from './components/ProductsList'
import { loadAlzaData } from './data'
import { CategoriesList } from './components/CategoriesList'
import { CarouselPanel } from './components/CarouselPanel'

function App () {
  const [products, setProducts] = useState<Array<any>>([])
  const [fail, setFail] = useState('')

  useEffect(() => {
    loadAlzaData().then(data =>
      setProducts(data.data)
    ).catch(err => {
      setFail('Načtení produktů se nepodařilo :(')
      throw err
    })
  }, [])

  const ntbCategories = [
    'Macbook',
    'Herní',
    'Kancelářské',
    'Profesionální',
    'Stylové',
    'Základní',
    'Dotykové',
    'Na splátky',
    'VR Ready',
    'IRIS Graphics',
    'Brašny, batohy',
    'Příslušenství',
  ]

  return (
    <>
      <Container>
        <Typography variant='h5' gutterBottom>Notebooky</Typography>
        <CategoriesList categories={ntbCategories}/>
        <Typography variant='h5' gutterBottom>Nejprodávanější</Typography>
        <CarouselPanel slides={products} />
        {!fail
          ? products.length
            ? <ProductsList products={products}/>
            : <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress sx={{display: 'flex', justifyContent: 'center'}} />
              </Box>
          : <p>{fail}</p>
        }
      </Container>
    </>
  )
}

export default App
