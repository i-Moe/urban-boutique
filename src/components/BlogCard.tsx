import Link from "next/link";
import Image from "next/image";

interface Article {
  id: string;
  image: string;
  alt?: string;
  title: string;
  subtitle: string;
}

interface BlogCardProps {
  article: Article;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, index }) => {
  return (
    <div className="bg-lightcream border border-choco p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${article.id}`} aria-label={`Read more about ${article.title}`}>
        <div className="cursor-pointer w-full h-44 relative mb-5 rounded-md overflow-hidden">
          <Image
            src={article.image}
            alt={article.alt || `Cover image for ${article.title}`}
            layout="fill"
            objectFit="cover"
            className="mb-5 rounded-md"
            priority={index === 0} // Prioritize the first article
          />
        </div>
      </Link>

      <Link href={`/blog/${article.id}`} aria-label={`Go to article: ${article.title}`}>
        <h2 className="text-xl font-bold mt-4 hover:underline decoration-choco decoration-[0.8px] underline-offset-4 cursor-pointer">
          {article.title}
        </h2>
      </Link>

      <p className="mt-3 text-gray-600 leading-relaxed">{article.subtitle}</p>

      <Link href={`/blog/${article.id}`} aria-label={`Continue reading: ${article.title}`}>
        <span className="text-vitamin font-bold mt-5 inline-block underline-effect cursor-pointer">
          Read more →
        </span>
      </Link>
    </div>
  );
};

export default BlogCard;
