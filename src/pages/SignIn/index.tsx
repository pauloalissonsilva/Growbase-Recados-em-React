import React, { useCallback, useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';



import * as Yup from 'yup';

import {FormHandles} from '@unform/core'
import {Form} from '@unform/web'

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background, AnimationContainer } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/Toast';
import { useAuth } from '../../hooks/Auth';


interface SignFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const {signIn} = useAuth();
  const {addToast} = useToast();

  const handleSubmit = useCallback(async (data: SignFormData) => {
    try {
      formRef.current?.setErrors({});
      const shema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória')
      });

      await shema.validate(data,{
        abortEarly: false,
      });
      await signIn({
        email: data.email,
        password: data.password
      });

      history.push('/dashboard')

    } catch (error) {

      if(error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);

        return
      }

      addToast({
        type: 'error',
        title: 'Error',
        description: 'Error ao efetuar login, cheque as credenciais.'
      });

    }
  }, [signIn, addToast, history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt=""/>
          <Form ref={formRef} onSubmit={handleSubmit} >
            <h1>Faça seu logon</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail"/>
            <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esquece minha Senha</a>
          </Form>

          <Link to="/signUp">
            <FiLogIn/>
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background/>
    </Container>
  )
};


