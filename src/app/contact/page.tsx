export default function ContactPage() {
  return (
    <div className="section-container space-y-10 text-white">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
          CONTACT
        </p>
        <h1 className="text-4xl font-semibold">联系我们</h1>
        <p className="text-white/70">
          预约施工、加盟合作、媒体采访等均可通过下方方式与我们联系，客服会在 24
          小时内响应。
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div>
            <div className="text-white/60">客服热线</div>
            <p className="text-3xl font-semibold text-white">400-168-7788</p>
            <p className="text-sm text-white/70">09:00 - 21:00 · 全年无休</p>
          </div>
          <div>
            <div className="text-white/60">总部地址</div>
            <p className="text-lg text-white">广东省广州市龙洞工业园 8 号</p>
          </div>
          <div>
            <div className="text-white/60">商务合作</div>
            <p className="text-lg text-white">biz@liangjiamo.com</p>
          </div>
          <div>
            <div className="text-white/60">加盟咨询</div>
            <p className="text-lg text-white">join@liangjiamo.com</p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">在线留言</h2>
          <form className="mt-6 space-y-4">
            {["姓名", "手机号", "城市", "需求类型"].map((label) => (
              <div key={label}>
                <label className="text-sm text-white/70">{label}</label>
                <input
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
                  placeholder={`请输入${label}`}
                />
              </div>
            ))}
            <div>
              <label className="text-sm text-white/70">留言内容</label>
              <textarea
                className="mt-1 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
                rows={5}
                placeholder="请描述您的需求，客服将在 24 小时内联系您"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 py-3 text-sm font-semibold text-black"
            >
              提交信息
            </button>
          </form>
        </section>
      </div>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        <h2 className="text-2xl font-semibold text-white">加盟流程</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5">
          <li>提交申请：填写门店基本资料与经营区域。</li>
          <li>初审沟通：总部商务确认条件并安排线上交流。</li>
          <li>实地评估：对施工环境、交通与经营资质进行评估。</li>
          <li>签约培训：签署合作协议，技师参加官方培训并考核。</li>
          <li>开业支持：提供开业物料、营销活动、系统使用培训。</li>
        </ol>
      </section>
    </div>
  );
}

