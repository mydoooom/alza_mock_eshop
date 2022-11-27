import { ProductCard } from './ProductCard'
import { Box, Grid } from '@mui/material'

interface Props {
  products: any[]
}

export const ProductsList = ({ products }: Props) => (
  <Box>
    <Grid container alignItems={'stretch'} rowSpacing={7}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} md={4} lg={12 / 5}>
          <ProductCard product={product} isInCarousel={false}/>
        </Grid>
      ))}
    </Grid>
  </Box>
)
