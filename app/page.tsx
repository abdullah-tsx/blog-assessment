import { PostList } from '@/components/post';
import { Typography } from '@mui/material';
import React from 'react';

export default async function HomePage() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_INSTANCE}/posts?limit=10&page=1`, {
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		return <Typography color="error">Error loading posts.</Typography>;
	}

	const posts = await res.json();

	return <PostList posts={posts} />;
}
