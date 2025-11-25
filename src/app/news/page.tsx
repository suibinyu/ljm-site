import { newsList } from "@/data/siteData";

export default function NewsPage() {
  return (
    <div className="section-container space-y-10 text-white">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
          NEWSROOM
        </p>
        <h1 className="text-4xl font-semibold">新闻资讯</h1>
        <p className="text-white/70">
          最新的品牌动态、行业趋势与技术发布，帮助门店与车主第一时间掌握关键信息。
        </p>
      </header>

      <div className="space-y-6">
        {newsList.map((news) => (
          <article
            key={news.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-cyan-200">
              <span>{news.category}</span>
              <span>{news.date}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">{news.title}</h2>
            <p className="mt-3 text-sm text-white/70">{news.summary}</p>
            <button className="mt-4 text-sm text-cyan-300">阅读全文 →</button>
          </article>
        ))}
      </div>
    </div>
  );
}

