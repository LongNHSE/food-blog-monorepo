import NavigationBar from '../../components/NavigationBar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-gray-50 text-gray-900 font-sans">
      <header className="sticky top-0 z-50 bg-gradient-to-b  from-light-sand to-warm-beige">
        <NavigationBar></NavigationBar>
      </header>
      {children}
    </body>
  );
}
