import Image from 'next/image'


export default function Cards(info) {
    return (

        <div className="mainCard">
            <a  className="cardLink" href={info.linkCard}>
            <div className="cardMoldura">
                <div className="fotoCard">
                    <Image src={info.srcFoto} alt={info.nomeCard} className="fotoCard"
                    width={300}
                    height={220}
                    />
                    
                </div>
                <div className="textCard">
                    <span className="sCard">
                        {info.nomeCard}
                    </span>
                </div>
            </div>
            </a>
        </div>
    )
};

