"use client"
import { useState } from "react"

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(true);
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para manipular os dados do formulário
        console.log('Dados enviados:', nome, email, telefone)
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
        <section id="section3" className="pt-40 pb-24 flex justify-center">
            <form className="form md:w-1/2" onSubmit={handleSubmit}>
                <p className="heading text-blue-500">Teste Grátis</p>
                <input className="input" type="text"
                    id="nome"
                    placeholder="Seu Nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}></input>
                <input 
                    className="input" 
                    type="email"
                    id="email"
                    placeholder="Seu Melhor E-mail"
                    value={email}
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    onChange={handleEmailChange}></input>
                {!emailValido && <p className="text-red-700 text-sm">Por favor, insira um endereço de e-mail válido.</p>}    
                <input 
                    className="input" 
                    id="telefone"
                    placeholder="Número de Telefone"
                    type="tel"
                    pattern="\(\d{2}\) \d{4,5}-\d{4}"
                    maxLength="15"
                    required
                    value={telefone}
                    onChange={handleTelefoneChange}></input>
                <button className="btn">Abrir Dashboard</button>
            </form>
        </section>
    );
}