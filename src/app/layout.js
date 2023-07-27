import './globals.css'
import NavBar from '@/components/navbar/navBar'
import { Noto_Serif_JP } from 'next/font/google'

export const metadata = {
  title: 'Só-Atos',
  description: "Só-Atos - Automação de Processos Industriais",
}

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: "300",  
})



export default function RootLayout({ children }) {

  return (
    <html lang="pt-br" className={notoSerifJp.className}>
      <body className="">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
