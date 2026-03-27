export const metadata = {
  title: "Mood Abitare — Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="sanity-studio"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        height: "100vh",
        width: "100vw",
        background: "#101112",
      }}
    >
      {children}
    </div>
  );
}
