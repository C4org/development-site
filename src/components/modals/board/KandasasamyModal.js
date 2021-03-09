import React from 'react';
import { ModalWrapper, Reoverlay } from 'reoverlay';

import 'reoverlay/lib/ModalWrapper.css';

export const KandasamyModal = () => {

  const closeModal = () => {
    Reoverlay.hideModal();
  }

  return (
    <ModalWrapper>
      <div className="w-3/4 h-3/4">
        <p>
          Hi  dfggfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </p>
        <button onClick={closeModal}>No</button>
      </div>
    </ModalWrapper>
  )
}