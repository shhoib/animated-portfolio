import './cursor.scss'
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Cursor = () => {

    const [position, setposition] = useState({x:0,y:0})

    useEffect(()=>{
        const mouseMove=(e)=>{
            setposition({x:e.clientX,y:e.clientY})
        };

        window.addEventListener('mousemove',mouseMove)

        return()=>{
            window.removeEventListener('mousemove',mouseMove)
        }
    },[])
  return (
    <motion.div className='cursor' animate={{x:position.x-40,y:position.y-40}}></motion.div>
  )
}

export default Cursor