import React from 'react'

const Header = (props) => {

  const {search,OnInputChange,onSearchClick} = props

    return (
        <div>
            <div className="jumbotron">
       <h1 className="display-4"> <span className="material-icons brand-icon">
menu_book
</span> Food Menu Search!</h1>

<div class="input-group w-50 mx-auto">
  <input type="text" class="form-control" 
  placeholder="Search Your Recipi" 
   value={search}
   onChange = {OnInputChange} />
  <div class="input-group-append" >
    <button type='button' className="btn btn-dark" onClick = {onSearchClick}>Search here</button>
  </div>
</div>



            </div>
        </div>
    )
}

export default Header
