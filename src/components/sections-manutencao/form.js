"use client"
import { useState } from "react"

export default function Contato() {
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [segundoNome, setSegundoNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(true);
  const [telefone, setTelefone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para manipular os dados do formulário
        console.log('Dados enviados:', primeiroNome, segundoNome, email, telefone, descricao, dataNascimento)
     };
    
    //validação do email
    const handleEmailChange = (event) => {
        const novoEmail = event.target.value;
        const emailValido = validarEmail(novoEmail);
        setEmail(novoEmail);
        setEmailValido(emailValido);
      };
    
    const validarEmail = (email) => {
        // Expressão regular para validar o formato do e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    };

    
    
     //Validação do número de telefone
    const formatarTelefone = (numeroTelefone) => {
        const numeroLimpo = numeroTelefone.replace(/\D/g, ''); // Remove caracteres não numéricos
    
        let telefoneFormatado = '';
        if (numeroLimpo.length === 11) {
          telefoneFormatado = numeroLimpo.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            '($1) $2-$3'
          ); // Formato (XX) XXXXX-XXXX
        } else if (numeroLimpo.length === 10) {
          telefoneFormatado = numeroLimpo.replace(
            /^(\d{2})(\d{4})(\d{4})$/,
            '($1) $2-$3'
          ); // Formato (XX) XXXX-XXXX
        } else {
          telefoneFormatado = numeroLimpo; // Mantém o valor digitado se não estiver completo
        }
    
        return telefoneFormatado;
      };
    
      const handleTelefoneChange = (event) => {
        const numeroTelefone = event.target.value;
        const telefoneFormatado = formatarTelefone(numeroTelefone);
        setTelefone(telefoneFormatado.slice(0, 15));
    };
    //validação do número de telefone termina aqui!
     return (
        <div className="">
          <form className="px-7 my-10 grid justify-center items-center">
            <div className="grid gap-6" id="form">
              <h1 className="text-3xl ">Conecte-se</h1>
            <div className="w-full flex gap-3">
              <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#cbb26a] placeholder:text-black" type="text" placeholder="Nome" id="nome" name="nome" required="" onChange={(event) => setPrimeiroNome(event.target.value)}></input>
              <input className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#cbb26a]" type="text" placeholder="Sobrenome" id="sobrenome" name="Last-Name" onChange={(event) => setSegundoNome(event.target.value)}></input>
           </div>
              <div className="grid gap-6 w-full">
                <input 
                    className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#cbb26a] focus:border-[1px]" type="email"
                    id="email"
                    placeholder="Seu Melhor E-mail"
                    value={email}
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    onChange={handleEmailChange}></input>
                {!emailValido && <p className="text-red-700 text-sm p-3">Por favor, insira um endereço de e-mail válido.</p>}
              </div>
              <div className="flex gap-3">
                <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#cbb26a]" id="telefone"
                    placeholder="Número de Telefone"
                    type="tel"
                    pattern="\(\d{2}\) \d{4,5}-\d{4}"
                    maxLength="15"
                    required
                    value={telefone}
                    onChange={handleTelefoneChange}></input>
              </div>
              <div className="flex gap-3">
              <textarea value={descricao} onChange={(event) => setDescricao(event.target.value)} className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#cbb26a]" placeholder="Descrição" name="descricao" rows="5" cols="50">
                
              </textarea>
              </div>
              
              <button className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#cbb26a] hover:border-solid hover:border-[1px] font-bold" type="submit" onChange={handleSubmit}>Enviar</button>
            </div>
          </form>
        </div>
    
    );
}

