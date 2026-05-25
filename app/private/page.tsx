export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivatePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Private Content</h1>
      <p className="mt-4">This page is disallowed in llms.txt and marked `noindex`.</p>
    </main>
  );
}
