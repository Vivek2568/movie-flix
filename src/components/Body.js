import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MovieHero from "./MovieShow";
const Body = () => {
  
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"movie/:id",
          element:<MovieHero/>
        }
    ]);
 
  return (
    <div>
      <RouterProvider 
          router={appRouter}>
      </RouterProvider>
    </div>
  );
};
export default Body;
