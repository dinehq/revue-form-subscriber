# Revue Form Subscriber

[![CI](https://github.com/dinehq/revue-form-subscriber/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/dinehq/revue-form-subscriber/actions/workflows/ci.yml)

## Install

```
npm install @dinehq/revue-form-subscriber
```

```
yarn add @dinehq/revue-form-subscriber
```

```
pnpm add @dinehq/revue-form-subscriber
```

## Usage

```js
import { revueFormSubscriber } from '@dinehq/revue-form-subscriber'

revueFromSubscriptionSubmit({
  profileId: 'test',
  memberEmail: 'test@name.com',
  memberFirstName: 'memberFirstName',
  memberLastName: 'memberLastName',
})
```

## Refs

https://stackoverflow.com/questions/13001830/creating-and-submitting-a-form-with-javascript
