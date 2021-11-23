import React, { useCallback, useRef } from 'react';
import './App.css';
import Modal, { ModalHandles } from './components/Modal';

function App() {

  const modalRef = useRef<ModalHandles>(null)

  /// :: Abrir função do componente modal filho
  const abrirModal = useCallback(() => {

    modalRef.current?.openModal();
  }, []);

  return (
    <div>
      <h1>teste</h1>
      <Modal ref={modalRef} title={'Modal de teste'} body={'Modal esta aberta'}/>

      <button onClick={abrirModal} >Abrir Modal</button>
    </div>
  );
}

export default App;
