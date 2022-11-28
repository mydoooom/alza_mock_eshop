import { Box, Button, Grid } from '@mui/material'
import { styles } from './CategoriesList.style'

interface Props {
  categories: Array<string>
}

export const CategoriesList = ({ categories }: Props) => {
  return (
    <Box sx={{ mb: 7 }} display='flex' flexWrap='wrap' gap={1}>
      {categories.map((category, index) => (
        <Grid item key={index} lg={2}>
          <Button variant='outlined' sx={styles.btn}>{category}</Button>
        </Grid>
      ))}
    </Box>
  )
}
