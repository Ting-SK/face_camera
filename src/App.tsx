import { useCallback } from 'react'
import { Field, Form } from 'react-final-form'
import { Button, Stack } from '@mui/material'
import { CameraSelfie } from './components/CameraSelfie'
import { SelfieIcon } from './assets'
import { required } from './utils/validation'

export const App = () => {
  const onSubmit = useCallback(() => {
    console.log('submit')
  }, [])

  return (
    <Stack
      width='100vw'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name='files.SELFIE_FILE' validate={required}>
              {({ input, meta }: any) => (
                <CameraSelfie
                  label='Selfie'
                  icon={SelfieIcon}
                  width='400px'
                  height='171px'
                  input={input}
                  meta={meta}
                />
              )}
            </Field>
            <Stack
              justifyContent='center'
              alignItems='center'
              width='100%'
              mt={4}
              spacing={2}
            >
              <Button
                variant='contained'
                type='submit'
                sx={{ width: '160px', height: '44px' }}
              >
                Continue
              </Button>
            </Stack>
          </form>
        )}
      />
    </Stack>
  )
}
