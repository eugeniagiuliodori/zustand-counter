type ConfirmModalProps = {
  onConfirm: () => void
  onCancel: () => void
}

const Modal = ({ onConfirm, onCancel}:ConfirmModalProps) =>{
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <p className="mb-4">¿Querés volver a la página anterior?</p>

        <div className="flex justify-center gap-4">
          <button onClick={onCancel} className="px-3 py-1 bg-gray-200 rounded">
            Cancelar
          </button>

          <button onClick={onConfirm} className="px-3 py-1 bg-red-500 text-white rounded">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}


export default Modal;