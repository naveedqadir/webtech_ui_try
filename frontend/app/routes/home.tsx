import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Layout } from "../components/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TechPro - Modern Technology Solutions" },
    { name: "description", content: "Transform your business with cutting-edge technology solutions." },
  ];
}

export default function Home() {
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
}
