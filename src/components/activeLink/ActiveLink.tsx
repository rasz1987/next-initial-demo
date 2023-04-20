import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
	text: string
	href: string
}

const style = {
	color: '#0070f3',
	textDecoration: 'underline'
}

const ActiveLink = ({ text, href }: Props) => {
	const { asPath } = useRouter();

	return (
		<Link
			href={href}
			legacyBehavior
		>
			<a style={asPath === href ? style : undefined} >
				{text}
			</a>
		</Link>
	)
};

export default ActiveLink;