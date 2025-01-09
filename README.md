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

# Redux Tookit RTK

- install @reduxjs/toolkit, react-redux
- Build Own Store
- connect our store to App
- create slice(e.g cart)
- dispatch action
- Selector

# Testing

- unit testing (test component in isolation of the app)
- Integration testing
- End to end testing

# -Setting up testing in our app

-install react testing library

- install jest
- I installed babed dependencies (jest->using babel -> install first one and create Babel.config.js file in root and paste code from abie path )
- configure babel
  -configure parcel config file to disable default Babel transpilation(parecel docs-> javscript -> babel / .parcelrc(create in root folder))
- jest configuration (npx jest --init)
- install jsDOM library (), if you are using jest more than 28 (npm i -D jest-environment-jsdom)
- install @babel/preset-react to make JSX work in test case (npm i -D @babel/preset-react)
  - add ["@babel/preset-react",{runtime:'automatic'}] in babel.config.js file
- install @testing-library/jest-dom & import in testcase file
