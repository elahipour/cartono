import "./globals.css";



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/carl.svg" sizes="any" />
      </head>
      <body cz-shortcut-listen="false" className="bg-[#dddfff] ">
        {children}
      </body>
      
    </html>
  );
}
