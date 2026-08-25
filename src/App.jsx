import { createBrowserRouter, RouterProvider } from "react-router"
import { AppLayout } from "./layouts/AppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { Categories } from "./pages/Categories"
import { RecipeDetails } from "./pages/RecipeDetails"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { TermsOfServices } from "./pages/TermsOfServices"
import { Policy } from "./pages/Policy"
import { SearchItem } from "./pages/SearchItem"
import { CategoryItem } from "./pages/CategoryItem"


const queryClient = new QueryClient()

const App = () => {

  const route = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/categories",
        element: <Categories />
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryItem />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails />
      },
      {
        path: "/policy",
        element: <Policy />
      },
      {
        path: "/termsOfServices",
        element: <TermsOfServices />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Search/:recipeName",
        element: <SearchItem />
      },
    ]
  }])
  return (

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route} />
    </QueryClientProvider>
  )


}
export default App