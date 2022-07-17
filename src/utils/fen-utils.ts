import { Color } from "../enums/color-enum";
import { Piece } from "../types/piece";
import { PieceType } from "../enums/piece-type-enum";

export function getFenSymbol(piece: Piece) {
	let result: string = piece.type as string;

	if(piece.color === Color.Black)
		result = result.toLowerCase();
	
	return result;
}

export function getPieceFromFen(fen: string): Piece | null {
	if(!fen)
		return null;

	const type: PieceType = fen as PieceType;
	const color: Color = fen === fen.toLowerCase() ? Color.Black : Color.White; 
	
	if(type === PieceType.None) 
		return null;

	return {
		color: color,
		type: type	
	};
}