import { Button, Grid } from '@mui/material'
import { styles } from './CategoriesList.style'

interface Props {
  categories: Array<string>
}

export const CategoriesList = ({ categories }: Props) => {
  return (
    <Grid container spacing={1} sx={{mb: 7}}>
      {categories.map((category, index) => (
        <Grid item key={index} lg={2}>
          <Button variant='outlined' sx={styles.btn}>{category}</Button>
        </Grid>
      ))}
    </Grid>
  )
}
