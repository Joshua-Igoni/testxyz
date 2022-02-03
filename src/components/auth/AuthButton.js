export default function AuthButton({ icon, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex px-10 py-5 gap-10 text-3xl rounded-full w-full border border-appera-black"
    >
      {icon}
      <span className="text-2xl only:mx-auto font-semibold">{children}</span>
    </button>
  );
}
