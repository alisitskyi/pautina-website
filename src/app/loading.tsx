export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-dark text-white px-4">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 rounded-full border-4 border-brand-red border-t-transparent animate-spin" />
      </div>
      <span className="text-xs uppercase font-extrabold tracking-widest text-gray-400 font-accent animate-pulse">
        Завантаження кімнати...
      </span>
    </div>
  );
}
