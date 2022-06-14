import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
    title: string;
    path: string;
    includes?: boolean;
}

export default function NavLink({ title, path, includes = false }: Props) {
    const router = useRouter();
    
    return (
        <NavLinkContainer isActive={includes ? router.pathname.includes(path) : path === router.pathname}>
            <Link href={path}>
                <a>{title}</a>
            </Link>
        </NavLinkContainer>
    )
}