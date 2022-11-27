import { Box, Grid } from '@mui/material'
import { ProductCard } from './ProductCard'

interface Props {
  products: any[]
}

export const ProductsList = ({ products }: Props) => (
  <Box>
    <Grid container alignItems={'stretch'} rowSpacing={7}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={12 / 5}>
          <ProductCard product={product} isInCarousel={false}/>
        </Grid>
      ))}
    </Grid>
  </Box>
)
