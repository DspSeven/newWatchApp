import {Component} from 'react'
import HeaderPage from '../HeaderPage/header'
import FilterGroup from '../FilterGroup/filter'
import ProductsGroup from '../ProductsGroup/products'
import {CombineContainer} from './styledComponents'

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <CombineContainer>
          <FilterGroup />
          <ProductsGroup />
        </CombineContainer>
      </div>
    )
  }
}
export default HomePage
