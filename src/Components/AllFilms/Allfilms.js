import React from 'react'
import './Listitems.scss'
import './list.scss'
import ListItems from './ListItems'

function AllFilms () {
  return (
      <div className='list'>
          <span className='ListTitles'>TOP FILMS</span>
          <div className="wrapper">
              <ListItems />
              <ListItems />
              <ListItems />
              <ListItems />
              <ListItems />
              <ListItems />
              <ListItems />
              <ListItems />
              <ListItems />
              <ListItems />

              
          </div>

    </div>
  )
}

export default AllFilms
