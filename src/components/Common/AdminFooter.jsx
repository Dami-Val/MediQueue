import React from 'react';
import { FaHeart, FaCode, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdCopyright } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';

const AdminFooter = ({ isDarkMode = false }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: isDarkMode ? '#1a202c' : '#ffffff',
      borderTop: `1px solid ${isDarkMode ? '#2d3748' : '#e2e8f0'}`,
      color: isDarkMode ? '#a0aec0' : '#718096',
      padding: '32px 0 24px 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          marginBottom: '24px'
        }}>
          
          {/* Brand Section */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3px'
              }}>
                <img 
                  src="/images/favicon.png" 
                  alt="MediQueue Logo" 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h3 style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: '600',
                color: isDarkMode ? '#ffffff' : '#2d3748'
              }}>
                MediQueue®
              </h3>
            </div>
            <p style={{
              margin: 0,
              fontSize: '14px',
              lineHeight: '1.6',
              maxWidth: '280px'
            }}>
              Sistema integral de gestión de turnos médicos. Optimizando la experiencia de pacientes y profesionales de la salud.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: isDarkMode ? '#ffffff' : '#2d3748'
            }}>
              Enlaces Rápidos
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {[
                { name: 'Dashboard', href: '/admin/dashboard' },
                { name: 'Gestión de Turnos', href: '/admin/turns' },
                { name: 'Pacientes', href: '/admin/patients' },
                { name: 'Consultorios', href: '/admin/consultorios' },
                { name: 'Estadísticas', href: '/admin/statistics' },
                { name: 'Acerca de Nosotros', href: '/about' },
                { name: 'Política de Privacidad', href: '/privacy' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: isDarkMode ? '#a0aec0' : '#718096',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#77b8ce';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = isDarkMode ? '#a0aec0' : '#718096';
                  }}
                >
                  {link.name}
                  <HiOutlineExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* System Info */}
          <div>
            <h4 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: isDarkMode ? '#ffffff' : '#2d3748'
            }}>
              Sistema
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '14px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#48bb78',
                  borderRadius: '50%'
                }}></div>
                <span>Estado: Operativo</span>
              </div>
              <div>Versión: 2.1.0</div>
              <div>Última actualización: Octubre 2025</div>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: isDarkMode ? '#ffffff' : '#2d3748'
            }}>
              Soporte & Contacto
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                {[
                  { 
                    icon: FaEnvelope, 
                    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=educcorp3@gmail.com&su=Soporte%20MediQueue&body=Hola,%20necesito%20ayuda%20con%20MediQueue.', 
                    color: '#e53e3e',
                    target: '_blank'
                  },
                  { 
                    icon: FaGithub, 
                    href: 'https://github.com/Educcorp/MediQueue', 
                    color: isDarkMode ? '#ffffff' : '#2d3748',
                    target: '_blank'
                  },
                  { 
                    icon: FaLinkedin, 
                    href: 'https://www.linkedin.com/in/educcorp-inc-158297356/', 
                    color: '#3182ce',
                    target: '_blank'
                  },
                  { 
                    icon: FaXTwitter, 
                    href: 'https://x.com/Educcorp', 
                    color: isDarkMode ? '#ffffff' : '#000000',
                    target: '_blank'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.target || '_self'}
                    rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className={`social-icon-${index}`}
                    style={{
                      color: social.color,
                      fontSize: '18px',
                      transition: 'all 0.3s ease',
                      opacity: 0.8,
                      transform: 'translateY(0px)',
                      display: 'inline-block'
                    }}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
              <div style={{
                fontSize: '12px',
                color: isDarkMode ? '#718096' : '#a0aec0'
              }}>
                Soporte técnico disponible 24/7
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: `1px solid ${isDarkMode ? '#2d3748' : '#e2e8f0'}`,
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px'
          }}>
            <MdCopyright size={16} />
            <span>{currentYear} MediQueue. Todos los derechos reservados.</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '14px'
          }}>
            <span>Desarrollado con</span>
            <FaHeart style={{ color: '#e53e3e', fontSize: '12px' }} />
            <span>y</span>
            <FaCode style={{ color: '#77b8ce', fontSize: '12px' }} />
            <span>por EducCorp</span>
          </div>
        </div>

        {/* Responsive adjustments and animations */}
        <style>
          {`
            /* Social icons hover animations */
            .social-icon-0:hover, .social-icon-1:hover, .social-icon-2:hover, .social-icon-3:hover {
              transform: translateY(-2px) !important;
              opacity: 1 !important;
              transition: all 0.3s ease !important;
            }
            
            .social-icon-0, .social-icon-1, .social-icon-2, .social-icon-3 {
              transition: all 0.3s ease !important;
            }
            
            @media (max-width: 768px) {
              .admin-footer-bottom {
                flex-direction: column !important;
                text-align: center;
                gap: 12px !important;
              }
              
              .admin-footer-grid {
                grid-template-columns: 1fr !important;
                gap: 24px !important;
              }
              
              .admin-footer-content {
                padding: 0 16px !important;
              }
            }
            
            @media (max-width: 480px) {
              .admin-footer-brand h3 {
                font-size: 18px !important;
              }
              
              .admin-footer-links {
                gap: 6px !important;
              }
              
              .admin-footer-social {
                justify-content: center;
              }
            }
          `}
        </style>
      </div>
    </footer>
  );
};

export default AdminFooter;