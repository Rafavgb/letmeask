import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home(){
    const history = useHistory();


    function handleCreateRoom(){
       
        history.push('./rooms/new');
    }
    return(
        <div id="page-auth">
            <aside>
             <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
             <strong>Crie salas de Q&A ao-vivo</strong>
             <p>Tire as dúvidas da sua audieência em tempo real </p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg}  alt="Letmeask"/>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                       <input
                       type="text" 
                       placeholder="Digite o código da sala"
                       />
                       <Button
                       type="submit">
                           Entrar na sala
                           </Button> 
                    </form>
                </div>
            </main>
        </div>
    )
}