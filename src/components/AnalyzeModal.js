import { createPortal } from 'react-dom';
import ReviewTable from './ReviewTable';
import Backdrop from './Helper/Backdrop';
import Loading from './Helper/Loading';

const ModalContent = ({ onConfirm, data, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <div className='fixed top-[10vh] left-1/2 -translate-x-1/2 w-2/4 max-h-[80vh] z-20 overflow-hidden bg-zinc-800 overflow-y-auto scrollbar'>
          <ReviewTable data={data} onConfirm={onConfirm} />
        </div>
      ) : (
        <div className='fixed top-[10vh] left-1/2 -translate-x-1/2 w-1/6 z-20 bg-white rounded-md'>
          <div className='flex flex-col items-center p-4 gap-4'>
            <h1 className='text-black'>An error occurred</h1>
            <p className='text-red-400'>There is no data to be found.</p>
          </div>
          <div className='flex justify-end p-3'>
            <button
              className='bg-[#146EB4] px-2 py-1 rounded-md'
              onClick={onConfirm}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

function AnalyzeModal({ onConfirm, data, isLoading }) {
  return (
    <>
      {createPortal(<Backdrop onConfirm={onConfirm} />, document.body)}
      {createPortal(
        <ModalContent
          onConfirm={onConfirm}
          data={data}
          isLoading={isLoading}
        />,
        document.body
      )}
    </>
  );
}

export default AnalyzeModal;
