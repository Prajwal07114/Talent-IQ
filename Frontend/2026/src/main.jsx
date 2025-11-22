import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
const queryClient = new QueryClient()
console.log("ENV => ", import.meta.env);
console.log("KEY => ", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
      </QueryClientProvider>
      </BrowserRouter>
  </StrictMode>
)
