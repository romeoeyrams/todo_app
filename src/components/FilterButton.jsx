import React from 'react'

function FilterButton() {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show</span>
            <span>All</span>
            <span className="visually-hidden">Tasks</span>
        </button>
    )
}

export default FilterButton
