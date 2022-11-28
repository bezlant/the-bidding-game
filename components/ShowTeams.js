import leftFlag from '../public/japan.png'
import rightFlag from '../public/germany.png'
import Image from 'next/image'
import PoolSizeBar from './PoolSizeBar'

export default function ShowTeams({
  setTeam,
  setIsTeamChosen,
  team,
  leftPool,
  rightPool,
}) {
  return (
    <div className="mt-10 mb-8 flex max-w-screen-md flex-col flex-wrap items-center justify-center">
      <div className="flex flex-row">
        <div
          onClick={() => {
            setTeam('left')
            setIsTeamChosen(true)
          }}
          className={'mr-3 flex-1'}
        >
          <Image
            alt="Japanese flag"
            src={leftFlag}
            priority={true}
            width={159.5}
            height={107}
            className={`h-full w-full rounded-xl border-2 border-blue-200 opacity-95 hover:border-2 hover:border-blue-400 hover:opacity-100 ${
              team === 'right' ? 'grayscale hover:grayscale-0' : 'border-1'
            }`}
            quality={100}
          />
        </div>
        <div
          onClick={() => {
            setTeam('right')
            setIsTeamChosen(true)
          }}
          className={'ml-3 flex-1'}
        >
          <Image
            alt="German flag"
            src={rightFlag}
            priority={true}
            width={159.5}
            height={107}
            className={`h-full w-full rounded-xl border-2 border-blue-200 opacity-95 hover:border-2  hover:border-blue-400 hover:opacity-100  ${
              team === 'left' ? 'grayscale hover:grayscale-0' : 'border-1'
            }`}
            quality={100}
          />
        </div>
      </div>
      <PoolSizeBar leftPool={leftPool} rightPool={rightPool} />
    </div>
  )
}
