Hello React

# parcel

# structure

# Two type of export and import

Defaut import/export

export defaut <name>
import component from "path"

named import/export

export const component_name
import {component} from ""

# React hooks

they are normal js utility function, which dveloped by fb developers
-useState() super powerful variable (import like named import {useState})
-useEffect() take two args 1. callback(mandatory) 2. dependency

# Routing

import {createBrowserRouter, RouterProvider} form 'react-router-dom'
const appRouter = createBrowserRouter([{path:',',element:<component/>}])
root.render(<RouterProvider router={appRouter}/>)

# route error page

{path:'/',element:<component/>, errorElement:<Error/>}
new hook {useRouteError} from 'react-router-dom'
const err = useRouteError()

<p>{err.status}</p>

# children Route

const appRouter = createBrowserRouter([{path:'/',element:<component/>,
children:[
{
path:'/',element:<component/>
path:'/about',element:<component/>

}
],
errorElement:<Error/>
}])

-> use <Outlet/> inside main file app.js
-> <a> relaod whole page
-> use link always in react <Link to=""/>, it does't reload page just navigate

# Types of Routing in webapp

1. client side routing {component is already present, it just load only}
2. server side routing {page is comming from sever}

# Dynamic Routing

'/about/:id'

# optimization (all are same below)

chunking
code splitting
dynamic bundaling
Lazy-Loading (create bundle for particular) on-demand Loading
{lazy, Suspense} from 'react' // named import like, Suspense is a component
lazy(()=>import('./component/grocery')) //like use/write // create own bundle, you can see network=>JS
element:<Suspense fallback={<p>Loading...</p>}> <Grocery/> </Suspense> // where you are giving route

# Tailwind

how you create your react project(parcel/vite/create-react-app), according that you can find cmd on Tailwindcss site
