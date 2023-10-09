import Image from 'next/image'
import top_left from '../../public/top-left-img.png'

const Top_Left_Image: React.FC = () => {

  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]">
      <Image 
      src={top_left} alt="top-left-img" width={800} height={800} style={{ height: 'auto', width: 'auto'}} opacity-50="true" priority />
    </div>
  )
}

export default Top_Left_Image