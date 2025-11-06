import './globals.css';

export const metadata = {
  title: 'Passionate Performer',
  description:
    'Cinematic illustration of a young Indian performer on stage under blue concert lights.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
