import Side from './Side'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex">
      <div className="inline-block h-[260px] w-full md:h-screen md:w-2/5">
        <div className="bottom-0 top-0 h-[260px] w-full md:fixed md:h-screen md:w-2/5">
          <Side />
        </div>
      </div>
      <div className="md:flex-1 md:p-6">{children}</div>
    </div>
  )
}
