import './App.css';
import Formulario from './assets/Componentes/Formulario';
import SocialButton from './assets/Componentes/SocialButton';
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function App() {
return (
<>
<div className='marco'>
<h1>Crear una cuenta</h1>

<div className="social-buttons">
       
<FaLinkedin style={{color: 'blue', fontSize: '50px'}} /> <SocialButton  href="https://www.linkedin.com/" />

<FaGithub style={{color: 'black', fontSize: '50px'}} /> <SocialButton  href="https://github.com/" />

       
<FaSquareXTwitter style={{color: 'black', fontSize: '50px'}} /> <SocialButton  href="https://twitter.com/" />

</div>

<Formulario />
</div>

</>
);
}
export default App;