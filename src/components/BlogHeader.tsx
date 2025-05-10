interface BlogHeaderProps {
    title: string;
    subtitle: string;
    author: string;
    date: string;
    category: string;
  }
  
  export default function BlogHeader({ title, subtitle, author, date, category }: BlogHeaderProps) {
    // Função para formatar datas de forma elegante
    const formatDate = (isoDate: string) => {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(isoDate).toLocaleDateString("en-US", options);
    };
  
    return (
      <header className="py-10 bg-cream border-b border-choco text-center">
        {/* Título do artigo */}
        <h1 className="text-4xl font-bold">{title}</h1>
  
        {/* Subtítulo (resumo do artigo) */}
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
  
        {/* Informações do Autor, Data e Categoria */}
        <div className="mt-6 flex justify-center space-x-4 text-sm">
          <span>{`By ${author || "Unknown Author"}`}</span>
          <span className="text-vitamin">•</span>
          
          {/* Data com tag <time> para SEO */}
          <span>
            <time dateTime={date}>
              {date ? formatDate(date) : "Unknown Date"}
            </time>
          </span>
          <span className="text-vitamin">•</span>
          
          <span>{category || "Uncategorized"}</span>
        </div>
      </header>
    );
  }
  