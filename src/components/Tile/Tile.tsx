import { Color } from '../../enums/color-enum';
import { getFenSymbol } from '../../utils/fen-utils';
import { Piece } from '../../types/piece';
import './Tile.css';

interface ITileProps {
	color: Color,
	piece: Piece | null,
}

export default function Tile(props: ITileProps) {
	const colorClass = props.color === Color.White ? 'tile-white' : 'tile-black';

	return (
		<div className={`tile ${colorClass}`}>
			{ props.piece && <div className='piece' style={{backgroundImage: `url(./assets/images/pieces/${getFenSymbol(props.piece)}.svg)`}}></div> }
		</div>	
	);
}