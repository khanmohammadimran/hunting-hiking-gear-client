import React from 'react';
import { Link, useMatch, useResolvedPath, LinkProps } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <div>
                <Link
                    style={{ color: match ? "#84CC16" : "#ffffff" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        </div>
    );
};

export default CustomLink;