export default function Loading() {
  return (
    <div className="absolute flex top-0 left-0 right-0 bottom-0 justify-center items-center bg-black/50">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400" />
    </div>
  );
}
