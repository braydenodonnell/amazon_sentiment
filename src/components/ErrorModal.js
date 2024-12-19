import { createPortal } from 'react-dom';
import Backdrop from './Helper/Backdrop';
import Loading from './Helper/Loading';

const ModalContent = ({ onConfirm, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='fixed top-[10vh] left-[25%] w-2/4 max-h-[80vh] z-20 bg-white'>
          <p>Error, there is no data for URL</p>
        </div>
      )}
    </>
  );
};

function ErrorModal({ onConfirm, data }) {
  return (
    <>
      {createPortal(<Backdrop onConfirm={onConfirm} />, document.body)}
      {createPortal(
        <ModalContent onConfirm={onConfirm} data={data} />,
        document.body
      )}
    </>
  );
}

export default ErrorModal;
