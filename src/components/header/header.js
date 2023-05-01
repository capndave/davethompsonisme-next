'use client'

import { Navbar } from './navbar'
// import DesktopTitle from '../../assets/titles/desktopTitle.svg'
// import MobileTitle from '../../../assets/titles/mobileTitle.svg'
import useWindowSize from '../../hooks/useWindowSize'
// TODO: fix title animation, previously - import title from '../../mixins/animateTitle'
import './header.css'
import './title.css'

export const Header = (props) => {
  const { windowSize } = useWindowSize()

  /* Get title based on width of viewport */
//   const titleToUse = windowSize.innerWidth > 550
//     ? <DesktopTitle className={'titleImage visible'} />
//     : <MobileTitle className={'titleImage visible'} />
  const titleToUse = 'TITLE'

  return (
		<header id='header'>
			<h1 id='title'>
				{titleToUse}
			</h1>
			<Navbar
				// visible={props.visible}
				visible={true}
				fadeIn={props.fadeIn}
			/>
		</header>
  )
}
