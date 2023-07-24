import './globals.css'
import NavBar from '@/components/navbar/navBar'
import { Alice } from 'next/font/google'

export const metadata = {
  title: 'Só-Atos',
  description: "Só-Atos - Automação de Processos Industriais",
}

const alice = Alice({
  subsets: ["latin"],
  weight: "400",  
})

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br" className={alice.className}>
      <body className="">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
