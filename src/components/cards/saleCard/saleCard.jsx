import Image from 'next/image'

import style from './saleCard.module.css'
import  Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice,discountPrice} ) {
  return(
    <div className={style.salecard}>
      <Image src={`/products/${image}`} alt={`Produto ${image}`} width={220} height={300} />
      <div className={style.info}>
        <h3 className={style.title}>Oferta Exclusiva</h3>
        <div className={style.pricecard}>
          <div className={style.percent}>-{discount}</div>
          <div className={style.price}>
            <p className={style.fullprice}>{fullPrice}</p>
            <h4 className={style.discountprice}>{discountPrice}</h4>
          </div>
        </div>
        <Button fullwidth>Adicionar ao carrinho</Button>
      </div>
    </div>
  )
}

SaleCard.defaultProps = {
  image: 'league-of-legends.jpg',
  discount:'90%',
  fullPrice:'199,90',
  discountPrice: '99,00',
}