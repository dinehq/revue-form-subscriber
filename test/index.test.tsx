import { expect, vi } from 'vitest'

import { revueFromSubscriptionSubmit } from '../src'

test('revueFromSubscriptionSubmit normal', () => {
  revueFromSubscriptionSubmit({
    profileId: 'test',
    memberEmail: 'test@name.com',
  })

  expect(true).toBe(true)
})

test('revueFromSubscriptionSubmit params error', () => {
  const mock = vi.fn()

  try {
    revueFromSubscriptionSubmit({
      profileId: '',
      memberEmail: '',
    })
  } catch (e) {
    mock()
  }

  expect(mock).toBeCalled()
})
