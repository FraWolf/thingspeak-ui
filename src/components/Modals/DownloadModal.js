function DownloadModal() {
  return (
    <div
      className="modal fade"
      id="downloadAppModal"
      tabIndex="-1"
      aria-labelledby="downloadAppModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="downloadAppModalLabel">
              Download
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              Ecco a te il QR Code, da scansionare con il tuo dispostivo, per
              scaricare l'applicazione!
            </div>
            <div className="text-center">
              <img src="/img/qrcode.png" alt="QR Code" />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadModal;
