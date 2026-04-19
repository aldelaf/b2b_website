export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-base font-semibold text-zinc-200 tracking-tight mb-1">
              Cork Fountain
            </div>
            <div className="text-sm text-zinc-600">
              AI automations for B2B ecommerce operations.
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:alvaro@corkfountain.com"
              className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300"
            >
              alvaro@corkfountain.com
            </a>
            <span className="text-zinc-800">|</span>
            <span className="text-sm text-zinc-600">
              {new Date().getFullYear()} Cork Fountain
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
