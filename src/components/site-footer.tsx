import Link from "next/link";

const quickLinks = [
  { label: "首页", href: "/" },
  { label: "产品展示", href: "/products" },
  { label: "案例中心", href: "/cases" },
  { label: "新闻资讯", href: "/news" },
  { label: "质保查询", href: "/warranty" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm text-white/70 md:grid-cols-4">
        <div>
          <div className="text-xl font-semibold text-white">量佳膜</div>
          <p className="mt-3 text-white/60">
            高端汽车膜&全国电子质保服务网络，守护每一位车主的用车体验。
          </p>
        </div>
        <div>
          <div className="text-white">快速链接</div>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white">客服热线</div>
          <p className="mt-3 text-2xl font-semibold text-cyan-300">400-168-7788</p>
          <p className="text-white/60">周一至周日 09:00 - 21:00</p>
        </div>
        <div>
          <div className="text-white">公司信息</div>
          <p className="mt-3 text-white/60">
            广东省广州市龙洞工业园
            <br />
            邮箱：service@liangjiamo.com
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        版权所有 © {new Date().getFullYear()} 量佳膜官方电子质保 | 粤ICP备20231234号
      </div>
    </footer>
  );
}

