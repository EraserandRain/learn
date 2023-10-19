interface CupProps {
  guest: number
}
const Cup = ({ guest }: CupProps) => {
  return (
    <div>Tea cup for guest #{guest}</div>
  )
}


export default function App() {
  return (
    <>
      <h1 className="text-1xl font-bold underline">halo</h1>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  )
}