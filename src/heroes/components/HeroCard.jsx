import { Link } from "react-router";
import { Calendar, User, ArrowRight } from 'lucide-react';

const CharactersByHero = ({alter_ego, characters}) => {
    return (alter_ego === characters)
    ? null
    : (
        <div className="d-flex align-items-center gap-2 mb-2">
            <User size={14} className="text-muted" />
            <p className="card-text mb-0 text-secondary">{characters}</p>
        </div>
    )
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImageUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <div className="col-4 animate__animated animate__fadeIn">
      <div className="card h-100 hover-lift">
        <div className="position-relative overflow-hidden">
          <img 
            src={heroImageUrl} 
            className="card-img-top" 
            alt={superhero}
            style={{
              height: '280px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
          />
          <div className="position-absolute top-0 end-0 m-2">
            <span className={`badge ${publisher === 'Marvel Comics' ? 'bg-danger' : 'bg-primary'} px-2 py-1`}>
              {publisher === 'Marvel Comics' ? 'Marvel' : 'DC'}
            </span>
          </div>
        </div>
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-2 gradient-text">{ superhero }</h5>
          
          <div className="d-flex align-items-center gap-2 mb-2">
            <User size={14} className="text-muted" />
            <p className="card-text mb-0 text-secondary">{ alter_ego }</p>
          </div>

          <CharactersByHero alter_ego={alter_ego} characters={characters} />
          
          <div className="d-flex align-items-center gap-2 mb-3">
            <Calendar size={14} className="text-muted" />
            <p className="card-text mb-0">
              <small className="text-muted">{ first_appearance }</small>
            </p>
          </div>

          <div className="mt-auto">
            <Link 
              to={`/hero/${id}`} 
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
            >
              <span>Ver detalles</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};