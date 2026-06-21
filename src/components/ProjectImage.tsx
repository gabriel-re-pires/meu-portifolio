import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

type Props = { src?: string; name: string; showName?: boolean };

/**
 * Imagem de projeto com fallback: se não houver imagem (ou ela falhar ao carregar),
 * mostra o nome do projeto sobre as linhas retrô (scanlines), em vez de uma imagem genérica.
 */
const ProjectImage = ({ src, name, showName = true }: Props) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="proj-ph" role="img" aria-label={name}>
        {showName && <span>{name}</span>}
      </div>
    );
  }

  return <img src={`${BASE}${src}`} alt={name} loading="lazy" onError={() => setFailed(true)} />;
};

export default ProjectImage;
