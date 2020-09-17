import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';

export default class ChessBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div>
				<Chessboard />
			</div>
		);
	}
}