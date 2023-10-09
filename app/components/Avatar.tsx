import Image from "next/image"
import phoenix from "../../public/phoenix.png"

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={phoenix} alt="phoenix-avatar"width={500} height={500} className="translate-z-0 w-full h-full"/>
    </div>
  )
}

export default Avatar