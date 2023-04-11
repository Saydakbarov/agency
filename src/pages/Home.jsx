import { Box } from '@mui/material'
import React from 'react'
import Category from '../components/Category'
import Clients from '../components/Clients'
import Countries from '../components/Countries'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Jobs from '../components/Jobs'
import SearchJobs from '../components/SearchJobs'

export default function Home() {
  return (
    <Box sx={{width:"100%"}}>
        <Header/>
        <Jobs/>
        <SearchJobs/>
        <Countries/>
        <Category/>
        <Clients/>
        <Footer/>
    </Box>
  )
}
