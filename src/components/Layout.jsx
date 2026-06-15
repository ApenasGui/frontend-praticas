import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export default function Layout(){
    return <>
    <aside>
        <Sidebar />
    </aside>
    
    <main>
        <Outlet />
    </main>
    </>
}
