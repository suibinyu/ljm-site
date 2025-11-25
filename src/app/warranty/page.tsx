"use client";

import { useMemo, useState } from "react";
import { warrantyRecords } from "@/data/siteData";

type QueryType = "phone" | "warrantyId" | "vin";

export default function WarrantyPage() {
  const [queryType, setQueryType] = useState<QueryType>("phone");
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState<typeof warrantyRecords[0] | null>(null);
  const [error, setError] = useState("");

  const placeholder = useMemo(() => {
    switch (queryType) {
      case "phone":
        return "请输入手机号码";
      case "warrantyId":
        return "请输入质保编号（如 LJM-911-2024-08）";
      case "vin":
        return "请输入 17 位车架号";
      default:
        return "";
    }
  }, [queryType]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const trimmed = keyword.trim();
    if (!trimmed) {
      setError("请输入查询信息");
      setResult(null);
      return;
    }
    const match = warrantyRecords.find((record) => record[queryType] === trimmed);
    if (!match) {
      setError("未找到匹配的质保记录，请确认信息或联系门店");
      setResult(null);
      return;
    }
    setResult(match);
  };

  return (
    <div className="section-container space-y-10 text-white">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
          WARRANTY HUB
        </p>
        <h1 className="text-4xl font-semibold">质保查询</h1>
        <p className="text-white/70">
          支持手机号、质保编号、车架号多方式查询；所有数据均来自官方质保系统，确保真实可靠。
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { type: "phone", label: "手机号" },
                { type: "warrantyId", label: "质保编号" },
                { type: "vin", label: "车架号" },
              ].map((item) => (
                <button
                  type="button"
                  key={item.type}
                  onClick={() => setQueryType(item.type as QueryType)}
                  className={`rounded-full border px-4 py-2 ${
                    queryType === item.type
                      ? "border-cyan-300 text-cyan-200"
                      : "border-white/20 text-white/70 hover:border-white/40"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
              placeholder={placeholder}
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 py-3 text-sm font-semibold text-black"
            >
              查询质保
            </button>
            {error && <p className="text-sm text-red-300">{error}</p>}
          </form>

          {result && (
            <div className="mt-8 rounded-3xl border border-cyan-300/40 bg-black/40 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                WARRANTY FOUND
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                {result.car}
              </h2>
              <p className="text-sm text-white/60">{result.vin}</p>
              <div className="mt-6 grid gap-4 text-sm text-white/70 sm:grid-cols-2">
                <div>
                  <div className="text-white/50">产品组合</div>
                  <div className="text-lg text-white">{result.product}</div>
                </div>
                <div>
                  <div className="text-white/50">授权门店</div>
                  <div className="text-lg text-white">{result.store}</div>
                </div>
                <div>
                  <div className="text-white/50">质保编号</div>
                  <div className="text-lg text-cyan-200">{result.warrantyId}</div>
                </div>
                <div>
                  <div className="text-white/50">有效期至</div>
                  <div className="text-lg text-white">{result.validTill}</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60">
                <span className="rounded-full border border-white/20 px-4 py-2">
                  支持下载电子证书
                </span>
                <span className="rounded-full border border-white/20 px-4 py-2">
                  可预约复检
                </span>
              </div>
            </div>
          )}
        </div>
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">门店录入须知</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>施工完成后 30 分钟内上传资料，系统自动生成质保。</li>
            <li>批次与门店资质双校验，异常单自动进入审核队列。</li>
            <li>支持导入施工照片、客户签名、合同等附件。</li>
            <li>生成的电子证书支持二维码验证，车主可直接扫码核验。</li>
          </ul>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/60">
            <div className="text-white">总部审核时间</div>
            <p>09:00 - 22:00（节假日不休），紧急单可联系客服加速。</p>
            <p className="mt-3 text-white">客服热线：400-168-7788</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

