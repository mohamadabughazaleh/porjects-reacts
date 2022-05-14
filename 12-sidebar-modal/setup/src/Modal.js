import React,{useContext} from 'react';
import { FaTimes } from 'react-icons/fa'
import{AppContext}from './context'

const Modal = () => {
  const{isModalOpen,closeModal}=useContext(AppContext)
  return (
    <div className={`${isModalOpen ? "modal-overlay show-modal":"modal-overlay "}`}>
      <div className="modal-container">
        <h3>model contant</h3>
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal;
