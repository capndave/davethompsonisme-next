import Image from 'next/image'
import { useWindowSize } from '../../../hooks'
import desktopTitle from '../../../assets/titles/desktopTitle.svg'
import mobileTitle from '../../../assets/titles/mobileTitle.svg'
import styles from './styles.module.css'

export function Title() {
  const { windowSize } = useWindowSize()

  const src = windowSize.innerWidth > 550
    ? desktopTitle
    : mobileTitle

    return (
        <h1 className={styles.title}>
            {/* TODO: fix width so it automatically sizes to parent */}
            <Image src={src} alt='Application title image' width={windowSize.innerWidth - 64} />
        </h1>
    )
}