import Link from "../components/Link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>?? light(s) are on.</p>
      <p>
        <Link href="/rooms">All rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
