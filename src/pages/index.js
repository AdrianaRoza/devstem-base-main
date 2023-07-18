import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gamecard/gameCard'

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/game.png" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct}/>
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
              image={'league-of-legends.jpg'}
              discount='30%'
              fullPrice='40,90'
              discountPrice= '12,27'
              onAdd={() =>
                handleAddProduct({
                   name: 'league-of-legends', 
                   price: 40.90,
                   image:'league-of-legends.jpg'
                  })}
              />

              <SaleCard 
              image={'game4.jpg'}
              discount='50%'
              fullPrice='70,90'
              discountPrice= '35,25'
              onAdd={() =>
                handleAddProduct({
                   name: 'Street Fighter ', 
                   price: 70.90,
                   image: 'game4.jpg'
                  })}
              />

              <SaleCard 
              image={'valorant.jpg'}
              discount='30%'
              fullPrice='55,60'
              discountPrice= '16,68 '
              onAdd={() =>
                handleAddProduct({
                   name: 'Valorant ', 
                   price: 55.60,
                   image: 'valorant.jpg'
                  })}
              />

              <SaleCard 
              image={'game2.jpg'}
              discount='10%'
              fullPrice='80,60'
              discountPrice= '24,18'
              onAdd={() =>
                handleAddProduct({
                   name: 'The Legend Of Zelda ', 
                   price: 80.60,
                   image: 'game2.jpg'
                  })}
              />

              <SaleCard 
              image={'dota-2.jpg'}
              discount='30%'
              fullPrice='90,00'
              discountPrice= '27,00'
              onAdd={() =>
                handleAddProduct({
                   name: 'Dota', 
                   price: 90.00,
                   image: 'dota-2.jpg'
                  })}
              />

              <SaleCard 
              image={'game5.jpg'}
              discount='50%'
              fullPrice='100,00'
              discountPrice= '50,00 '
              onAdd={() =>
                handleAddProduct({
                   name: 'Ninja Turtles', 
                   price: 100.00,
                   image: 'game5.jpg'
                  })}
              />

            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard 
               onAdd={() =>
                handleAddProduct({
                   name: 'Counter Strike', 
                   price: 99.90,
                   image: 'counter-strike.jpg'
                  })}
              />
            </div>
          </div>
        </Container>
        
      </div>
    </>
  )
}
