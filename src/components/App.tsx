import { Web3Button } from '@web3modal/react'
import Germany from 'public/svg/flag-icons/de.svg'
import France from 'public/svg/flag-icons/fr.svg'
import { FC } from 'react'
import { useAccount } from 'wagmi'
import Countdown from './Countdown'

import Flags from './Flags'

const App: FC = () => {
  const { isConnected } = useAccount()

  return (
    <div className='flex h-screen items-center justify-center bg-primary-900'>
      {isConnected ? (
        <div>
          <Countdown />
          <Flags Left={Germany} Right={France} />
        </div>
      ) : (
        <Web3Button />
      )}
    </div>
  )
}
export default App