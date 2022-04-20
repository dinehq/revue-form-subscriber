import { revueFromSubscriptionSubmit } from '../src'

const submitButton = document.getElementById('submit')

submitButton?.addEventListener('click', () => {
  revueFromSubscriptionSubmit({
    profileId: 'limichange2',
    memberEmail: 'limichange@hotmail.com',
  })
})
