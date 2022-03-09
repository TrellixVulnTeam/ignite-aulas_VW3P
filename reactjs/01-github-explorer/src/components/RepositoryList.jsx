import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Formularios em React",
  link: "https://github.com/alanFMA",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
