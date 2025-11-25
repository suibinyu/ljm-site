import Link from "next/link";
import {
  caseStudies,
  productSeries,
  newsList,
  stores,
  faqs,
} from "@/data/siteData";

const heroStats = [
  { label: "服务车辆", value: "100,000+" },
  { label: "认证门店", value: "260+" },
  { label: "质保查询", value: "24/7" },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16 lg:space-y-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#1ad6ff22,_transparent_55%)]">
        <div className="section-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
                OFFICIAL WARRANTY
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white lg:text-5xl">
                量佳膜 · 官方电子质保
              </h1>
              <p className="mt-6 text-lg text-white/70">
                汽车太阳膜 / 漆面保护膜 / 改色膜一体化服务，配备全国门店互认的
                E-Warranty 系统，为车主提供可查、可信的全程记录。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/warranty"
                  className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-500 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-cyan-500/40"
                >
                  立即查询质保
                </Link>
                <Link
                  href="/products"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-white"
                >
                  浏览产品系列
                </Link>
              </div>
              <div className="mt-10 flex gap-8 text-white">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-semibold">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                WARRANTY FLOW
              </div>
              <div className="mt-6 space-y-4">
                {["门店录入", "总部审核", "电子发证", "车主查询"].map(
                  (step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-cyan-400/60 to-blue-500/70 text-lg font-semibold text-white">
                        0{index + 1}
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">
                          {step}
                        </div>
                        <p className="text-sm text-white/60">
                          {["提交车辆与产品信息", "自动校验批次与门店资质", "生成电子证书+短信通知", "24/7 查询与下载证书"][index]}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(63,240,255,0.15),_transparent_55%)]" />
      </section>

      {/* 产品系列 */}
      <section className="section-container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              PRODUCT LINE
            </p>
            <h2 className="section-title mt-3">产品系列</h2>
            <p className="text-white/70">
              三大核心产品线，统一质保编码与施工标准。
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm text-cyan-300 hover:text-cyan-200"
          >
            查看全部产品 →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {productSeries.map((series) => (
            <div
              key={series.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-sm text-cyan-200">{series.tagline}</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {series.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {series.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-black/40 p-3 text-sm text-white/60">
                {series.specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="text-xs">{spec.label}</div>
                    <div className="text-lg font-semibold text-white">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 案例 */}
      <section className="section-container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              CASE GALLERY
            </p>
            <h2 className="section-title mt-3">精选案例</h2>
            <p className="text-white/70">
              每一张质保证书都绑定施工记录与门店信息。
            </p>
          </div>
          <Link
            className="text-sm text-cyan-300 hover:text-cyan-100"
            href="/cases"
          >
            查看更多案例 →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.cover})` }}
              />
              <div className="space-y-2 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {item.product}
                </div>
                <div className="text-lg font-semibold text-white">
                  {item.car}
                </div>
                <p className="text-sm text-white/70">
                  {item.city} · {item.store}
                </p>
                <div className="text-xs text-cyan-200">
                  质保编号：{item.warrantyId}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 质保流程 & 门店 */}
      <section className="section-container grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
            SERVICE PROMISE
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            电子质保，随时可查
          </h2>
          <p className="mt-2 text-white/70">
            电子质保系统贯通全国门店，施工数据秒级同步，总部智能审核，确保每位车主都能获得可信赖的售后保障。
          </p>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            {[
              "批次 & 门店资质双重校验",
              "施工照片 + 文档永久存档",
              "VIN / 手机 / 质保编号三重查询",
              "质保剩余时间实时提醒",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/40 px-4 py-3"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
            STORE NETWORK
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            全国服务网点
          </h2>
          <p className="mt-2 text-white/70">
            覆盖一二线城市，门店定期巡检与培训，确保施工与服务体验的一致性。
          </p>
          <div className="mt-6 space-y-4">
            {stores.map((store) => (
              <div
                key={store.code}
                className="rounded-2xl border border-white/10 bg-black/40 p-4"
              >
                <div className="flex items-center justify-between text-sm text-cyan-200">
                  <span>{store.city}</span>
                  <span>{store.code}</span>
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  {store.name}
                </div>
                <p className="text-sm text-white/60">{store.address}</p>
              </div>
            ))}
          </div>
          <Link
            href="/stores"
            className="mt-6 inline-block text-sm text-cyan-300 hover:text-cyan-100"
          >
            查看全部门店 →
          </Link>
        </div>
      </section>

      {/* 新闻 */}
      <section className="section-container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              NEWS
            </p>
            <h2 className="section-title mt-3">新闻资讯</h2>
            <p className="text-white/70">
              了解行业趋势与量佳膜新品、活动。
            </p>
          </div>
          <Link href="/news" className="text-sm text-cyan-300">
            查看全部新闻 →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                {news.category}
              </div>
              <div className="mt-3 text-xl font-semibold text-white">
                {news.title}
              </div>
              <p className="mt-2 text-sm text-white/70">{news.summary}</p>
              <div className="mt-4 text-xs text-white/50">{news.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              SUPPORT
            </p>
            <h2 className="section-title mt-3">常见问题</h2>
            <p className="text-white/70">
              电子质保、施工流程、备案等核心问题统一解答。
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm text-cyan-300"
            >
              联系客服 →
            </Link>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <summary className="cursor-pointer text-lg font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
