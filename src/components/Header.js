import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Header(props) {
  return (
    <div className='header'>
      <h1>K/DA Match</h1>
      <div className='score'><span>{props.turns}</span></div>
      <ul className='nav'>
        <li><a href="https://github.com/im-caelli/kda-match"><FontAwesomeIcon icon={faGithub} /> About</a></li>
        <li><a href="https://twitter.com/im_caelli"><FontAwesomeIcon icon={faTwitter} /> Caelli</a></li>
      </ul>
    </div>
  )
}
