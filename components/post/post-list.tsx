'use client';

import { useInfinitePosts } from '@/hooks/useInfinitePosts';
import { Post } from '@/types';
import { SentimentDissatisfied } from '@mui/icons-material';
import { Box, CircularProgress, Typography } from '@mui/material';
import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostCard } from './post-card';

type PostListProps = {
	posts: Post[];
};

export const PostList: FC<PostListProps> = ({ posts: initialPosts }) => {
	const { posts, hasMore, fetchMore } = useInfinitePosts({
		initialPosts,
		limit: 10,
	});

	return (
		<InfiniteScroll
			dataLength={posts.length}
			next={fetchMore}
			hasMore={hasMore}
			loader={
				<Box display="flex" justifyContent="center" alignItems="center" sx={{ my: 2 }}>
					<CircularProgress />
				</Box>
			}
		>
			<Box
				display="grid"
				gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(auto-fit, minmax(300px, 1fr))' }}
				gap={3}
				justifyContent="center"
			>
				{posts && posts.length > 0 ? (
					posts.map(post => <PostCard key={post.id} post={post} />)
				) : (
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						height="100vh"
					>
						<SentimentDissatisfied fontSize="large" />
						<Typography>No posts found.</Typography>
					</Box>
				)}
			</Box>
		</InfiniteScroll>
	);
};

export default PostList;
