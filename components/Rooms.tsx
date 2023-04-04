import { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import TabPanel from './util/TabPanel'
import SearchableRooms from './SearchableRooms'
import RoomType from '../types/RoomType'

export default function Rooms({ rooms }: { rooms: RoomType[] }) {
  
  const [tabValue, setTabValue] = useState(0)
  const handleTabChange = (event: any, newTabValue: number) => {
    setTabValue(newTabValue)
  }

  const vacantRooms = rooms.filter(room => room.isVacant)
  const occupiedRooms = rooms.filter(room => !room.isVacant)

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} >
          <Tab label="Vacant" />
          <Tab label="Occupied" />
        </Tabs>
      </Box>
      
      <TabPanel value={tabValue} index={0}>
        <SearchableRooms rooms={vacantRooms}></SearchableRooms>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <SearchableRooms rooms={occupiedRooms}></SearchableRooms>
      </TabPanel>
    </>
  )
}
