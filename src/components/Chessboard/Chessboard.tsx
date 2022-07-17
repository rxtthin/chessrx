import FenParser from '@chess-fu/fen-parser';
import { Color } from '../../enums/color-enum';
import { getPieceFromFen } from '../../utils/fen-utils';
import { Piece } from '../../types/piece';
import Tile from '../Tile/Tile';
import './Chessboard.css';

let fenParser: FenParser;

export interface IChessboardProps {
	fen?: string,
};

export const Chessboard: React.FunctionComponent<IChessboardProps> = (props: IChessboardProps) => {
	fenParser = new FenParser(props.fen as string);

	let board: Array<JSX.Element> = [];
	for(let x: number = 0; x < 8; ++x) {
		for(let y: number = 0; y< 8; ++y) {
			const tileColor: Color = (x + y + 2) % 2 === 0 ? Color.White : Color.Black;
			const piece: Piece | null = getPieceFromFen(fenParser.ranks[x][y]);

			board.push(<Tile key={y*8+x} color={tileColor} piece={piece}/>);
		}
	}

	return (
		<div id='chessboard'>
			{board}
		</div>
	);
};

Chessboard.defaultProps = {
	fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
};

export default Chessboard;