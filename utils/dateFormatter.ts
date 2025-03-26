export const formatDate = (date: string | Date): string => {
	const givenDate = new Date(date);
	const now = new Date();
	const diffTime = Math.abs(now.getTime() - givenDate.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays === 0) return 'today';
	if (diffDays === 1) return '1 day ago';
	if (diffDays <= 7) return `${diffDays} days ago`;

	const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
	return givenDate.toLocaleDateString('en-GB', options);
};
