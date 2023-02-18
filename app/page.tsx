import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=' flex justify-center my-9 bg-slate-500 py-5'>
        <div className='px-20 py-5'>
          <h1 className="text-3xl font-bold underline "> Bonjour Panda </h1>
          <p>Learning metaverse and web3</p>
        </div>
        <div>
          <Image className='rounded-full' src='/enspanda.jpg' alt='panda coder' width={100} height={100} ></Image>
        </div>
      </div>
    </>

  )
}
