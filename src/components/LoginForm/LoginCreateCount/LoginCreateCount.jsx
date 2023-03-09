import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';
import { Container } from './style';
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


  return (
    <Container>
      <Link to='/Login'>
        <ArrowLeft
          size={22}
        />
      </Link>
      <form onSubmit={formik.handleSubmit}>
        <img src={logo} alt="" />
        <legend>
          <span>Criar</span> Conta
        </legend>

          <div>
            <Inputs label='Nome:' type='text' placeholder={"Primeiro nome"} onChange={formik.handleChange} id="nome" name="nome"/>
            <Inputs label='sobrenome' type='text' placeholder={"sobrenome"} onChange={formik.handleChange} id="sobrenome" name="sobrenome"/>
          </div>

          <div>
            <Inputs label='E-mail' type='email' placeholder={"Email"} onChange={formik.handleChange} id="email" name="email"/>
            <Inputs label='contacto' type='number' placeholder={"Nº Telefone"} onChange={formik.handleChange} id="contacto" name="contacto"/>
          </div>

          <div>
            <Inputs label='Password' type='password' placeholder={"Palavra-passe"} onChange={formik.handleChange} id="password" name="password"/>
            <Inputs label='Informe a senha novamente:' type='password' placeholder={"Confirmar palavra-passe"} />
          </div>

          {/* <Inputs label='data' type='date' /> */}
          {/* <input type="submit" value={"facilita"} /> */}
        <Button text='Cadastrar' type={"submit"}/>
      </form>
    </Container>
  );

}

export default LoginCreateCount;