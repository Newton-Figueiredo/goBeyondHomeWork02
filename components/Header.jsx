import Image from 'next/image'

export default function Header() {
    return (

        <div className="header">
            <div className="headerImg">
                <Image src="/headerImg.jpg" alt="codigos html" className="headerImg" 
                layout='fill'
                
                />
            </div>
            <div className="minhaFotoMoldura">
                <div className="minhaFoto">
                    <Image src="/minhaFoto.jpg" alt="Minha foto" className="minhaFoto" 
                    width={200}
                    height={200}
                    />
                </div>
            </div>
        </div>
    )
};

