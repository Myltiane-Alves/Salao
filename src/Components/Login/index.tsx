import { useRef  } from 'react';
import * as Yup from 'yup';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { useAuth } from '../../Hooks/auth';
import 
{
    Container,
    Title,
    Button
}
 from './styled';
import Input from '../Input';

interface InputProps {
    name: string;
    email: string;
}

const SignIn: React.FC = () => {
 
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = data => {
        console.log(formRef)
    };

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