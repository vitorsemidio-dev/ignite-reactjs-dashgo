import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExatHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExatHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = asPath === rest.href || asPath === rest.as;

  if (!shouldMatchExatHref) {
    isActive =
      asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as));
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
}
