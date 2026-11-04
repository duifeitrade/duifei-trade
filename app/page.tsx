export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <p style={{ margin: "2rem", fontFamily: "sans-serif", color: "#666" }}>
        Redirecting to <a href="/en/">/en/</a>…
      </p>
    </>
  );
}
