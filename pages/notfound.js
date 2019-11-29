import Layout from "../components/layout/layout";

export default function notfound() {
  return (
    <Layout
      headerProps={{
        title: "Pagina no encontrada"
      }}
    >
      <h4>404</h4>
    </Layout>
  );
}
