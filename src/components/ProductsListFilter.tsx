import React, { useState } from 'react'
import { Divider, Tab, Tabs } from '@mui/material'
import { isEmpty } from 'lodash'
import { ProductsList } from './ProductsList'
import { styles } from './ProductsListFilter.style'

const listFilter = (list: any[], criterion: string) => {
  switch (criterion) {
    case 'top':
      return [...list].sort((a, b) => b.rating - a.rating)
    // Couldn't find a criterion in the API by which I could sort items by the bestsellers
    case 'priceLowToHigh':
      return [...list].sort((a, b) => a.priceInfo.priceNoCurrency - b.priceInfo.priceNoCurrency)
    case 'priceHighToLow':
      return [...list].sort((a, b) => b.priceInfo.priceNoCurrency - a.priceInfo.priceNoCurrency)
    default:
      return list
  }
}

interface Props {
  filters: { [key: string]: string }
  products: any[]
}

export const ProductsListFilter = ({ filters, products }: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const handleChange = (event: React.SyntheticEvent, newSelectedTab: number) => {
    setSelectedTab(newSelectedTab)
  }

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange}>
        {!isEmpty(filters) && Object.values(filters).map((value, i) => (
          <Tab label={value} key={i} sx={styles.tab}/>
        ))}
      </Tabs>
      <Divider />
      {!isEmpty(filters) && Object.keys(filters).map((key, i) => (
        selectedTab === i && <ProductsList products={listFilter(products, key)} key={i}/>
      ))}
    </>
  )
}
