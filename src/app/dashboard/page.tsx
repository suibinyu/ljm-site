"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ProtectedRoute } from "@/components/protected-route";
import { useAuth } from "@/contexts/auth-context";

// Mock 数据
const mockStats = {
  today: { input: 3, pending: 1, approved: 2 },
  thisMonth: { total: 45, approved: 42, pending: 3 },
  warrantyTotal: 128,
};

const mockRecentWarranties = [
  {
    id: "LJM-911-2024-08",
    customer: "张先生",
    car: "保时捷 911",
    product: "漆面保护膜 · 钻石盾 Pro",
    date: "2024-11-25",
    status: "已生效",
  },
  {
    id: "LJM-MS-2024-05",
    customer: "李女士",
    car: "特斯拉 Model S",
    product: "旗舰太阳膜 Photon 92",
    date: "2024-11-24",
    status: "审核中",
  },
  {
    id: "LJM-GLE-2024-06",
    customer: "王先生",
    car: "奔驰 GLE",
    product: "改色膜 · 电光系列",
    date: "2024-11-23",
    status: "已生效",
  },
];

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState(mockStats);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#03070f] text-white">
        {/* 顶部导航栏 */}
        <div className="border-b border-white/10 bg-black/60 backdrop-blur">
          <div className="section-container flex items-center justify-between py-4">
            <div>
              <h1 className="text-2xl font-semibold">门店后台</h1>
              <p className="text-sm text-white/60">
                {user?.storeName} ({user?.storeCode})
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/warranty/input"
                className="rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-2 text-sm font-semibold text-black"
              >
                + 新建质保
              </Link>
              <button
                onClick={logout}
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>

        <div className="section-container space-y-8 py-8">
          {/* 统计卡片 */}
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">今日录入</div>
              <div className="mt-2 text-3xl font-semibold text-white">
                {stats.today.input}
              </div>
              <div className="mt-2 text-xs text-white/50">
                待审核：{stats.today.pending} | 已通过：{stats.today.approved}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">本月总计</div>
              <div className="mt-2 text-3xl font-semibold text-white">
                {stats.thisMonth.total}
              </div>
              <div className="mt-2 text-xs text-white/50">
                通过率：{Math.round(
                  (stats.thisMonth.approved / stats.thisMonth.total) * 100,
                )}
                %
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">待审核</div>
              <div className="mt-2 text-3xl font-semibold text-yellow-300">
                {stats.thisMonth.pending}
              </div>
              <div className="mt-2 text-xs text-white/50">需要处理</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">累计质保</div>
              <div className="mt-2 text-3xl font-semibold text-cyan-300">
                {stats.warrantyTotal}
              </div>
              <div className="mt-2 text-xs text-white/50">历史总数</div>
            </div>
          </div>

          {/* 快捷操作 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-xl font-semibold">快捷操作</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/warranty/input"
                className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-cyan-300"
              >
                <div className="text-lg font-semibold text-white">
                  录入新质保
                </div>
                <p className="mt-1 text-sm text-white/60">
                  为客户创建电子质保
                </p>
              </Link>
              <Link
                href="/warranty"
                className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-cyan-300"
              >
                <div className="text-lg font-semibold text-white">查询质保</div>
                <p className="mt-1 text-sm text-white/60">
                  通过编号或手机号查询
                </p>
              </Link>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="text-lg font-semibold text-white">门店资料</div>
                <p className="mt-1 text-sm text-white/60">
                  查看和编辑门店信息
                </p>
              </div>
            </div>
          </div>

          {/* 最近质保记录 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">最近质保记录</h2>
              <Link
                href="#"
                className="text-sm text-cyan-300 hover:text-cyan-200"
              >
                查看全部 →
              </Link>
            </div>
            <div className="space-y-3">
              {mockRecentWarranties.map((warranty) => (
                <div
                  key={warranty.id}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="font-semibold text-white">
                        {warranty.id}
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          warranty.status === "已生效"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {warranty.status}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-white/70">
                      {warranty.customer} · {warranty.car}
                    </div>
                    <div className="mt-1 text-xs text-white/50">
                      {warranty.product} · {warranty.date}
                    </div>
                  </div>
                  <Link
                    href={`/warranty?q=${warranty.id}`}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-cyan-300"
                  >
                    查看详情
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* 数据统计图表占位 */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">本月趋势</h3>
              <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-white/20 text-white/40">
                图表占位（可集成 Chart.js 等）
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">产品分布</h3>
              <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-white/20 text-white/40">
                图表占位（可集成 Chart.js 等）
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

