
const ToggleButton = ({setOpen}) => {
  const aa = ()=>{
    console.log('changed');
    setOpen((prev)=> !prev)
  }
  return (

    <button onClick={aa}>ToggleButton</button>
  )
}

export default ToggleButton