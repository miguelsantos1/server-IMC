async function createUser() {
    
    event.preventDefault()
    
    const inputNome = document.querySelector('#nome')
    const inputCPF = document.querySelector('#CPF')
    const inputRendimento = document.querySelector('#rendimento')

    const nome = inputNome.value
    const CPF = inputCPF.value
    const rendimento = inputRendimento.value
  
       try {
           axios.post(`http://localhost:3000/createUser`, {
               nome: nome,
               CPF: CPF,
               rendimento: rendimento
           })

           console.log("criado")
     } catch (err) {

         console.log("erro na api")
         console.log(err)
     }

}