import './Capacitor.scss'

const Capacitor = ({btnName, name, img} : any) => {
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