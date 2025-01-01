import Link from "next/link";
import Image from "next/image";

interface BlogSideBarProps {
  relatedArticles: {
    title: string;
    link: string;
    image?: string;
  }[];
}

export default function BlogSideBar({ relatedArticles }: BlogSideBarProps) {
  return (
    <aside className="w-full bg-lightcream border border-choco rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-bold mb-4">Related Articles</h3>
      <ul>
        {relatedArticles.map((article, index) => (
          <li key={index} className="mb-4 flex items-center">
            <div className="w-16 h-16 relative">
              <Image
                src={article.image || "/images/default-thumb.jpg"}
                alt={article.title || "Related article thumbnail"}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <Link href={article.link}>
              <span className="text-mint hover:underline decoration-[0.8px] underline-offset-4 flex-1 cursor-pointer">
                {article.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
