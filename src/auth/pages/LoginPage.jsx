import { useNavigate } from "react-router";
import { Shield, ArrowRight, Zap } from 'lucide-react';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" 
         style={{
           background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #141414 100%)',
           position: 'relative'
         }}>
      
      {/* Efectos de fondo */}
      <div className="position-absolute w-100 h-100" style={{
        background: 'radial-gradient(circle at 25% 25%, rgba(0, 102, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 59, 48, 0.1) 0%, transparent 50%)',
        zIndex: 1
      }}></div>
      
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card glass" style={{
              background: 'rgba(26, 26, 26, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2rem'
            }}>
              
              {/* Logo y título */}
              <div className="text-center mb-4">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                  <Shield size={32} className="text-primary" />
                  <Zap size={24} className="text-danger" />
                </div>
                <h1 className="gradient-text mb-2" style={{
                  background: 'linear-gradient(135deg, #ffffff, #0066ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '2rem',
                  fontWeight: '700'
                }}>
                  Heroes App
                </h1>
                <p className="text-secondary mb-0">
                  Descubre el universo de superhéroes
                </p>
              </div>

              {/* Estadísticas */}
              <div className="row text-center mb-4">
                <div className="col-6">
                  <div className="p-3 rounded" style={{ background: 'rgba(0, 102, 255, 0.1)' }}>
                    <div className="text-primary fw-bold">10+</div>
                    <small className="text-muted">DC Heroes</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded" style={{ background: 'rgba(255, 59, 48, 0.1)' }}>
                    <div className="text-danger fw-bold">10+</div>
                    <small className="text-muted">Marvel Heroes</small>
                  </div>
                </div>
              </div>

              {/* Botón de login */}
              <button 
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-3"
                onClick={onLogin}
                style={{
                  background: 'linear-gradient(135deg, #0066ff, #0052cc)',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <span>Entrar a la App</span>
                <ArrowRight size={18} />
              </button>

              {/* Información adicional */}
              <div className="text-center mt-4">
                <small className="text-muted">
                  Explora más de 20 superhéroes de DC y Marvel
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}