import App from '../index';
import Cards from '../../components/Card';
export default function Cafes() {
    return (
        <>
        <div>
            <App/>
            <Cards srcFoto  ='https://revistadeguste.com/wp-content/uploads/2019/02/b4068f2e14767c8bb83226c6655dec238759ffc9f32e4ff6e0660edb368e11f6.jpg' 
                   nomeCard ='Balzac café' 
                   linkCard ='https://www.instagram.com/sigabalzaccafe/'/>
            <Cards srcFoto  ='https://lh3.googleusercontent.com/p/AF1QipP5FTZBzSnDCzBZW9KLJ-TaxNMmgAqB2UH11FXj=w600-k' 
                   nomeCard ='Barões do café' 
                   linkCard ='https://linktr.ee/baroescafe'/>
            <Cards srcFoto  ='https://www.chapelatto.com/____impro/1/onewebmedia/19072019-IMG_7989.JPG?etag=W%2F%221d6815-60d72c81%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=836%2B557&extract=0%2B0%2B792%2B557&quality=85' 
                    nomeCard ='Chapelatto' 
                    linkCard ='https://www.chapelatto.com/'/>
        </div>
        </>
    )
};

