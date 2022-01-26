import { FormEvent, useCallback, useContext, useRef, useState  } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Title, Button } from './styled';
import Input from '../Input';
import { AuthContext } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationError';

interface SignFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const { signIn } = useContext(AuthContext);   
    const history = useHistory();

    const formRef = useRef<FormHandles>(null);  


    const handleSubmit = useCallback(
        async (data: SignFormData): Promise<void> => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                  email: Yup.string()
                    .required('Email obrigatório')
                    .email('Digite um e-mail válido'),
                  password: Yup.string().required('A senha deve ser preenchida'),
                });
        
                await schema.validate(data, {
                  abortEarly: false,
                });
        
                await signIn({ email: data.email, password: data.password });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
          
                    formRef.current?.setErrors(errors);
            
                }
            }    
        },
        [signIn, history]
    );
        
        
    
    return(
        <>
          <Container>
              <Form ref={formRef} onSubmit={handleSubmit}>
                  <Title>Entrar</Title>

                  <Input
                    name="email" 
                    type="email"
                    placeholder="E-mail"
                    required               
                  />

                  <Input            
                    name="password"
                    type="password"
                    placeholder="Senha"
                    required             
                  />

                  <Button type="submit"> Accesar</Button>
              </Form>
          </Container>  
        </>
    )
}

export default SignIn;