export default function ProjectDetail({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: 24 }}>
      <h1>Detail route works</h1>
      <p>slug: <b>{params.slug}</b></p>
    </main>
  );
}
