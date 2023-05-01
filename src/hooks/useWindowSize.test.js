import { renderHook } from '@testing-library/react'
import useWindowSize from '../hooks/useWindowSize'

it('provides screen dimensions if window is loaded', async () => {
  const { result } = renderHook(() => useWindowSize())
  expect(result.current.windowSize).toBeTruthy()
})
