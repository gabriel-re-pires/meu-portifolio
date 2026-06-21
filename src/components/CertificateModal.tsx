type Props = {
  open: boolean;
  image?: string;
  title?: string;
  onClose: () => void;
};

const CertificateModal = ({ open, image, title, onClose }: Props) => {
  if (!open || !image) return null;

  return (
    <div className="cert-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="cert-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="cert-modal-head">
          <span>{title}</span>
          <button type="button" onClick={onClose} aria-label="Fechar">✕</button>
        </div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default CertificateModal;
