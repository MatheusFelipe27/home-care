import './Capacitor.scss'

interface CapacitorProps {
  btnName: String,
  name: String,
  img: String
}

const Capacitor = ({btnName, name, img} : CapacitorProps) => {
  return (
    <>
        <div className= {img==="research"? 'cardResearch' : 'cardFruit'}>
            <button>{btnName}</button>
            <span>{name}</span>
        </div>
    </>
  )
}

export default Capacitor