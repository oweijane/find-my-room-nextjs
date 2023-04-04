import { ListItem, ListItemText } from "@mui/material"
import RoomType from "../types/RoomType"

export default function Room({ room }: { room: RoomType }) {
  return (
    <ListItem>
      <ListItemText primary={room.id} />
    </ListItem>
  )
}
