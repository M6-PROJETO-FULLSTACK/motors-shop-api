export interface ICommentRequest {
	message: string;
}

export interface IComment extends ICommentRequest {
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface ICommentUpdate {
	message?: string;
}
