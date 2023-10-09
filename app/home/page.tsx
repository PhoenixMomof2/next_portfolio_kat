import Image from 'next/image'
import ParticlesContainer from '../components/ParticlesContainer'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <ParticlesContainer />
      <h1>Home</h1>
    </div>
  )
}

export default Home