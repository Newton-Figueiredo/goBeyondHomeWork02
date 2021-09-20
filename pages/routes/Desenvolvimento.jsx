import App from '../index';
import Cards from '../../components/Card';
export default function Desenvolvimento() {
    return (
        <>
        <div>
            <App/>
            <div className="mainContent">
            <Cards srcFoto  ='https://cdn.pixabay.com/photo/2017/07/17/00/58/coffee-2511065_960_720.jpg' 
                   nomeCard ='Começando com React' 
                   linkCard ='https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started'
                   />

            <Cards srcFoto  ='https://cdn.pixabay.com/photo/2018/10/04/18/56/cobweb-3724148_960_720.jpg' 
                   nomeCard ='Como a Web funciona' 
                   linkCard ='https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/How_the_Web_works'/>
            </div>
        </div>
        </>
    )
};

