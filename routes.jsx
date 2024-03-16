import EventList from './pages/EventList/EventList'
import EventDetails from './pages/Event_Details/EventDetails'
import FilterEvents from './pages/FilterEvents/FilterEvents'

import './App.css'
export const routes =([
     {path:'/', element:<EventList/>},
    {path:'/find-events',element:<FilterEvents/>},
    {path:'/events/:id',element:<EventDetails/>}
])