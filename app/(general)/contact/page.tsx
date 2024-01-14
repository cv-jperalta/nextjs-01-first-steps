import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'Contact page',
  keywords: ['About page', 'Alicia', 'Miñí'],
};

export default function contactPage() {
  return (
    <>
      <span className="text-7xl">Contact page</span>
    </>
  );
}
