import { FormEvent, useCallback, useContext, useRef, useState  } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import 
{
    Container,
    Title,
    Button
}
 from './styled';
import Input from '../Input';
import { AuthContext } from '../../Context/AuthContext';

interface FormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassaword] = useState('');
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useContext(AuthContext);

    async function handleSubmit(event: FormEvent) {
        
        const data = {
            email,
            password
        }
        await signIn(data);
        console.log(signIn)
    }
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
                    value={email} onChange={e => setEmail(e.target.value)}
                  />

                  <Input 
               
                    name="password"
                    type="password"
                    placeholder="Senha"
                    required
                    value={password} onChange={e => setPassaword(e.target.value)}
                  />

                  <Button type="submit"> Accesar</Button>
              </Form>
          </Container>  
        </>
    )
}

export default SignIn;