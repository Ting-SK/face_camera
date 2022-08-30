import {
  PositionIndicatorPart,
  Props as PartProps,
} from './PositionIndicatorPart'
import { MainWrapper } from './styles'

export type Props = {
  positions: string[]
  active?: boolean
  debug?: boolean
}

const positionSiblings = {
  top: ['left', 'right'],
  right: ['top', 'bottom'],
  bottom: ['right', 'left'],
  left: ['bottom', 'top'],
}

const getPartProps = (
  active: boolean | undefined,
  position: PartProps['position'],
  positions: Props['positions']
): PartProps => {
  const result: PartProps = {
    position,
    status: 'none',
    emptyBefore: true,
    emptyAfter: true,
  }
  if (active) {
    result.status = 'empty'
    result.emptyBefore = true
    result.emptyAfter = true
    if (positions.includes(position)) {
      result.status = 'full'
      if (position in positionSiblings) {
        if (positions.includes(positionSiblings[position][0])) {
          result.emptyBefore = false
        }
        if (positions.includes(positionSiblings[position][1])) {
          result.emptyAfter = false
        }
      }
    }
  }

  return result
}

export const PositionIndicator = (props: Props) => {
  const { active, positions, debug = false } = props

  return (
    <MainWrapper>
      <PositionIndicatorPart
        debug={debug}
        {...getPartProps(active, 'top', positions)}
      />
      <PositionIndicatorPart
        debug={debug}
        {...getPartProps(active, 'right', positions)}
      />
      <PositionIndicatorPart
        debug={debug}
        {...getPartProps(active, 'bottom', positions)}
      />
      <PositionIndicatorPart
        debug={debug}
        {...getPartProps(active, 'left', positions)}
      />
    </MainWrapper>
  )
}
