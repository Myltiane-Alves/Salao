import { useState } from 'react';
import { useAuth } from '../../Hooks/auth';
import 
{
    Container,
    Form,
    Title,
    Input,
    Button
}
 from './styled';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { signIn  } = useAuth();

    return(
        <>
          <Container>
              <Form onSubmit={() => signIn(email, password)}>
                  <Title>Entrar</Title>

                  <Input 
                    type="email"
                    placeholder="E-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Input 
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Button type="submit"> Accesar</Button>
              </Form>
          </Container>  
        </>
    )
}

export default SignIn;