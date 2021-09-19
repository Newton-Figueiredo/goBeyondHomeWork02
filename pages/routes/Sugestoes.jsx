import App from '../index';
import Cards from '../../components/Card';
export default function Sugestoes() {
    return (
        <>
        <div>
            <App/>
            
            <Cards srcFoto  ='https://images-na.ssl-images-amazon.com/images/I/5108AHJ7pIL.jpg' 
                   nomeCard ='Aldnoah zero' 
                   linkCard ='https://www.crunchyroll.com/pt-br/aldnoahzero'
            />

            <Cards srcFoto  ='https://images-na.ssl-images-amazon.com/images/I/81qZGXVmwGL.jpg' 
                   nomeCard ='Code Geass' 
                   linkCard ='https://www.crunchyroll.com/pt-br/code-geass'
            />

            <Cards srcFoto  ='https://img1.ak.crunchyroll.com/i/spire4/f213e46f67ac0ecd0d4aaeebb48887e61617400898_full.jpg' 
                   nomeCard ='Cowboy bebop' 
                   linkCard ='https://www.crunchyroll.com/pt-br/cowboy-bebop'
            />
            <Cards srcFoto  ='https://img1.ak.crunchyroll.com/i/spire3/7ba81b1709a87f5ca8930229b10029a61484092235_full.jpg' 
                   nomeCard ='KONOSUBA' 
                   linkCard ='https://www.crunchyroll.com/pt-br/konosuba-gods-blessing-on-this-wonderful-world'
            />
        </div>
        </>
    )
};

