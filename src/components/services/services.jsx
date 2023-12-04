import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {


  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,

      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
        whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            unde mollitia cum odio voluptates ex, illo qui non nobis facere
            porro sed adipisci est vitae. Incidunt veritatis quod totam magnam.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            unde mollitia cum odio voluptates ex, illo qui non nobis facere
            porro sed adipisci est vitae. Incidunt veritatis quod totam magnam.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            unde mollitia cum odio voluptates ex, illo qui non nobis facere
            porro sed adipisci est vitae. Incidunt veritatis quod totam magnam.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
