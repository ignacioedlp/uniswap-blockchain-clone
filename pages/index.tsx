
import Head from 'next/head'

import {Header, Main, TransactionHistory, Adver} from '../components/index.js'

const style = {
  wrapper: ` bg-[#2D242F] text-white select-none flex flex-col justify-between md:items-center container md:h-full md:w-full md:mx-auto`,
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uniswap clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.wrapper}>
        <Adver/>
        <Header/>
        <Main />
        <TransactionHistory/>
      </main>
    <div>
  )
}
