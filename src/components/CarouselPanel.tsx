import { useRef } from 'react'
import { Box, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, type Swiper as SwiperRef } from 'swiper'
import { ProductCard } from './ProductCard'
import { styles } from './CarouselPanel.style'
import { theme } from '../theme'
import 'swiper/css/navigation'
import 'swiper/css'

interface Props {
  slides: Array<any>
}

export const CarouselPanel = ({ slides }: Props) => {
  const swiperRef = useRef<SwiperRef>()
  const muiBreakpoints = theme.breakpoints.values
  const carouselBreakpoints = {
    [muiBreakpoints.sm]: {
      slidesPerView: 2,
    },
    [muiBreakpoints.md]: {
      slidesPerView: 3,
    },
    [muiBreakpoints.lg]: {
      slidesPerView: 4,
    },
    [muiBreakpoints.xl]: {
      slidesPerView: 5,
    }
  }

  return (
    <Box sx={styles.carousel}>
      <Swiper
        modules={[Navigation]}
        breakpoints={carouselBreakpoints}
        loop={true}
        style={{ padding: '1px' }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {slides && slides.map(slide => (
          <SwiperSlide key={slide.id} style={{ height: 'auto' }}>
            <ProductCard product={slide} isInCarousel/>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={styles.carouselNav}>
        <Button
          variant='contained'
          disableElevation
          sx={[styles.carouselNavBtn, styles.carouselNavBtnLeft]}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowBackIosNewIcon/>
        </Button>
        <Button
          variant='contained'
          disableElevation
          sx={[styles.carouselNavBtn, styles.carouselNavBtnRight]}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowForwardIosIcon/>
        </Button>
      </Box>
    </Box>
  )
}
