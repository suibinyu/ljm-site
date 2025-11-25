import { caseStudies } from "@/data/siteData";

const filters = ["全部车型", "SUV", "轿车", "新能源"];
const productFilters = ["全部膜类", "太阳膜", "漆面保护膜", "改色膜"];

export default function CasesPage() {
  return (
    <div className="section-container space-y-10 text-white">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
          CASE ARCHIVE
        </p>
        <h1 className="text-4xl font-semibold">施工案例</h1>
        <p className="text-white/70">
          每份质保数据都绑定施工图片、门店信息与批次，支持总部审计与客户复查。
        </p>
      </header>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="flex flex-wrap gap-3 text-sm text-white/70">
          {filters.map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/20 px-4 py-2 hover:border-cyan-200 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
          {productFilters.map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/20 px-4 py-2 hover:border-cyan-200 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.cover})` }}
            />
            <div className="space-y-2 p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                {item.product}
              </div>
              <h2 className="text-xl font-semibold">{item.car}</h2>
              <p className="text-sm text-white/70">
                {item.city} · {item.store}
              </p>
              <p className="text-xs text-cyan-200">
                质保编号：{item.warrantyId}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

