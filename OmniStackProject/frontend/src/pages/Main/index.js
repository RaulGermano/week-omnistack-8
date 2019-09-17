import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.svg';
import likeIcon from '../../img/like.svg';
import dislikeIcon from '../../img/dislike.svg';
import Header from '../../components/Header';
import Api from '../../services/api';
import './main.css';

function Main(props) {
	const { match } = props;

	const [devs, setDevs] = useState([]);

	useEffect(() => {
		async function loadDevs() {
			const res = await Api.get('/dev', {
				headers: {
					user: match.params.id
				}
			});

			setDevs(res.data);
		}

		loadDevs();
	}, [match.params.id]);

	async function handleLikeButton(id) {
		await Api.post(`dev/${id}/likes`, null, {
			headers: {
				user: match.params.id
			}
		});

		setDevs(devs.filter(dev => dev._id !== id));
	}

	async function handleDisikeButton(id) {
		await Api.post(`dev/${id}/dislikes`, null, {
			headers: {
				user: match.params.id
			}
		});

		setDevs(devs.filter(devs => devs._id !== id));
	}

	return (
		<div className='container'>
			<Header />
			<div className='container-main'>
				<img src={logo} alt='Logo' />
				{devs.length > 0 ? (
					<ul>
						{devs.map(dev => (
							<li key={dev._id}>
								<img src={dev.avatar} alt={dev.user} />
								<footer>
									<strong>{dev.name}</strong>

									<p>{dev.bio}</p>
								</footer>

								<div className='container-options'>
									<button
										type='buttom'
										onClick={() =>
											handleLikeButton(dev._id)
										}
									>
										<img src={likeIcon} alt='like' />
									</button>
									<button
										type='buttom'
										onClick={() =>
											handleDisikeButton(dev._id)
										}
									>
										<img src={dislikeIcon} alt='dislike' />
									</button>
								</div>
							</li>
						))}
					</ul>
				) : (
					<div className='container-list-empty'>
						<p>Acabou</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Main;
