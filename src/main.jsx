import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from "./Routes/Route.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
          <React.StrictMode>
              <RouterProvider router={router} />
          </React.StrictMode>
      </div>
  </div>
)
