import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router";
import { getHeroByName } from "../helpers/getHeroByName";
import { Search, AlertCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearching, setIsSearching] = useState(false);

  // Obtener parámetro de búsqueda de la URL
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q') || '';
  
  const heroes = getHeroByName(q);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    if (!searchText.trim()) return;
    
    setIsSearching(true);
    
    // Simular delay de búsqueda para mejor UX
    setTimeout(() => {
      navigate(`?q=${searchText.trim()}`);
      setIsSearching(false);
    }, 300);
  }

  // Sugerencias de búsqueda
  const searchSuggestions = [
    'Batman', 'Superman', 'Spider Man', 'Iron Man', 
    'Flash', 'Wonder Woman', 'Thor', 'Hulk'
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <h1 className="d-flex align-items-center gap-2 mb-2">
            <Search size={32} className="text-primary" />
            <span className="gradient-text">Buscar Héroes</span>
          </h1>
          <p className="text-secondary">
            Encuentra tu superhéroe favorito entre más de 20 personajes de DC y Marvel
          </p>
        </div>
      </div>

      <div className="row">
        {/* Panel de búsqueda */}
        <div className="col-3 mb-4">
          <div className="card glass sticky-top" style={{ top: '100px' }}>
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center gap-2 mb-3">
                <Search size={18} />
                <span>Búsqueda</span>
              </h5>
              
              <form onSubmit={onSearchSubmit}>
                <div className="position-relative mb-3">
                  <input
                    type="text"
                    placeholder="Ej: Batman, Spider Man..."
                    className="form-control pe-5"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={onInputChange}
                    style={{
                      paddingRight: '3rem',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)'
                    }}
                  />
                  
                  {isSearching && (
                    <div className="position-absolute top-50 end-0 translate-middle-y me-2">
                      <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Buscando...</span>
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100 mb-3"
                  disabled={isSearching}
                >
                  {isSearching ? 'Buscando...' : 'Buscar'}
                </button>
              </form>

              {/* Sugerencias */}
              <div>
                <h6 className="mb-2 d-flex align-items-center gap-1">
                  <Sparkles size={14} />
                  <span>Sugerencias</span>
                </h6>
                <div className="d-flex flex-wrap gap-1">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      className="btn btn-sm btn-outline-secondary rounded-pill"
                      onClick={() => navigate(`?q=${suggestion}`)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="col-8">
          {showSearch && (
            <div className="text-center py-5">
              <Search size={64} className="text-muted mb-3" />
              <h3 className="text-muted">¡Comienza tu búsqueda!</h3>
              <p className="text-secondary">
                Usa el panel de la izquierda para buscar tu superhéroe favorito
              </p>
            </div>
          )}

          {showError && (
            <div className="alert alert-warning d-flex align-items-center" role="alert">
              <AlertCircle size={20} className="me-2" />
              <div>
                <strong>No se encontraron resultados</strong>
                <div className="small">
                  No hay ningún héroe con el nombre "{q}". Intenta con otro término de búsqueda.
                </div>
              </div>
            </div>
          )}

          {(heroes.length > 0) && (
            <>
              <h4 className="mb-3">
                Resultados para: <span className="text-primary">"{q}"</span>
              </h4>
              
              <div className="row">
                {heroes.map(hero => (
                  <div key={hero.id} className="col-12 mb-3">
                    <HeroCard {...hero} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};