import "./pokemonCard.css";
import pokeball from "../img/pokeball.png"
import {useState} from "react";

export function PokemonCard({key, id, name, image, type, height, weight, stats, statsName}){
    
    const [isShown, setIsShown] = useState(false);
    
    return (
        // De esta manera podemos optar por mostrar o no el div show, como arriba es false, no se muestra
        <div className="container">
            {isShown && (
                <div className="show">
                    <div className="stat-container-title">
                        <p>{name}</p>
                        <img src={image} alt={name} className="img-title" />
                    </div>
                    <img src={image} alt={name}/>
                    <div style={{display:"flex", widht:"100%"}} className="base-stats">
                        <div className="stats-left" style={{background: "#dbdbd9", textAlign: "center" }}>
                            <p>Type</p>
                            <p>Height</p>
                            <p>Weight</p>
                        </div>
                        <div className="stats-right" style={{background: "#ffffff"}}>
                            <p>{type}</p>
                            <p>{height}0 cm</p>
                            <p>{weight} lbs</p>
                        </div>
                    </div>
                    <div className="base-stats">
                        <div >
                            {statsName.map((stats) => (
                                <p className="stats">{stats}</p>
                            ))}
                        </div>
                        <div>
                            {stats.map((stats) => (
                                <p className="stats">{stats}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            <div className="right" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <img src={image} alt={name} style={{maxHeight: "50px", marginRight: "10px", width: "50px"}} />
                <p style={{width: "270px"}}>No. {id}</p>
                <p>{name}</p>
                <img src={pokeball} alt="pokeball" style={{ maarginLeft: "auto", width: "40px"}} />
            </div>


        </div>
    )
}