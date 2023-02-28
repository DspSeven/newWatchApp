import {Component} from 'react'
import HeaderPage from '../HeaderPage/header'
import FilterGroup from '../FilterGroup/filter'
import ProductsGroup from '../ProductsGroup/products'
import {Home} from './styledComponents'

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <Home>
          <FilterGroup />
          <ProductsGroup />
        </Home>
      </div>
    )
  }
}
export default HomePage
