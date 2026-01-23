import './App.css'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
} from '@clerk/clerk-react'

function App() {
  return (
    <>
      <h1>Welcome to Meetronyx</h1>

      <SignedOut>
        <SignInButton mode="modal">
          <button >Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
        <UserButton />
      </SignedIn>
    </>
  )
}

export default App
