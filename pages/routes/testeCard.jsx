

export default function Cards(srcFoto,nomeCard,linkCard) {
    return (

        <div className="mainCard">
            <a  className="cardLink" href={linkCard}>
            <div className="cardMoldura">
                <div className="fotoCard">
                    <img src={srcFoto} alt={nomeCard} className="fotoCard" />
                    
                </div>
                <div className="textCard">
                    <span className="sCard">
                        {nomeCard}
                    </span>
                </div>
            </div>
            </a>
        </div>
    )
};

