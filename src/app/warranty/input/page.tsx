"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProtectedRoute } from "@/components/protected-route";
import { useAuth } from "@/contexts/auth-context";

type ProductType = "solar" | "ppf" | "color";

const productOptions = {
  solar: [
    { id: "photon92", name: "旗舰太阳膜 Photon 92", warranty: "10年" },
    { id: "photon85", name: "标准太阳膜 Photon 85", warranty: "8年" },
  ],
  ppf: [
    { id: "diamond-pro", name: "漆面保护膜 · 钻石盾 Pro", warranty: "8年" },
    { id: "diamond-standard", name: "漆面保护膜 · 钻石盾标准", warranty: "5年" },
  ],
  color: [
    { id: "color-electric", name: "改色膜 · 电光系列", warranty: "5年" },
    { id: "color-laser", name: "改色膜 · 镭射系列", warranty: "5年" },
  ],
};

export default function WarrantyInputPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    productType: "" as ProductType | "",
    productId: "",
    customerName: "",
    customerPhone: "",
    carBrand: "",
    carModel: "",
    vin: "",
    installParts: [] as string[],
    installDate: "",
    batchNumber: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warrantyId, setWarrantyId] = useState("");

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | string[],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // 模拟 API 调用
    setTimeout(() => {
      // 生成质保编号
      const newWarrantyId = `LJM-${formData.carModel
        .replace(/\s/g, "")
        .toUpperCase()
        .slice(0, 6)}-${new Date().getFullYear()}-${String(
        Math.floor(Math.random() * 100),
      ).padStart(2, "0")}`;

      setWarrantyId(newWarrantyId);
      setSuccess(true);
      setSubmitting(false);
    }, 1500);
  };

  if (success) {
    return (
      <ProtectedRoute>
        <div className="section-container space-y-6 text-white">
          <div className="mx-auto max-w-2xl rounded-3xl border border-cyan-300/40 bg-black/40 p-8 text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h1 className="text-3xl font-semibold text-white">
              质保录入成功
            </h1>
            <p className="mt-4 text-white/70">
              电子质保已生成，已发送短信通知车主
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">质保编号</div>
              <div className="mt-2 text-2xl font-semibold text-cyan-300">
                {warrantyId}
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => {
                  setSuccess(false);
                  setStep(1);
                  setFormData({
                    productType: "",
                    productId: "",
                    customerName: "",
                    customerPhone: "",
                    carBrand: "",
                    carModel: "",
                    vin: "",
                    installParts: [],
                    installDate: "",
                    batchNumber: "",
                    notes: "",
                  });
                }}
                className="flex-1 rounded-2xl border border-white/20 px-6 py-3 text-white hover:border-cyan-300"
              >
                继续录入
              </button>
              <button
                onClick={() => router.push("/dashboard")}
                className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 font-semibold text-black"
              >
                返回仪表盘
              </button>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="section-container space-y-8 text-white">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
            WARRANTY INPUT
          </p>
          <h1 className="text-4xl font-semibold">质保录入</h1>
          <p className="text-white/70">
            门店：{user?.storeName} ({user?.storeCode})
          </p>
        </header>

        <div className="mx-auto max-w-3xl">
          {/* 步骤指示器 */}
          <div className="mb-8 flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-1 items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    step >= s
                      ? "border-cyan-300 bg-cyan-300 text-black"
                      : "border-white/20 text-white/40"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`h-1 flex-1 ${
                      step > s ? "bg-cyan-300" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 步骤 1: 产品信息 */}
            {step === 1 && (
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold">选择产品</h2>
                <div>
                  <label className="text-sm text-white/70">产品类型</label>
                  <div className="mt-2 grid gap-3 md:grid-cols-3">
                    {(["solar", "ppf", "color"] as ProductType[]).map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            handleInputChange("productType", type);
                            handleInputChange("productId", "");
                          }}
                          className={`rounded-2xl border p-4 text-left transition ${
                            formData.productType === type
                              ? "border-cyan-300 bg-cyan-300/10"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="font-semibold text-white">
                            {type === "solar"
                              ? "太阳膜"
                              : type === "ppf"
                                ? "漆面保护膜"
                                : "改色膜"}
                          </div>
                        </button>
                      ),
                    )}
                  </div>
                </div>
                {formData.productType && (
                  <div>
                    <label className="text-sm text-white/70">具体产品</label>
                    <div className="mt-2 space-y-2">
                      {productOptions[formData.productType].map((product) => (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() =>
                            handleInputChange("productId", product.id)
                          }
                          className={`w-full rounded-2xl border p-4 text-left transition ${
                            formData.productId === product.id
                              ? "border-cyan-300 bg-cyan-300/10"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-white">
                                {product.name}
                              </div>
                              <div className="text-sm text-white/60">
                                质保期：{product.warranty}
                              </div>
                            </div>
                            {formData.productId === product.id && (
                              <div className="text-cyan-300">✓</div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.productType || !formData.productId}
                    className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 font-semibold text-black disabled:opacity-50"
                  >
                    下一步
                  </button>
                </div>
              </div>
            )}

            {/* 步骤 2: 客户与车辆信息 */}
            {step === 2 && (
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold">客户与车辆信息</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm text-white/70">客户姓名</label>
                    <input
                      type="text"
                      value={formData.customerName}
                      onChange={(e) =>
                        handleInputChange("customerName", e.target.value)
                      }
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">客户手机</label>
                    <input
                      type="tel"
                      value={formData.customerPhone}
                      onChange={(e) =>
                        handleInputChange("customerPhone", e.target.value)
                      }
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">车辆品牌</label>
                    <input
                      type="text"
                      value={formData.carBrand}
                      onChange={(e) =>
                        handleInputChange("carBrand", e.target.value)
                      }
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">车辆型号</label>
                    <input
                      type="text"
                      value={formData.carModel}
                      onChange={(e) =>
                        handleInputChange("carModel", e.target.value)
                      }
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-white/70">车架号 (VIN)</label>
                    <input
                      type="text"
                      value={formData.vin}
                      onChange={(e) =>
                        handleInputChange("vin", e.target.value.toUpperCase())
                      }
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
                      placeholder="17位车架号"
                      maxLength={17}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-white/70">施工部位</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        "前挡",
                        "后挡",
                        "侧窗",
                        "天窗",
                        "全车",
                        "引擎盖",
                        "前杠",
                        "后杠",
                      ].map((part) => (
                        <button
                          key={part}
                          type="button"
                          onClick={() => {
                            const parts = formData.installParts.includes(part)
                              ? formData.installParts.filter((p) => p !== part)
                              : [...formData.installParts, part];
                            handleInputChange("installParts", parts);
                          }}
                          className={`rounded-full border px-4 py-2 text-sm transition ${
                            formData.installParts.includes(part)
                              ? "border-cyan-300 bg-cyan-300/20 text-cyan-300"
                              : "border-white/20 text-white/70 hover:border-white/40"
                          }`}
                        >
                          {part}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-2xl border border-white/20 px-6 py-3 text-white hover:border-white/40"
                  >
                    上一步
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={
                      !formData.customerName ||
                      !formData.customerPhone ||
                      !formData.carBrand ||
                      !formData.carModel ||
                      !formData.vin
                    }
                    className="ml-auto rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 font-semibold text-black disabled:opacity-50"
                  >
                    下一步
                  </button>
                </div>
              </div>
            )}

            {/* 步骤 3: 施工信息与提交 */}
            {step === 3 && (
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold">施工信息</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm text-white/70">施工日期</label>
                    <input
                      type="date"
                      value={formData.installDate}
                      onChange={(e) =>
                        handleInputChange("installDate", e.target.value)
                      }
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">产品批次号</label>
                    <input
                      type="text"
                      value={formData.batchNumber}
                      onChange={(e) =>
                        handleInputChange("batchNumber", e.target.value)
                      }
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
                      placeholder="如：BATCH-2024-11-001"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-white/70">备注</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) =>
                        handleInputChange("notes", e.target.value)
                      }
                      className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300"
                      rows={4}
                      placeholder="施工过程中的特殊情况、客户要求等"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-white/70">
                      上传施工照片（可选）
                    </label>
                    <div className="mt-2 rounded-2xl border border-dashed border-white/20 p-8 text-center">
                      <div className="text-white/60">
                        点击或拖拽上传施工前后对比照片
                      </div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="mt-2 hidden"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="agreement"
                      required
                      className="h-4 w-4 rounded border-white/20"
                    />
                    <label htmlFor="agreement" className="text-sm text-white/70">
                      我已确认信息准确，同意生成电子质保并发送给客户
                    </label>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-2xl border border-white/20 px-6 py-3 text-white hover:border-white/40"
                  >
                    上一步
                  </button>
                  <button
                    type="submit"
                    disabled={submitting || !formData.installDate || !formData.batchNumber}
                    className="ml-auto rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 font-semibold text-black disabled:opacity-50"
                  >
                    {submitting ? "提交中..." : "提交并生成质保"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}

