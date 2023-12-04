import { useRef } from 'react'
import './portfolio.scss'
import {motion, useScroll,useSpring} from 'framer-motion'

const items = [
{
    id :1,
    title : "Carpool",
    img :'https://images.pexels.com/photos/4936294/pexels-photo-4936294.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    descs : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde mollitia cum odio voluptates ex, illo qui non nobis facere porro sed adipisci est vitae. Incidunt veritatis quod totam magnam.'
},
{
    id :2,
    title : "React Commerce",
    img :'https://images.pexels.com/photos/14961202/pexels-photo-14961202/free-photo-of-apples.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    descs : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde mollitia cum odio voluptates ex, illo qui non nobis facere porro sed adipisci est vitae. Incidunt veritatis quod totam magnam.'
},
{
    id :3,
    title : "Node Commerce",
    img :'https://images.pexels.com/photos/19025281/pexels-photo-19025281/free-photo-of-senate-house-in-cambridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    descs : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde mollitia cum odio voluptates ex, illo qui non nobis facere porro sed adipisci est vitae. Incidunt veritatis quod totam magnam.'
},
]

const Single = ({item})=>{
    return ( 
    <div>
        <section>
            {item.title}
        </section>
    </div>
)
}
const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['end end', 'start start']
    })

    const scaleX = useSpring(scrollYProgress,{
        stiffness :100,
        damping : 30
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX}}></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio