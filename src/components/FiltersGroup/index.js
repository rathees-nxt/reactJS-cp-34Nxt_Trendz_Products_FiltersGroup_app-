import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategories = () => {
    const {categoryDetails} = props
    return categoryDetails.map(category => {
      const {activeCategoryId, updateCategory} = props
      const onClickCategory = () => updateCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const classNameCategory = isActive
        ? `catagory-name active-catagory`
        : `catagory-name`
      return (
        <li
          key={category.categoryId}
          onClick={onClickCategory}
          className="category-item"
        >
          <p className={classNameCategory}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFilters = () => (
    <div>
      <h1 className="catagory-heading">Category</h1>
      <ul className="catagory-list">{renderCategories()}</ul>
    </div>
  )

  const renderRating = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {activeRatingId, updateRating} = props
      const onClickRating = () => updateRating(rating.ratingId)
      const isActive = rating.ratingId === activeRatingId
      const ratingClass = isActive ? `and-up active-andup` : `and-up`
      return (
        <li
          key={rating.ratingId}
          onClick={onClickRating}
          className="rating-item"
        >
          <img
            className="rating-img"
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
          />
          <p className={ratingClass}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">{renderRating()}</ul>
    </div>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryFilters()}
      {renderRatingFilters()}
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
