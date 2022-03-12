import React from 'react'
import './Header.scss'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
  return (
    <div className='header'>
      <h1>K/DA Match</h1>
      <div className='score'>
        <div className='score-turns'><span>Turns:</span>{props.turns}</div>
        <div className='score-reset'><Button onClick={props.reset} className='score-reset-btn'><FontAwesomeIcon icon={faRedo} /></Button></div>
      </div>
      <ul className='nav'>
        <li><a href="https://github.com/im-caelli/kda-match"><FontAwesomeIcon icon={faGithub} /> About</a></li>
        <li><a href="https://twitter.com/im_caelli"><FontAwesomeIcon icon={faTwitter} /> Caelli</a></li>
      </ul>
    </div>
  )
}
