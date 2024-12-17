import React, { useContext, useEffect, useRef, useState } from 'react'
import { Home, Login, Navbar, Player } from './components'
import { Route, Routes } from 'react-router-dom'
import useFetch from './hooks/useFetch'
import { Context } from './Context'


const App = () => {
  const musicRef = useRef(null)
  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    if (state.audio) {
      musicRef.current.src = state.audio.src
      musicRef.current.play()
    } else {
      musicRef.current.src = ""
    }
  }, [state.audio_id])

  useEffect(() => {
    switch (state.action) {
      case "play":
        musicRef.current.play()
        break;
      case "pause":
        musicRef.current.pause()
        break;
    }
  }, [state.action])

  const artists = ["1Xyo4u8uXC1ZmMpatF05PJ", "6qqNVTkY8uBg9cP3Jd7DAH", "774od4b04zDMQMGxrJDeuB", "1HY2Jd0NmPuamShAr6KMms", "0hmUwzWBrPHpGWGrYH05c3", "2ISiyx4DLCMAMBCvPesCoq", "7as5DY4Rz9jac9tgoTrj9H", "3eVa5w3URK5duf6eyVDbu9", "6OTMjaRQ9kxdwoPRYTmyOM", "7dGJo4pcD2V6oG8kP0tJRR", "5VKufGMVAZ6fs111xYNKnU", "00FQb4jTyendYWaN8pK0wa", "4dpARuHxo51G3z768sgnrY", "1ZwdS5xdxEREPySFridCfh", "3YQKmKGau1PzlVlkL1iodx"]

  const token = import.meta.env.VITE_TOKEN;
  const { data, loading, error } = useFetch(`https://api.spotify.com/v1/artists?ids=${artists.join(",")}`, { "Authorization": `Bearer ${token}` })

  useEffect(() => {
    dispatch({ type: "SET_ARTISTS", payload: data?.artists || [] })
  }, [data])
  useEffect(() => {
    musicRef.current.currentTime = state.currentTime
  }, [state.currentTime])
  return (
    <>
      <audio controls ref={musicRef} src={""} className='absolute w-0 h-0 opacity-0'></audio>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Login />} path='/login' />
      </Routes>
      <Player />
    </>
  )
}

export default App