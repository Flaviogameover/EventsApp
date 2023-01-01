import { useState, useEffect } from 'react';
import { api } from '@services/api';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import styles from '@styles/admin.module.scss';
import { NextPageWithLayout } from "@pages/_app";
import LoginLayout from "@Layout/login-layout";

const AdminPage: NextPageWithLayout = () => {
	const [userInfo, setUserInfo] = useState({
		username: '',
		password: '',
	});
	const [isLogged, setIsLogged] = useState(false);
	const router = useRouter();
	const [cookies, setCookie] = useCookies(['user-event']);

	useEffect(() => {
		if (cookies['user-event']) {
			setIsLogged(true);
			router.push('/admin/dashboard');
		}
	}, [cookies]);

	const login = async (e) => {
		e.preventDefault();
		console.log(userInfo);
		try {
			const request = await api.post('/user/login', userInfo);
			const { token } = request.data;
			setCookie('user-event', token, { path: '/' });
			router.push('/admin/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	if (isLogged) {
		return <div></div>;
	}

	return (
		<div className={styles.login}>
			<h1>Login</h1>
			<form onSubmit={login}>
				<div className={styles.form_group}>
					<label htmlFor="username">
						Username
						<input
							type="text"
							id="username"
							onChange={(e) =>
								setUserInfo({
									...userInfo,
									[e.target.id]: e.target.value,
								})
							}
							value={userInfo.username}
						/>
					</label>
				</div>
				<div className={styles.form_group}>
					<label htmlFor="password">
						Password
						<input
							type="password"
							id="password"
							onChange={(e) =>
								setUserInfo({
									...userInfo,
									[e.target.id]: e.target.value,
								})
							}
							value={userInfo.password}
						/>
					</label>
				</div>
				<div className={styles.form_group}>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};

export default AdminPage;

AdminPage.getLayout = (page) => <LoginLayout>{page}</LoginLayout>;
