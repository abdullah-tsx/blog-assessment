export interface Post {
	id: number;
	title: string;
	author: string;
	body: string;
	cover: string;
	avatar: string;
	createdAt: string;
}

export interface CreatePostFormProps {
	onSuccess?: () => void;
}

export type FormValues = {
	title: string;
	author: string;
	body: string;
};

export interface CreatePostModalProps {
	open: boolean;
	onClose: () => void;
}

export interface UseInfinitePostsProps {
	initialPosts: Post[];
	limit?: number;
}
