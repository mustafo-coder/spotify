import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'

const Player = () => {
  const { state, dispatch } = useContext(Context)
  const [data, setData] = useState(null)
  const [playerTime, setPlayerTime] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const artist = state.artists.find((a, i) => a.id == state.audio.id);
    if (artist) {
      setData(artist)
    }
    setPlayerTime(0)
    state.musics.map((m, i) => {
      if(m.id == state?.audio?.id){
        setCount(i)
      }
    })
  }, [state.audio_id])

  const playHandler = () => {
    if (state.audio) {
      dispatch({ type: "SET_ACTION", payload: "play" })
    }
  }
  const pauseHandler = () => {
    if (state.audio) {
      dispatch({ type: "SET_ACTION", payload: "pause" })
    }
  }
  const setAudio = (c) => {
    dispatch({ type: "SET_AUDIO", payload: { audio: state.musics[c], id: state.musics[c].id } })
  }

  const nextHandler = () => {
    if (count >= state.musics.length - 1) {
      setCount(0)
    } else {
      setCount(prev => prev += 1)
    }
    setAudio(count + 1)
  }
  const prevHandler = () => {
    if (count < 1) {
      setCount(state.musics.length - 1)
    } else {
      setCount(prev => prev -= 1)
    }
    setAudio(count - 1)
  }
  const getTime = (time) => {
    const minute = time / 60 | 0
    const second = time - (minute * 60)
    return `${minute}:${second}`
  }
  useEffect(() => {
    dispatch({ type: "SET_CURRENTTIME", payload: playerTime })
  }, [playerTime])
  return (
    <div className='fixed flex justify-between px-5 bottom-0 start-0 end-0 bg-black py-5'>
      <div className='flex gap-4 items-center'>
        {data?.images[0] ?
          <img src={data.images[0].url} className='w-14 rounded h-14 object-contain' alt="" />
          :
          <img src={"https://img.freepik.com/free-vector/profile-music-notes-background_23-2147492175.jpg"} className='w-14 rounded h-14 object-contain' alt="" />
        }
        <div className='flex gap-4 items-center'>
          <div className='text-white font-semibold'>
            <h3 className='text-[13px]'>{state.audio?.title}</h3>
            <p className='font-normal text-[11px] text-gray-400'>{data?.name}</p>
          </div>
          <button className='w-5 h-5 rounded-full border-2 border-[#b3b3b3] text-[#b3b3b3] text-[11px] pt-0.5 flex items-center justify-center'>
            <i className='fa fa-plus'></i>
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <div className='flex gap-7 text-white text-xl'>
          <button className='text-[#b3b3b3]'>
            <i className='fa fa-shuffle'></i>
          </button>
          <button onClick={prevHandler} className='text-[#b3b3b3]'>
            <i className='fa fa-backward-step'></i>
          </button>
          {state.action == "pause" ?
            <button className='text-4xl' onClick={playHandler}>
              <i className='fa fa-circle-play'></i>
            </button>
            :
            <button className='text-4xl' onClick={pauseHandler}>
              <i className='fa fa-circle-pause'></i>
            </button>
          }
          <button onClick={nextHandler} className='text-[#b3b3b3]'>
            <i className='fa fa-forward-step'></i>
          </button>
          <button className='text-[#b3b3b3]'>
            <i className='fa fa-repeat'></i>
          </button>
        </div>
        <div className='text-[#b3b3b3] flex gap-2 text-[12px] items-center'>
          <p>0:00</p>
          <input onChange={e => setPlayerTime(e.target.value)} type="range" className="player w-[400px] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" min={0} value={playerTime} max={state.audio?.time || 100} />
          <p>{state.audio && getTime(state.audio.time)}</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Player