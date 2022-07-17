import { Color } from "../enums/color-enum"
import { PieceType } from "../enums/piece-type-enum"

export type Piece = {
	color: Color,
	type: PieceType,
}