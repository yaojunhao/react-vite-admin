import { ReactNode, lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { Spin } from "antd";
import Layout from "@/layouts";
const lazyLoad = (children: ReactNode) => {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
};
const LoadingPage = () => {
  return (
    <div className="flex-center" style={{ height: "80vh" }}>
      <Spin size="large" />
    </div>
  );
};

const Home = lazy(() => import("@/pages/Home"));
const List = lazy(() => import("@/pages/List"));
const NotFound = lazy(() => import("@/pages/Error/404"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "home",
        element: lazyLoad(<Home />),
      },
      {
        index: true,
        path: "list",
        element: lazyLoad(<List />),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
