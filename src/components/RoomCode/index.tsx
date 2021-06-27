import copyImg from '../../assets/images/copy.svg'
import './style.scss'

type RoomCodeprops = {
  code: string;
}

export function RoomCode (props: RoomCodeprops) {
  function copyRoomCodeToClipboard () {
    navigator.clipboard.writeText(props.code)
  }
  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}
