export default function Backdrop({ onConfirm }) {
  return (
    <div
      className='fixed top-0 left-0 w-full h-screen	z-10 bg-black/75'
      onClick={onConfirm}
    ></div>
  );
}
