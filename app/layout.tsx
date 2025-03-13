import "@/styles/globals.css";
export const metadata = {
  title: "GenZ Bank",
  description: "GenZ Bank is an Modern Banking Landing Page Sample By LahiruZam",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
