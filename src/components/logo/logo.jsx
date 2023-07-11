import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src= '/video-game.gif' width={60} height={60} />
      <h1>DevSteam</h1>
    </div>
  )
}
