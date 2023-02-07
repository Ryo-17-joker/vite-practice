import { Link } from "react-router-dom"

const Home = () => {

	return (
		<>
			<h1>ホーム画面</h1>
			<ul>
				<li>
					<Link to="/omikuji">おみくじ</Link>
				</li>
				<li>
					<Link to="/janken">じゃんけん</Link>
				</li>
			</ul>
		</>
	)
}

export default Home
