import React, { useState } from 'react'
import Room from './Room'
import { List, TextField } from '@mui/material'
import RoomType from '../types/RoomType'


export default function SearchableRooms({ rooms }: { rooms: RoomType[] }) {
  const [filteredRooms, setFilteredRooms] = useState(rooms)
  // const [prevRooms, setPrevRooms] = useState(null);

  // if (rooms !== prevRooms) {
  //   if(prevRooms !== null)
  //     setFilteredRooms(rooms);
  //   setPrevRooms(rooms);
  // }
  
  const handleInputChange = (event: any) => {
    const inputValue = event.target.value
    const filtered = rooms.filter((item) =>
      item.id.toLowerCase().includes(inputValue.toLowerCase())
    )
    setFilteredRooms(filtered);
  }

  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleInputChange}
        size='small'
      />
      <List dense={true}>
        {filteredRooms.map((room) => (
          <Room room={room} key={room.id}/>
        ))}
      </List>
    </>
  )
}
