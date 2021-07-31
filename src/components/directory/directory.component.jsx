import React, { useContext } from 'react'

import MenuItem from '../menu-item/menu-item.component'
import DirectoryItemsContext from '../../contexts/directory/directory.context'

import './directory.styles.scss'

const Directory = () => {
  const { sections } = useContext(DirectoryItemsContext)

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory
