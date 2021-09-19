

export default function Cards(info) {
    return (

        <div className="mainCard">
            <a  className="cardLink" href={info.linkCard}>
            <div className="cardMoldura">
                <div className="fotoCard">
                    <img src={info.srcFoto} alt={info.nomeCard} className="fotoCard" />
                    
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

