import './globals.css';

export const metadata = {
  title: 'Online Book',
  description: 'Book Reading Web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}