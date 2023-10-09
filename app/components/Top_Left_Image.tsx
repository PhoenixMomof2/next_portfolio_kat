import Image from 'next/image'

const Top_Left_Image: React.FC = () => {

  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]">
      <Image src='/top-left-img.png' alt="top-left-img" width={400} height={400} style={{ height: 'auto', width: 'auto'}} opacity-50="true" priority />
    </div>
  )
}

export default Top_Left_Image