export default function Label({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  return (
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {children}
    </label>
  );
}
