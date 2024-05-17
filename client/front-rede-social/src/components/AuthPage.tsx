interface AuthPanelProps {
  children: React.ReactNode;
}

export default function AuthPanel({ children }: AuthPanelProps) {
  return (
    <main className="flex flex-col items-center justify-center bg-[url('../../public/pessoas-felizes.jpg')] bg-no-repeat bg-cover min-h-screen text-gray-600">
      <form className="flex flex-col bg-white px-6 py-14 rounded-lg gap-11 w-2/5 mt-8">
        {children}
      </form>
    </main>
  );
}