import Link from 'next/link';

export default function ProjectCard({ children, category, title, id }) {
  return (
    <Link href={`/project/${id}`} passHref>
      <div className="card col-lg-4">
        <img src={getImageLink(category)} alt="alternative" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {children}
        </div>
      </div>
    </Link>
  );
}

const getImageLink = (category) => {
  let base = '/images/projects/';
  return `${base}${category.replace(' ', '-')}.jpg`;
};
