import { PropsWithChildren } from 'react'
import styles from './label.module.css'

interface LabelProps {
    text: string,
}

function Label ({ text, children } : PropsWithChildren<LabelProps>) {
  return (
		<label>
			<div className={styles.labelText}>{text}</div>
			{children}
		</label>
  )
}

export default Label