import { useEffect } from 'react';

const CustomFavicon = () => {
  useEffect(() => {
    // Função para criar um favicon redondo
    const createRoundFavicon = () => {
      // Cria um elemento canvas para desenhar o favicon redondo
      const canvas = document.createElement('canvas');
      const size = 64; // Tamanho do favicon
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      // Carrega a imagem
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = '/virtuetechlogo.jpg';
      
      img.onload = () => {
        // Cria um caminho circular
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        
        // Desenha a imagem no canvas recortada pelo círculo
        ctx.drawImage(img, 0, 0, size, size);
        
        // Converte o canvas para uma URL de dados
        const faviconUrl = canvas.toDataURL('image/png');
        
        // Cria ou atualiza o link do favicon
        let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
        
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.head.appendChild(link);
        }
        
        link.type = 'image/png';
        link.href = faviconUrl;
      };
    };
    
    // Cria o favicon redondo
    createRoundFavicon();
    
    // Não é necessário limpar nada no retorno, pois não estamos criando elementos temporários
  }, []);

  return null; // Este componente não renderiza nada no DOM
};

export default CustomFavicon;
