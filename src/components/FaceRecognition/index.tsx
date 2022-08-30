import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { PositionIndicator } from '../PositionIndicator'
import {
  FaceRecognitionService,
  Status,
} from '../../services/FaceRecognitionService'
import { urlToFile } from '../../utils/urlToFile'
import {
  FaceCamera,
  IndicatorContainer,
  PositionWrapper,
  StatusMessage,
} from './styles'

const messages = {
  starting: 'Start web cam',
  loading: 'Loading',
  initializing: 'Initializing',
  failed: 'Web cam failed',
  paused: 'Paused',
  reseted: 'Put your face to circle',
  searchFace: 'Put your face to circle',
  startingFace: 'Put your face to circle',
  holdingFace: 'Keep your face and look at camera',
  trackFacePositions: 'Rotate your head',
  finished: 'Success',
}

export type Props = {
  onFinish?: (files: File[]) => void
}

export const FaceRecognition = (props: Props) => {
  const { onFinish } = props
  const [status, setStatus] = useState<Status | null>(null)
  const [positions, setPositions] = useState<string[]>([])
  const faceRecognitionServiceRef = useRef<FaceRecognitionService | null>(null)

  // @ts-ignore
  // #TODO: remove from production
  const debug = window.debugFaceRecognition ? true : false

  const onConranerRef = useCallback(
    (element: HTMLDivElement) => {
      if (element !== null && faceRecognitionServiceRef.current === null) {
        const faceRecognition = new FaceRecognitionService({
          container: element,
          debug: debug || false,
        })
        faceRecognitionServiceRef.current = faceRecognition
        faceRecognition.on('status', (status: Status) => {
          setStatus(status)
          if (status === 'reseted') {
            setPositions([])
          }
        })
        faceRecognition.on('position', ({ position }: { position: string }) => {
          setPositions((state) => [...state, position])
        })
        faceRecognition.on('finish', async (screenshots: any) => {
          if (onFinish) {
            const files: File[] = []
            for (const position in screenshots) {
              const file = await urlToFile(
                screenshots[position],
                `${position}.jpg`,
                'image/jpeg'
              )
              files.push(file)
            }
            onFinish(files)
          }
          if (faceRecognitionServiceRef.current !== null) {
            faceRecognitionServiceRef.current.destroy()
          }
        })
        faceRecognition.start()
      }
    },
    [onFinish, debug]
  )

  useEffect(() => {
    return () => {
      if (faceRecognitionServiceRef.current !== null) {
        faceRecognitionServiceRef.current.destroy()
      }
    }
  }, [])

  return (
    <Stack
      flexDirection='column'
      alignItems='center'
      sx={{ width: '100%', height: '100vh' }}
    >
      <PositionWrapper>
        <IndicatorContainer>
          <PositionIndicator
            debug={debug}
            active={status === 'trackFacePositions'}
            positions={positions}
          />
        </IndicatorContainer>
        <FaceCamera debug={debug} ref={onConranerRef} />
      </PositionWrapper>
      <Box mt={6}>
        <StatusMessage>{status && messages[status]}</StatusMessage>
      </Box>
    </Stack>
  )
}
