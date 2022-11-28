export const styles = {
  carousel: {
    position: 'relative',
    marginBottom: '7em'
  },
  carouselNav: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: '10',
    pointerEvents: 'none'

  },
  carouselNavBtn: {
    minWidth: 'unset',
    p: '2em 0em'
  },
  carouselNavBtnLeft: {
    marginLeft: '-10px',
    pointerEvents: 'auto',
  },
  carouselNavBtnRight: {
    marginRight: '-10px',
    pointerEvents: 'auto',
  },
}
