import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import { json, Link } from 'react-router-dom';
import { Container } from './style';
<<<<<<< HEAD
import { useState } from 'react';

function LoginCreateCount() {
  const [nome, setNome] = useState("")

  async function handleCreateClient(e){
    e.preventDefault()
    const response = await fetch("http://localhost:3333/cliente", {
      method: "POST",
      body: JSON.stringify({nome})
    })
  }

=======
import * as yup from "yup"
import logo from "../../../assets/logo.png"
import {useFormik} from "formik"
import { toast } from 'react-toastify';
import { postClient } from '../services';
import { useNavigate } from "react-router-dom"

function LoginCreateCount() {
  const navigate = useNavigate()
  
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
      toast.error(error?.response?.data?.message)
    }

  }


>>>>>>> f86d449f06c794349470dd622e3289c1787676a7
  return (
    <Container>
      <Link to='/Login'
          size={22}
<<<<<<< HEAD
      />
      <form onSubmit={handleCreateClient}>
=======
        />
      </Link>
      <form onSubmit={formik.handleSubmit}>
        <img src={logo} alt="" />
>>>>>>> f86d449f06c794349470dd622e3289c1787676a7
        <legend>
          <span>Criar</span> Conta
        </legend>

          <div>
<<<<<<< HEAD
            <Inputs label='Nome:' type='text'  onChange={(e) => setNome(e.target.value)}/>
            <Inputs label='sobrenome' type='text' />
=======
            <Inputs label='Nome:' type='text' placeholder={"Primeiro nome"} onChange={formik.handleChange} id="nome" name="nome"/>
            <Inputs label='sobrenome' type='text' placeholder={"sobrenome"} onChange={formik.handleChange} id="sobrenome" name="sobrenome"/>
>>>>>>> f86d449f06c794349470dd622e3289c1787676a7
          </div>

          <div>
            <Inputs label='E-mail' type='email' placeholder={"Email"} onChange={formik.handleChange} id="email" name="email"/>
            <Inputs label='contacto' type='number' placeholder={"Nº Telefone"} onChange={formik.handleChange} id="contacto" name="contacto"/>
          </div>

          <div>
            <Inputs label='Password' type='password' placeholder={"Palavra-passe"} onChange={formik.handleChange} id="password" name="password"/>
            <Inputs label='Informe a senha novamente:' type='password' placeholder={"Confirmar palavra-passe"} />
          </div>

<<<<<<< HEAD
          <Inputs label='data' type='date' />

        <Button text='Cadastrar' type="submit"/>
=======
          {/* <Inputs label='data' type='date' /> */}
          {/* <input type="submit" value={"facilita"} /> */}
        <Button text='Cadastrar' type={"submit"}/>
>>>>>>> f86d449f06c794349470dd622e3289c1787676a7
      </form>
    </Container>
  );

}

export default LoginCreateCount;