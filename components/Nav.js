import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justfy-between items-center py-10">
      <Link href={'/'}>Logo</Link>
      <ul>
        <Link href={'/auth/login'}>
          <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
            Join now
          </a>
        </Link>
      </ul>
    </nav>
  );
}
