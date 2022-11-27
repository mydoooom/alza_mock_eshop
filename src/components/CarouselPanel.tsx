import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { ProductCard } from './ProductCard'
import { styles } from './CarouselPanel.style'
import 'swiper/css/navigation'
import 'swiper/css'

interface Props {
  slides: Array<any>
}

export const CarouselPanel = ({ slides }: Props) => {
  return (
    <Box sx={styles.carousel}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        navigation
        loop={true}
        style={{ padding: '1px' }}
      >
        {slides && slides.map(slide => (
          <SwiperSlide key={slide.id} style={{ height: 'auto' }}>
            <ProductCard product={slide} isInCarousel/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
