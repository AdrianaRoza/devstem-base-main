import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src= '/game.png' width={50} height={50} />
      <h1 className={styles.name}>DevSteam</h1>
    </div>
  )
}
