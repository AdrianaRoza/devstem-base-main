import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gamecard/gamecard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/game.png" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
              image={'league-of-legends.jpg'}
              discount='30%'
              fullPrice='40,90'
              discountPrice= '12,27'
               />

              <SaleCard 
              image={'game4.jpg'}
              discount='50%'
              fullPrice='70,90'
              discountPrice= '35,25'
              />

              <SaleCard 
              image={'valorant.jpg'}
              discount='30%'
              fullPrice='55,60'
              discountPrice= '16,68 '
              />

              <SaleCard 
              image={'game2.jpg'}
              discount='10%'
              fullPrice='80,60'
              discountPrice= '24,18'
              />
              <SaleCard 
              image={'dota-2.jpg'}
              discount='30%'
              fullPrice='90,00'
              discountPrice= '27,00'
              />
              <SaleCard 
              image={'game5.jpg'}
              discount='50%'
              fullPrice='100,00'
              discountPrice= '50,00 '
              />

            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </Container>
        
      </div>
    </>
  )
}
