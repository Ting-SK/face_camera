import { PartWrapper } from './styles'

export type Props = {
  status: 'none' | 'empty' | 'full'
  emptyBefore?: boolean
  emptyAfter?: boolean
  position: 'top' | 'left' | 'right' | 'bottom'
  debug?: boolean
}

export const PositionIndicatorPart = (props: Props) => {
  const { status, position, emptyBefore, emptyAfter, debug } = props

  return (
    <PartWrapper
      debug={debug}
      position={position}
      emptyBefore={emptyBefore}
      emptyAfter={emptyAfter}
      status={status}
    >
      <svg
        width='405'
        height='405'
        viewBox='0 0 405 405'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          className='start1'
          x='323.129'
          y='72.2647'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(-138 323.129 72.2647)'
          fill='#2CC369'
        />
        <rect
          className='start2'
          x='308.854'
          y='60.369'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(-144 308.854 60.369)'
          fill='#2CC369'
        />
        <rect
          className='start3'
          x='293.415'
          y='50.0305'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(-150 293.415 50.0305)'
          fill='#2CC369'
        />
        <rect
          className='start4'
          x='276.98'
          y='41.3625'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(-156 276.98 41.3625)'
          fill='#2CC369'
        />
        <rect
          className='start5'
          x='259.728'
          y='34.46'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(-162 259.728 34.46)'
          fill='#2CC369'
        />
        <rect
          className=''
          x='241.85'
          y='29.3986'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(-168 241.85 29.3986)'
          fill='#2CC369'
        />
        <rect
          className=''
          x='223.54'
          y='26.2337'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(-174 223.54 26.2337)'
          fill='#2CC369'
        />
        <rect
          className=''
          x='205'
          y='25'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(180 205 25)'
          fill='#2CC369'
        />
        <rect
          className=''
          x='186.432'
          y='25.7111'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(174 186.432 25.7111)'
          fill='#2CC369'
        />
        <rect
          className=''
          x='168.041'
          y='28.359'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(168 168.041 28.359)'
          fill='#2CC369'
        />
        <rect
          className='end5'
          x='150.027'
          y='32.915'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(162 150.027 32.915)'
          fill='#2CC369'
        />
        <rect
          className='end4'
          x='132.588'
          y='39.3289'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(156 132.588 39.3289)'
          fill='#2CC369'
        />
        <rect
          className='end3'
          x='115.915'
          y='47.5305'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(150 115.915 47.5305)'
          fill='#2CC369'
        />
        <rect
          className='end2'
          x='100.191'
          y='57.4301'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(144 100.191 57.4301)'
          fill='#2CC369'
        />
        <rect
          className='end1'
          x='85.5872'
          y='68.919'
          width='5'
          height='25'
          rx='2.5'
          transform='rotate(138 85.5872 68.919)'
          fill='#2CC369'
        />
      </svg>
    </PartWrapper>
  )
}
