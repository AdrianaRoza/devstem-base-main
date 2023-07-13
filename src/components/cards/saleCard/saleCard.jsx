import Image from 'next/image'

import style from './saleCard.module.css'

export default function SaleCard() {
  return(
    <div className={style.salecard}>
      <Image src='/products/game21.jpg' width={220} height={300} />
      <div>
        <h3>Oferta Exclusiva</h3>
        <div>
          <div>-20%</div>
          <div>
            <p>R$99,90</p>
            <h4>R$89,90</h4>
          </div>
        </div>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  )
}