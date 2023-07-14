import style from './button.module.css'

export default function({ children }) {
  return(
    <button className={style.button}>{children}</button>
  )
}