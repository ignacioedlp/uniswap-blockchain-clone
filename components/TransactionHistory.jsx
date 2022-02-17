//*Import react
import React, { useEffect, useState, useContext } from 'react'
//*import sanity
import { client } from '../lib/sanityClient'
//*import context
import { TransactionContext } from '../context/TransactionContext'
//*import next components
import Image from 'next/image'
//*import logos
import ethLogo from '../assets/ethCurrency.png'
//*import icons
import { FiArrowUpRight } from 'react-icons/fi'

//*styles
const style = {
  wrapper: ` text-white select-none mx-2  flex-1 py-5 flex items-center justify-center  `,
  txHistoryItem: `bg-[#191a1e] rounded-lg px-4 py-2 my-2  flex items-center justify-center`,
  txDetails: `flex items-center`,
  toAddress: `text-[#f48706] mx-2`,
  txTimestamp: `mx-2`,
  etherscanLink: `flex items-center text-[#2172e5]`,
}

function TransactionHistory() {
  const { isLoading, currentAccount } = useContext(TransactionContext)
  const [transactionHistory, setTransactionHistory] = useState([])

  useEffect(() => {
    ;(async () => {
      if (!isLoading && currentAccount) {
        const query = ` *[_type == "users" && _id == "${currentAccount}"] {
          "transactionList": transactions[] -> {amount, toAddress, timestamp, txHash}|order(timestamp desc)
        }`
        const clientRes = await client.fetch(query)
        setTransactionHistory(clientRes[0].transactionList)
      }
    })()
  }, [isLoading, currentAccount])

  return (
    <div className={style.wrapper}>
      <div>
        {transactionHistory?.map((tx, index) => (
          <div className={style.txHistoryItem} key={index}>
            <div className={style.txDetails}>
              {' '}
              <Image src={ethLogo} height={20} width={20} />
              {tx.amount} sent to{' '}
              <span className={style.toAddress}>
                {tx.toAddress.substring(0, 6)}
              </span>
            </div>{' '}
            on{' '}
            <div className={style.txTimestamp}>
              {new Date(tx.timestamp).toLocaleString()}
            </div>
            <div className={style.etherscanLink}>
              <a
                href={`https://rinkeby.etherscan.io/tx/${tx.txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className={style.etherscanLink}
              >
                View on Etherscan <FiArrowUpRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionHistory
