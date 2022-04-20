// https://www.getrevue.co/app/integrations/forms
// <div id="revue-embed">
//     <form action="https://www.getrevue.co/profile/limichange2/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
//     <div class="revue-form-group">
//       <label for="member_email">Email address</label>
//       <input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email">
//     </div>
//     <div class="revue-form-group">
//       <label for="member_first_name">First name <span class="optional">(Optional)</span></label>
//       <input class="revue-form-field" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name">
//     </div>
//     <div class="revue-form-group">
//       <label for="member_last_name">Last name <span class="optional">(Optional)</span></label>
//       <input class="revue-form-field" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name">
//     </div>
//     <div class="revue-form-actions">
//       <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
//     </div>
//     <div class="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
//   </form>
// </div>

interface RevueFromSubscriptionConfig {
  profileId?: string
  customUrl?: string
  memberEmail: string
  memberFirstName?: string
  memberLastName?: string
}

export function revueFromSubscriptionSubmit(revueFromSubscriptionConfig: RevueFromSubscriptionConfig) {
  const { profileId, customUrl, memberEmail, memberFirstName, memberLastName } = revueFromSubscriptionConfig

  if (!profileId && !customUrl) {
    throw new Error('profileId or customUrl is required')
  } else if (!memberEmail) {
    throw new Error('memberEmail is required')
  }

  const form = document.createElement('form')
  form.action = customUrl || `https://www.getrevue.co/profile/${profileId}/add_subscriber`
  form.method = 'post'
  form.id = 'revue-form'
  form.name = 'revue-form'
  form.target = '_blank'
  form.style.display = 'none'

  const emailInput = document.createElement('input')
  emailInput.type = 'email'
  emailInput.name = 'member[email]'
  emailInput.value = memberEmail
  form.appendChild(emailInput)

  if (memberFirstName) {
    const firstNameInput = document.createElement('input')
    firstNameInput.type = 'text'
    firstNameInput.name = 'member[first_name]'
    firstNameInput.value = memberFirstName
    form.appendChild(firstNameInput)
  }

  if (memberLastName) {
    const lastNameInput = document.createElement('input')
    lastNameInput.type = 'text'
    lastNameInput.name = 'member[last_name]'
    lastNameInput.value = memberLastName
    form.appendChild(lastNameInput)
  }

  document.body.appendChild(form)

  form.submit()

  document.body.removeChild(form)
}

export default revueFromSubscriptionSubmit
