import Loading from "@/components/Loading/Loading"
import { PATH } from "@/constants/paths"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
const Home = lazy(() => import("@/pages/Home/Home"))

export default function HomeRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )}
      />
    </Switch>
  )
}
