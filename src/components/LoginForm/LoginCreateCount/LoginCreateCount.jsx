import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import { json, Link } from 'react-router-dom';
import { Container } from './style';
import { useState } from 'react';
import * as yup from "yup"
import logo from "../../../assets/logo.png"
import {useFormik} from "formik"
import { toast } from 'react-toastify';
import { postClient } from '../services';
import { useNavigate } from "react-router-dom"

function LoginCreateCount() {
  const navigate = useNavigate()

  const [nome, setNome] = useState("")

  async function handleCreateClient(e){
    e.preventDefault()
    const response = await fetch("http://localhost:3333/cliente", {
      method: "POST",
      body: JSON.stringify({nome})
    })
  }
  
  const formik = useFormik({
    initialValues:{
      nome: "",
      sobrenome: "",
      email: "",
      contacto: "",
      password: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("o nome é obrigatório"),
      sobrenome: yup.string().required("o sobrenome é obrigatório"),
      email: yup.string().required("o e-mail é obrigatório"),
      contacto: yup.number().required("o contacto é obrigatório"),
      password: yup.string().required("senha é obrigatório"),
    }),
    onSubmit: (data)=> handlePost(data)
  })

  async function handlePost(data){
    try{
      const client = await postClient(data)
      if(client){
        toast.success("Cliente cadastro com sucesso!")
        console.log(client, "Cliente cadastro com sucesso!");
        navigate("/")
      }
    }catch(error){
      toast.error(`${error}`)
    }

  }


  return (
    <Container>
      <Link to='/Login'
          size={22}
      />
      <form onSubmit={handleCreateClient}>
        <legend>
          <span>Criar</span> Conta
        </legend>

          <div>
            <Inputs label='Nome:' type='text'  onChange={(e) => setNome(e.target.value)}/>
            <Inputs label='sobrenome' type='text' />
          </div>

          <div>
            <Inputs label='E-mail' type='email' placeholder={"Email"} onChange={formik.handleChange} id="email" name="email"/>
            <Inputs label='contacto' type='number' placeholder={"Nº Telefone"} onChange={formik.handleChange} id="contacto" name="contacto"/>
          </div>

          <div>
            <Inputs label='Password' type='password' placeholder={"Palavra-passe"} onChange={formik.handleChange} id="password" name="password"/>
            <Inputs label='Informe a senha novamente:' type='password' placeholder={"Confirmar palavra-passe"} />
          </div>

          <Inputs label='data' type='date' />

        <Button text='Cadastrar' type="submit"/>
      </form>
    </Container>
  );

}

export default LoginCreateCount