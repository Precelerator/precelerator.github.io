import Link from "next/link";

export default function ProjectCard({ children, category, title, id }) {
  return (
    <Link href={`/project/${id}`} passHref>
      <div className="card col-lg-4">
        <img src={getImageLink(category, title)} alt="alternative" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {children}
        </div>
      </div>
    </Link>
  );
}

const getImageLink = (category, title) => {
  let base = "/images/p-";
  if (title.toLowerCase().includes("dartme")) return `${base}dart.jpg`;
  return `${base}${category.toLowerCase().replace(" ", "-")}.jpg`;
};
