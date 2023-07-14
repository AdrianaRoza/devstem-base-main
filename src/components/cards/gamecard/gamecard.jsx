import Image from 'next/image'

import styles from './gamecard.module.css'

import  Button from '@/components/form/button/button'

export default function GameCard() {
  return(
    <div className={styles.gamecard}>
      <Image src='/products/counter-strike.jpg' width={300} height={145}/>
      <div className={styles.info}>
        <h3 className={styles.title}>Counter Strike: Global offensive</h3>
        <p className={styles.category}>Ação, Estratégia, Multijogador.</p>
        <div className={styles.pricing}>
          <h2 className={styles.price}>R$99,90</h2>
          <Button>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  )
}