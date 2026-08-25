import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}