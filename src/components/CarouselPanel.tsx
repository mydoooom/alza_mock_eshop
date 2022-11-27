import { useRef } from 'react'
import { Box, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, type Swiper as SwiperRef } from 'swiper'
import { ProductCard } from './ProductCard'
import { styles } from './CarouselPanel.style'
import 'swiper/css/navigation'
import 'swiper/css'

interface Props {
  slides: Array<any>
}

export const CarouselPanel = ({ slides }: Props) => {
  const swiperRef = useRef<SwiperRef>()

  return (
    <Box sx={styles.carousel}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        breakpoints={
          {
            1000: {
              slidesPerView: 4
            },
            500: {
              slidesPerView: 3
            }
          }
        }
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
