import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Exibir: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      Todas
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Ativas
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completas
    </FilterLink>
  </div>
)

export default Footer
