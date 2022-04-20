import { expect, vi } from 'vitest'

import { revueFromSubscriptionSubmit } from '../src'

test('revueFromSubscriptionSubmit normal', () => {
  revueFromSubscriptionSubmit({
    profileId: 'test',
    memberEmail: 'test@name.com',
    memberFirstName: 'test',
    memberLastName: 'test',
  })

  expect(true).toBe(true)
})

test('revueFromSubscriptionSubmit params error', () => {
  const mock = vi.fn()

  try {
    revueFromSubscriptionSubmit({
      profileId: 'test',
      memberEmail: '',
    })
  } catch (e) {
    mock()
  }

  try {
    revueFromSubscriptionSubmit({
      profileId: '',
      memberEmail: 'test',
    })
  } catch (e) {
    mock()
  }

  // call twice
  expect(mock).toBeCalledTimes(2)
})
