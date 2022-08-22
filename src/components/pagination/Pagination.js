import React from 'react'

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
  const pageNumbers = []

  for(let i = 1; i <=Math.ceil(totalItems/itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <button key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </button>
        ))}
        </ul>       
    </nav>
  )
}

export default Pagination