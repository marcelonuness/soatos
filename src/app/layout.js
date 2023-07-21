import './globals.css'
import NavBar from '@/components/navbar/navBar'



export const metadata = {
  title: 'Só-Atos',
  description: "Só-Atos - Automação de Processos Industriais",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
