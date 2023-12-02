import "./Sidebar.scss";
import Links from "./links/links";
import ToggleButton from "./togglebutton/toggleButton";
import { useState } from "react";
import {motion} from 'framer-motion'

const Sidebar = () => {

    const[open, setOpen] = useState(false)

    const variants = {
        open : {
            clipPath: 'circle(1200 at 50px 50px)',
            transition:{
                type : 'string',
                stiffness : 20,
            }
        },
        closed : {
            clipPath : 'circle(30px at 50px 50px)',
            transition : {
                delay : 0.5,
                type:'spring',
                stiffness : 400,
                damping : 40,
            }
        }
    }
  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  );
};

export default Sidebar;
