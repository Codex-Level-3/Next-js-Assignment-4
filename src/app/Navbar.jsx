import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/profile">User Profile</Link>
      </li>
    </ul>
  );
}
