import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";

import { ToDoListPage } from "./pages/ToDoListPage";
import { ItemDescription } from "./pages/ItemDescription";
import { ToDo } from "./models/todo-item";
import { ViewList } from "./pages/ViewList";

const todos: ToDo[] = [
    {
        id: 0,
        text: 'Первое действие',
        isDone: false
    },
    {
        id: 1,
        text: 'Второе действие',
        isDone: true
    },
    {
        id: 2,
        text: 'Третье действие',
        isDone: false
    },
    {
        id: 3,
        text: 'Четвертое действие',
        isDone: true
    }
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <ToDoListPage />
            },

            {
                path: '/list/:id',
                element: <ViewList todos={todos} />,
                children: [
                    {
                        path: ':id',
                        element: <ItemDescription todos={todos} />
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])