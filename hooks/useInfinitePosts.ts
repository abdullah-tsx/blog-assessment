import { useEffect, useState } from 'react';
import { useGetPostsQuery } from '@/features/blog';
import { Post, UseInfinitePostsProps } from '@/types';

export function useInfinitePosts({ initialPosts, limit = 10 }: UseInfinitePostsProps) {
	// Start with SSR data for page 1.
	const [posts, setPosts] = useState<Post[]>(initialPosts);
	// Start fetching from page 2.
	const [pageToLoad, setPageToLoad] = useState(2);
	const [hasMore, setHasMore] = useState(true);

	// Skip fetching if we're on page 1.
	const { data: newPosts, isFetching } = useGetPostsQuery(
		{ page: pageToLoad, limit },
		{ skip: pageToLoad === 1 },
	);

	useEffect(() => {
		if (newPosts) {
			if (newPosts.length === 0) {
				setHasMore(false);
			} else {
				// Append new posts without duplicates (this is just a safety net)
				setPosts(prev => {
					const newUnique = newPosts.filter(np => !prev.some(p => p.id === np.id));
					return [...prev, ...newUnique];
				});
			}
		}
	}, [newPosts]);

	const fetchMore = () => {
		if (!isFetching && hasMore) {
			setPageToLoad(prev => prev + 1);
		}
	};

	return { posts, hasMore, fetchMore, isFetching };
}
