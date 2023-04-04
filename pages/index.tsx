import Rooms from "@/components/Rooms";
import RoomType from "@/types/RoomType";
import Link from "next/link";

export default function Home({ rooms }: { rooms: RoomType[] }) {
  return (
    <>
      <h1>Home</h1>
      <Rooms rooms={rooms} />

      <p>
        <Link href="/ssr">View a SSR page.</Link>
      </p>
      <p>
        <Link href="/ssg">View a SSG page.</Link>
      </p>
    </>
  )
}

export async function getServerSideProps() {
  const rooms = [
    {id: "RD111", isVacant: true},
    {id: "CW320", isVacant: true},
    {id: "CW212", isVacant: false},
    {id: "RO118", isVacant: true},
    {id: "PAT223", isVacant: false},
    {id: "RD112", isVacant: false},
  ]
  return { props: { rooms } }
}