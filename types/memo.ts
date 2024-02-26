import { type Timestamp } from 'firebase/firestore'

interface Memo {
  id: string
  bodyText: string
  updatedAt: Timestamp
}

export { type Memo }
