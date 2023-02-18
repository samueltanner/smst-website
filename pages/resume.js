import { Header } from '../components/Header'
export default function Resume() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header sticky={true} />
      <div className="flex h-full w-full items-center justify-center">
        <div className="font-primary text-xl font-extrabold text-primary">
          this is where a resume page will exist
        </div>
      </div>
    </div>
  )
}
