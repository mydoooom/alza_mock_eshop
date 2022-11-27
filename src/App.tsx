import { useState, useEffect } from 'react'
import { Alert, Box, CircularProgress, Container, Typography } from '@mui/material'
import { loadAlzaData } from './dataFetch/getData'
import { CategoriesList } from './components/CategoriesList'
import { CarouselPanel } from './components/CarouselPanel'
import { ProductsListFilter } from "./components/ProductsListFilter"

function App () {
  const [products, setProducts] = useState<Array<any>>([])
  const [failedToLoad, setFailedToLoad] = useState('')

  useEffect(() => {
    loadAlzaData().then(data =>
      setProducts(data)
    ).catch(() => {
      setFailedToLoad('Načtení produktů se nepodařilo :(')
      throw Error('Products failed to load.')
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

  const filters = {
    top: 'TOP',
    topSellers: 'Nejprodávanější',
    priceLowToHigh: 'Od nejlevnějšího',
    priceHighToLow: 'Od nejdražšího'
  }

  return (
    <>
      <Container maxWidth='xl'>
        <Typography variant='h2' color='primary'>Notebooky</Typography>
        <CategoriesList categories={ntbCategories}/>
        {!failedToLoad
          ? products.length
            ? (
              <>
                <Typography variant='h3' color='primary.light'>Nejprodávanější</Typography>
                <CarouselPanel slides={products}/>
                <ProductsListFilter filters={filters} products={products}/>
              </>
            )
            : (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress sx={{ display: 'flex', justifyContent: 'center' }}/>
              </Box>
            )
          : <Alert severity="error">Načtení produktů se nezdařilo :(</Alert>
        }
      </Container>
    </>
  )
}

export default App
