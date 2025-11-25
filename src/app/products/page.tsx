import { productSeries } from "@/data/siteData";

const techHighlights = [
  { title: "Photon 隔热矩阵", desc: "多腔体纳米陶瓷结构，兼顾透光与隔热性能。" },
  { title: "Diamond Shield", desc: "6 层 TSPU 复合结构，具备自修复与抗黄变能力。" },
  { title: "Color Lab", desc: "30+ 原厂色卡及定制花纹，结构稳定不伤原漆。" },
];

export default function ProductsPage() {
  return (
    <div className="section-container space-y-12 text-white">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
          PRODUCT CATALOG
        </p>
        <h1 className="text-4xl font-semibold">产品展示</h1>
        <p className="text-white/70">
          三大产品线覆盖隔热、保护、改色需求，均绑定官方电子质保，可追溯产品批次与施工记录。
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {techHighlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm text-cyan-200">{item.title}</div>
            <p className="mt-3 text-sm text-white/70">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        {productSeries.map((series) => (
          <div
            key={series.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10"
          >
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:w-1/2">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
                  {series.title}
                </p>
                <h2 className="mt-3 text-3xl font-semibold">{series.tagline}</h2>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  {series.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <h3 className="text-lg font-semibold text-white">主要参数</h3>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70">
                    {series.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                      >
                        <div className="text-xs uppercase tracking-widest text-white/60">
                          {spec.label}
                        </div>
                        <div className="text-2xl font-semibold text-white">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  <div className="text-white">施工流程</div>
                  <ol className="mt-3 list-decimal space-y-2 pl-4">
                    <li>车辆检验 &gt; 记录车漆状况</li>
                    <li>裁膜排版 &gt; 精准贴合模型</li>
                    <li>无尘室施工 &gt; 实时监测</li>
                    <li>质检交付 &gt; 上传施工档案</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

