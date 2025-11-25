import { stores } from "@/data/siteData";

const coverage = [
  { label: "省级中心", value: "18" },
  { label: "旗舰店", value: "36" },
  { label: "标准门店", value: "200+" },
];

export default function StoresPage() {
  return (
    <div className="section-container space-y-10 text-white">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
          STORE NETWORK
        </p>
        <h1 className="text-4xl font-semibold">门店授权</h1>
        <p className="text-white/70">
          授权门店均通过总部培训、施工环境验收与服务评级，支持电子质保互认。
        </p>
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">服务覆盖</h2>
            <p className="mt-2 text-sm text-white/70">
              以省级中心为枢纽，旗舰店负责体验与交付，标准门店提供周边服务，保证 2 小时内响应。
            </p>
            <div className="mt-6 flex gap-6 text-white">
              {coverage.map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-semibold">{item.value}</div>
                  <div className="text-xs uppercase tracking-widest text-white/50">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/70">
            <div className="text-white">授权标准</div>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>独立无尘施工区、温湿度监控、三段式照明</li>
              <li>施工技师持证上岗，年度考核通过</li>
              <li>按总部 SOP 上传施工录像与质检报告</li>
              <li>通过神秘客与 NPS 评价体系</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {stores.map((store) => (
          <div
            key={store.code}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cyan-200">
              <span>{store.city}</span>
              <span>{store.code}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold">{store.name}</h2>
            <p className="text-sm text-white/70">{store.address}</p>
            <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-cyan-300 hover:text-cyan-200">
              查看导航
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

