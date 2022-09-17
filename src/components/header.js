import style from '../styles/header.module.scss'
import Image from 'next/image'

const Header = () => {
  
  return(
  <>
  <div className={style.container}>
<div className={style.container2}>



    <header className={style.header}>
      <div className={style.logo}>
    <Image src={"/logo.png"} width={350} height={150} alt="topへ" />
      </div>
    <div className={style.title}>
    <h1>仙台NEXT水族館</h1>
      </div>
      </header> 
       </div></div>
      </>  
      )
}

export default Header;