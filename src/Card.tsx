import type { FC } from 'react'
import { FaEllipsisVertical, FaRegMessage, FaRegHeart, FaRegBookmark } from 'react-icons/fa6'

const Card: FC = () => {
  return (
    <article className='card'>
      <header className='card_header'>
        <div>
          <img src='/assets/images/avatar.png' alt='developer' />
          <div className='header_info'>
            <p>Developer</p>
            <p>@holajuniors</p>
          </div>
        </div>
        <FaEllipsisVertical />
      </header>
      <img src='/assets/images/laptop.jpg' alt='background' className='card_image' />
      <p className='card_info'>
        Estos desafíos han sido creado especialmente para mejorar tus habilidades y prepararte para el mundo real.
      </p>
      <hr />
      <footer className='card_footer'>
        <span>
          <FaRegMessage className='icon_message' />
          29
        </span>
        <span>
          <FaRegHeart className='icon_heart' />
          3459
        </span>
        <FaRegBookmark className='icon_bookmark' />
      </footer>
    </article>
  )
}

export default Card
