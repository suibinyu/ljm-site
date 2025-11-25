"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";

type LoginType = "store" | "agent";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [loginType, setLoginType] = useState<LoginType>("store");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Mock 登录验证（实际应调用 API）
    setTimeout(() => {
      // 模拟验证逻辑
      const mockUsers = {
        store: { username: "store001", password: "123456" },
        agent: { username: "agent001", password: "123456" },
      };

      const user = mockUsers[loginType];
      if (username === user.username && password === user.password) {
        // 使用 auth context 的 login 方法
        login({
          type: loginType,
          username,
          storeCode: loginType === "store" ? "LJM-SH-023" : "LJM-AGENT-001",
          storeName:
            loginType === "store"
              ? "量佳膜·徐汇旗舰店"
              : "量佳膜·区域代理",
        });
        router.push("/dashboard");
      } else {
        setError("用户名或密码错误");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#03070f] px-6 py-12">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">门店/代理登录</h1>
          <p className="mt-2 text-sm text-white/70">
            登录后可使用质保录入、数据统计等功能
          </p>
        </div>

        <div className="flex gap-2 rounded-2xl border border-white/10 bg-black/40 p-1">
          <button
            type="button"
            onClick={() => setLoginType("store")}
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
              loginType === "store"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            门店登录
          </button>
          <button
            type="button"
            onClick={() => setLoginType("agent")}
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
              loginType === "agent"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            代理登录
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-white/70">用户名</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
              placeholder={
                loginType === "store" ? "门店账号" : "代理账号"
              }
              required
            />
          </div>
          <div>
            <label className="text-sm text-white/70">密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
              placeholder="请输入密码"
              required
            />
          </div>
          {error && (
            <div className="rounded-xl bg-red-500/20 px-4 py-2 text-sm text-red-300">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/40 disabled:opacity-50"
          >
            {loading ? "登录中..." : "登录"}
          </button>
        </form>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/60">
          <div className="font-semibold text-white">测试账号：</div>
          <div className="mt-2">
            门店：store001 / 123456
            <br />
            代理：agent001 / 123456
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-cyan-300 hover:text-cyan-200"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}

