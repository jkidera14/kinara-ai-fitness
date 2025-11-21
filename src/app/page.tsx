"use client";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      HomePage
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      </div>
  )
}
export default HomePage;