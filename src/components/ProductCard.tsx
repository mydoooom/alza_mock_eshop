import React, { useState } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Grid, Menu, MenuItem, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { times } from 'lodash'
import { styles } from './ProductCard.style'

interface RatingProps {
  rating: number
}

const Rating = ({ rating }: RatingProps) => {
  const ratingRounded = Math.round(rating)

  return (
    <>
      {times(ratingRounded, i => (
        <StarIcon key={i} color='warning'/>
      ))}
      {times((5 - ratingRounded), i => (
        <StarOutlineIcon key={i} color='warning'/>
      ))}
    </>
  )
}

const BuyButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = !!anchorEl
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)


  return (
    <>
      <Button
        variant="outlined"
        color="success"
        disableElevation
        sx={styles.buyButton}
      >
        Koupit
      </Button>
      <Button
        id="buy"
        onClick={handleClick}
        variant="contained"
        color="success"
        disableElevation
        sx={styles.buyOptionsButton}
      >
        <ExpandMoreIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>Koupit zrychleně</MenuItem>
        <MenuItem onClick={handleClose}>Porovnat</MenuItem>
        <MenuItem onClick={handleClose}>Hlídat</MenuItem>
        <MenuItem onClick={handleClose}>Přidat do seznamu</MenuItem>
      </Menu>
    </>
  )
}

interface PricePanelProps {
  priceInfo: any
  showPriceWithVat?: boolean
  showBuyBtn?: boolean
}

const PricePanel = ({ priceInfo, showPriceWithVat = false, showBuyBtn = false }: PricePanelProps) => (
  <>
    <Grid container justifyContent='space-between'>
      <Grid item>
        <Typography variant='h3' color='success.main' sx={{margin: '0'}}>{priceInfo.priceWithoutVat}</Typography>
        {showPriceWithVat && (
          <Typography>{priceInfo.priceWithVat}</Typography>
        )}
      </Grid>
      <Grid item alignSelf='center'>
        {showBuyBtn && (
          <BuyButton/>
        )}
      </Grid>
    </Grid>
  </>
)

interface Props {
  product: any,
  isInCarousel: boolean
}

export const ProductCard = ({ product, isInCarousel }: Props) => (
  <Card variant={'outlined'} sx={styles.card}>
    {isInCarousel
      ? (
        <>
          <CardMedia component='img' image={product.img} alt={product.title} sx={styles.image}></CardMedia>
          <CardContent>
            <Typography variant='h4'><strong>{product.name}</strong></Typography>
            <Rating rating={product.rating}/>
            <Typography variant='body2' sx={styles.description} mb={3}>{product.spec}</Typography>
            <PricePanel priceInfo={product.priceInfo}></PricePanel>
          </CardContent>
        </>
      )
      : (
        <>
          <Box>
            <CardContent>
              <Typography variant='h4'><strong>{product.name}</strong></Typography>
              <Typography variant='body2' sx={styles.description} mb={3}>{product.spec}</Typography>
            </CardContent>
          </Box>
          <Box>
            <CardMedia component='img' image={product.img} alt={product.title} sx={styles.image}></CardMedia>
            <CardContent>
              <Rating rating={product.rating}/>
              <PricePanel priceInfo={product.priceInfo} showPriceWithVat showBuyBtn></PricePanel>
            </CardContent>
            <Typography align='center' gutterBottom><strong>{product.avail}</strong></Typography>
          </Box>
        </>
      )
    }
  </Card>
)



