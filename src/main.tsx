import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//import './assets/css/index.css'
import EventTag from './components/events/EventTag.tsx';
import { RouterProvider } from "react-router-dom";

import router from "routes/router.tsx";
import 'css/reset.css'

const queryClient = new QueryClient()

async function enableMocking() {
  if (!import.meta.env.DEV || import.meta.env.VITE_IGNORE_MSW.toLowerCase() === "true") {
    return
  }

  const { worker } = await import('./mocks/worker')

  return worker.start({ onUnhandledRequest: "bypass" })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <EventTag name={'Event Test 1 - Software Development'} datetime={new Date()} backgroundColor={'#528EE8'} />
        <EventTag name={'Event Test 2 - Machine Learning'} datetime={new Date()} backgroundColor={'#8BCA80'} />
        <EventTag name={'Event Test 3 - Blockchain'} datetime={new Date()} backgroundColor={'#EA5959'} />
        <EventTag name={'Event Test 4 - Quant'} datetime={new Date()} backgroundColor={'#C179B9'} />
        <EventTag name={'Event Test 5 - Internal Affairs'} datetime={new Date()} backgroundColor={'#7DCACF'} />
        <EventTag name={'Event Test 6 - External Relations'} datetime={new Date()} backgroundColor={'#FDCE55'} />
        <EventTag name={'Event Test 7 - Presidential Cell'} datetime={new Date()} backgroundColor={'#0C1747'} />
        <RouterProvider router={router}/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </React.StrictMode>,
  )
})
