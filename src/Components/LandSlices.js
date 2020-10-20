
import React from 'react';
import firebase from '../config/firebase';
import Modal from 'react-modal';
import LandUpdate from './LandUpdate';
import Cards from './Cards';
import Loader from './loader';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	},
	overlay: {
		background:' rgb(0 0 0 / 84%)'
	  }
};
Modal.setAppElement('#root')
class LandSlices extends React.Component {
	constructor(props) {

		super(props);

		this.state = { Landslist: [], isModalOpen: false ,isLoading:true}
	}

	componentDidMount() {
		firebase.database().ref("Landslist").on("value", snapshot => {
			let Landlist = [];
			snapshot.forEach(snap => {
				Landlist.push(snap.val());
			});
			this.setState({ Landslist: Landlist,isLoading:false});
		});
	}

	closeModal = () => {
		this.setState({ isModalOpen: false })
	}
	openModal = () => {
		this.setState({ isModalOpen: true })
	}


	render() {
		const { Landslist,isLoading } = this.state;
		return (
			
			<div className="main">
			
				<div className="cpy">

					<header className="header">
						<div className="title-button">

							<h1><img className="logo" src="/plant.svg" />SeeCent</h1>
							<button className="button" onClick={this.openModal}>For Sale</button>

						</div>
						<h3 className="sub-titles">Sell or Buy lands at one spot!</h3>
					</header>

					<div className="section-content">
			{isLoading ? <Loader/>:null}
						{Landslist.map(data => <Cards data={data} />)}
					</div>
				</div>
				<Modal
					isOpen={this.state.isModalOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
				>
					<LandUpdate clsModal={this.closeModal} />
				</Modal>
				
			</div>
		)
	}
}
export default LandSlices;