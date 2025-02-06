import { useState } from "react"
import "./Form.css"

function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  async function sendEmail(e ) {
    e.preventDefault()

    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos")
      return
    }

    const data = {
      sender: { name: name, email: email },
      to: [{ email: "", name: "Hiperquímica" }],
      subject: `Contato de ${name} através do site `,
      htmlContent: `
                <html>
                    <body>
                        <h1>Nova mensagem de contato</h1>
                        <p><strong>Nome:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Mensagem:</strong> ${message}</p>
                    </body>
                </html>
            `,
      replyTo: { email: email, name: name },
    }

    try {
      const response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": "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",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert("Mensagem enviada com sucesso!")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        throw new Error("Falha ao enviar a mensagem")
      }
    } catch (error) {
      alert("Erro ao enviar a mensagem: " + (error).message)
    }
  }

  return (
    <div className="cont">
      <h1 className="title">Contato</h1>
      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Form
