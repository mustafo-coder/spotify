import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LanaMusic } from '../assets'

const Card = ({card, circle}) => {
  const musicRef = useRef(null)
  const [play, setPlay] = useState(false)
  useEffect(() => {
    if(play){
      document.querySelectorAll("audio").forEach(a => a.pause())
      musicRef.current.play()
    }else{
      musicRef.current.pause()
    }
  }, [play])
  return (
    <div className='w-full card relative text-white hover:bg-gradient-to-t mt-2 p-3 rounded-lg from-[#2d2d2d] to-transparent'>
      <button onClick={() => setPlay(!play)} className={`bg-[#1ED760] hover:bg-[#3BE477] hover:!scale-[105%] transform card-play w-12 rounded-full text-lg absolute top-1/2 end-4 h-12 justify-center items-center ${play ? "flex" : "hidden"}`}>
        {play ? <i className='fa fa-pause text-xl text-black'></i> : <i className='fa fa-play text-black'></i>}
      </button>
      <audio controls ref={musicRef} src={LanaMusic}  className='absolute w-0 h-0 opacity-0'></audio>
      <Link to={"/"} className={`w-full overflow-hidden`}>
        <img className={`aspect-square ${circle ? "rounded-full" : "rounded-lg"} shadow-xl shadow-[#00000050] w-full object-cover`} src={card.image} alt={card.title} />
      </Link>
      <Link to={'/'} className='font-semibold mt-2 block hover:underline'>
        {card.title}
      </Link> 
      <p className='text-gray-400 text-sm'>{card.artist}</p>
    </div>
  )
}

export default Card